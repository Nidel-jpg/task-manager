const User = require("../models/User");
const bcrypt = require("bcrypt");

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

module.exports = { register };