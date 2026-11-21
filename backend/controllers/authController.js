const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async(req, res) => {
    try {
        const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Please provide a valid email address" });
    }
    
    if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });
    return res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            email: user.email,
        },
    });
}
catch (error) {
  // If Ahmed tries to register twice with the same email, MongoDB rejects the second registration with a duplicate-key error.

  //  Mongoose identifies this error using:
    // error.code === 11000

    if (error.code === 11000) {
        return res.status(409).json({ message: "Email already exists" });
        // 409 Conflict is the appropriate status code for duplicate entries
}
    return res.status(500).json({ message: "Registration failed" });
}
}

// login function
const login = async(req, res) => {
    try{
        const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    // Find the user by email
    const user =  await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    //Why 401? Because the request is unauthorized - the user is not authenticated
    const  isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    //Email and password are correct → we continue to generate a token.
    const token =jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    )
    return res.status(200).json({
        message: "Login successful",
        token,
        user: {
            id: user._id,
            email: user.email,
        },
    });
    }  catch (error)
     {
        return res.status(500).json({ message: "Login failed" });
    }
}
module.exports = { register, login };