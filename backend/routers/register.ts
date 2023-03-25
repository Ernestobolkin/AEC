import { Request, Response } from "express";
import { registerService } from "../service/register";

const register = async (req: Request, res: Response) => {
    try {
        if (req.body?.userName && req.body?.password && req.body?.email !== null) {
            const response = await registerService(req.body);
            if(response?.token){
                return res.send(response).status(200);
            }else{
              if(response?.message){
                return res.send(response).status(400);
              }

            }
        }else{
            return res.send("Missing parameters").status(400);
        }
      } catch (Exception) {
        return res.send(Exception).status(400);
    }
}             

export { register };