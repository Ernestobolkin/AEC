import Transaction from "../models/Transaction";
import { ITransaction } from "../interfaces/userInterface";

const insertTransaction = async (transaction: ITransaction) => {
    try {
        const newTransaction = new Transaction({
            Description: transaction.Description,
            Amount: transaction.Amount,
        });
        await newTransaction.save();
        return newTransaction;
    }
    catch (Exception) {
        console.log("an error has accrued while trying to create  \n", Exception);
        return null
    }
}

export { insertTransaction };