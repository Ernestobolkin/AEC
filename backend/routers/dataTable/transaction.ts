import Transaction from "../../models/Transaction";
import { Request, Response } from "express";
import { updateTransactionService, fetchCardsService } from "../../service/cardService";
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


const getCardDetails = async (req: Request, res: Response) => {
    try {
      if(!req.body?.userName){
        return res.send("Season Expired ").status(400);
      }
      if(!req.body?.CardId){
        return res.send("CardId is required").status(400);
      }
        const response = await fetchCardsService(req.body.userName, req.body?.CardId)
        if(response?.code || response?.message){
          return res.send(response).status(400);
        }
        return res.send(response).status(200);
    } catch (Exception) {
        return res.send(Exception).status(400);
    }
}


export { getCardDetails, createTransaction };
