const jwt= require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    // Get the token from the Authorization header
    const authHeader = req.headers.authorization;
    if  (!authHeader){
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer' || !parts[1]) {
        return res.status(401).json({ message: "Invalid authorization format." });
    }
    const token = parts[1];
    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded user information to the request object
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid or expired token." });
    }
    next(); // Proceed to the next middleware or route handler
}

module.exports = authMiddleware;