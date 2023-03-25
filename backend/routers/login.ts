import { jwtCreate } from "../service/jwtService";
import { Request, Response } from "express";
import { loginService } from "../service/loginService";
import { generateErrorCode } from "../service/errorCodeService";

const login = async (req: Request, res: Response) => {
  try {
      if (req.body?.userName && req.body?.password !== null) {
        const responseData = await loginService(req.body);
        if(typeof responseData === "object" ){
            return res.send(responseData).status(200);
        }else{
          return res.send(responseData).status(400);
        }
      }else{
        const errorCode = generateErrorCode("LOGIN", 1);
        return res.send(errorCode).status(400);
      }
  } catch (Exception) {
      return res.send(Exception).status(400);
  }
}   

export { login };