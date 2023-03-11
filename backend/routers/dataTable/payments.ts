import Payment from "../../models/Payment";
import { Request, Response } from "express";

const updatePayment = async (req: Request, res: Response) => {
  try {
    if (req.body?.payment && req.body?.payment !== null) {
      const { Name, Description, Date, Amount } = req.body;
      const payment = new Payment({
        Name,
        Description,
        Date,
        Amount
      });
      await payment.save();
        //create code messages for the client
      res.send("Payment updated").status(200);
    }
  } catch (Exception) {
    res.send(Exception).status(400);
  }
}


const getPayments = async (req: Request, res: Response) => {
    try {
        const payments = await Payment.find({});
        res.send(payments).status(200);
    } catch (Exception) {
        res.send(Exception).status(400);
    }
}


export { updatePayment, getPayments };