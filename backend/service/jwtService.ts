const jwt = require("jsonwebtoken");
import config  from "../config";
import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/userInterface";



export const verifyJwt = (req, res, next) => {
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

export const jwtCreate = (user: IUser) => {
    const token = jwt.sign({
        user: user.UserName,
        email: user.Email,
    }, config.jwtSecret, {expiresIn: "1 d"},)
    return token;
}




