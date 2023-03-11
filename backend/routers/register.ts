import { Request, Response } from "express";
import { registerService } from "../service/register";


const register = async (req: Request, res: Response) => {
    try {
        if (req.body?.userName && req.body?.password && req.body?.email !== null) {
            const response = await registerService(req.body);
            if(response?.token){
                res.send(response).status(200);
            }else{
              if(response?.message){
                res.send(response).status(400);
              }
            }
        }else{
            res.send("Missing parameters").status(400);
        }
      } catch (Exception) {
        console
        res.send(Exception).status(400);
    }
}

export { register };