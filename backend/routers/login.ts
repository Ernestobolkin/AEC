import { jwtCreate } from "../service/jwtService";
import { Request, Response } from "express";
import { loginService } from "../service/loginService";
import { generateErrorCode } from "../service/errorCodeService";

const login = async (req: Request, res: Response) => {
  try {
      if (req.body?.userName && req.body?.password !== null) {
        const responseData = await loginService(req.body);
        if(typeof responseData === "object" ){
            res.send(responseData).status(200);
        }else{
          res.send(responseData).status(400);
        }
      }else{
        const errorCode = generateErrorCode("LOGIN", 1);
        res.send(errorCode).status(400);
      }
  } catch (Exception) {
      res.send(Exception).status(400);
  }
}   

export { login };