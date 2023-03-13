const jwt = require("jsonwebtoken");
import config  from "../config";
import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/userInterface";


export const verifyJwt = (req, res, next) => {
    try {
        const token = req.headers["authorization"]?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token not found" });
        }
        const decodedToken = jwt.verify(token, config.jwtSecret);
        req.body.user = decodedToken?.UserName;
        next(req.body);
    } catch (error) {
        console.error(error);
        if (error.message === "jwt expired") {
            return res.status(401).json({ message: "Token Expired" });
        }
        if (error.message === "invalid signature") {
            return res.status(401).json({ message: "Invalid Token" });
        }
        return res.status(403).json({ message: "Unauthorized" });
    }
}

export const jwtCreate = (user: IUser) => {
    const token = jwt.sign({
        user: user.UserName,
        email: user.Email,
    }, config.jwtSecret, {expiresIn: "1 d"},)
    return token;
}




