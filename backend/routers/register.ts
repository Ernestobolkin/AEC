import { Request, Response } from "express";
import { registerService } from "../service/register";

const register = async (req: Request, res: Response) => {
  try {
    if (req.body?.userName && req.body?.password && req.body?.email !== null) {
      const response = await registerService(req.body);
      if (response.message) {
        return res.send(response).status(400);
      }
      return res.send(response).status(200);
    }
  } catch (Exception) {
    return res.send(Exception).status(400);
  }
}

export { register };