import Transaction from "../../models/Transaction";
import { Request, Response } from "express";
import User from "../../models/user";
import { updateTransactionService } from "../../service/cardService";
import { getUserByUserName } from "../../repositories/userRepo";

const createTransaction = async (req: Request, res: Response) => {
  try {
    if (req.body?.Description && req.body?.Amount !== null) {
      const user = await getUserByUserName(req.body.userName);
      if(!user){
        return res.send("Season Expired ").status(400);
      }
      const response = await updateTransactionService(req.body, user);
      if(response?.code || response?.message){
        return res.send(response).status(400);
      }
      return res.send(response).status(200);
    }
    return res.send("Payment not updated").status(400);
  } catch (Exception) {
    return res.send(Exception).status(400);
  }
}


const getTransactions = async (req: Request, res: Response) => {
    try {
      if(!req.body?.userName){
        return res.send("Season Expired ").status(400);
      }
        const transaction = await Transaction.find({});
        return res.send(transaction).status(200);
    } catch (Exception) {
        return res.send(Exception).status(400);
    }
}


export { getTransactions, createTransaction };
