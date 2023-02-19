const jwt = require("jsonwebtoken");
const config = require("../config")
const verifyJwt = (req, res, next) => {
    try {
        const token = req.headers["authorization"]?.split(" ")[1];
        if (token) {
            throw new Error("Token not found")
        }
        const res = jwt.verify(token, config.jwtSecret)
        next();
    } catch (error) {
        console.log(error)
        if(error.name && error.name === "TokenExpiredError") {
            return res.status(401).json({message: "Token Expired"})
        }
        if(error.name && error.name === "JsonWebTokenError") {
            return res.status(401).json({message: "Invalid Token"})
        }
        return res.status(403).json({message: "Unauthorized"})
    }
    
} 

 const jwtCreate = (req, res) => {
    const tokent = jwt.sign({
        user: req.body.userName,
        password: req.body.password
    }, config.jwtSecret, {expiresIn: "1 seconds"},)
    return tokent;
}

module.exports = { 
    verifyJwt,
    jwtCreate
};


