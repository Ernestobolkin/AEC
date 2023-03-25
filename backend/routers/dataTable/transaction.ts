import Transaction from "../../models/Transaction";
import { Request, Response } from "express";
import User from "../../models/user";

const updateTransaction = async (req: Request, res: Response) => {
  try {
    if (req.body?.payment && req.body?.payment !== null) {
      const { Description, Amount } = req.body;
      const user = await User.findById(req.userName);
      if(!user){
        return res.send("Season Expired ").status(400);
      }
      const transaction = new Transaction({
        Description,
        Amount
      });
      await transaction.save();
      return res.send("Payment updated").status(200);
    }
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


export { updateTransaction, getTransactions };
