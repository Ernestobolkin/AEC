import Transaction from "../../models/Payment";
import { Request, Response } from "express";

const updateTransaction = async (req: Request, res: Response) => {
  try {
    if (req.body?.payment && req.body?.payment !== null) {
      const { Name, Description, Date, Amount } = req.body;
      const payment = new Transaction({
        Name,
        Description,
        Date,
        Amount
      });
      await payment.save();
      res.send("Payment updated").status(200);
    }
  } catch (Exception) {
    res.send(Exception).status(400);
  }
}


const getTransactions = async (req: Request, res: Response) => {
    try {
      if(!req.body?.userName){
        return res.send("Season Expired ").status(400);
      }
        const transaction = await Transaction.find({});
        res.send(transaction).status(200);
    } catch (Exception) {
        res.send(Exception).status(400);
    }
}


export { updateTransaction, getTransactions };
