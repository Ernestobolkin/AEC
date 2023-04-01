import { generateErrorCode } from "./errorCodeService";
import { ICard, ITransaction, IUserCreation } from "../interfaces/userInterface";
import { getUserByUserName } from "../repositories/userRepo";
import { createCard } from "../repositories/cardRepo";
import { updateUser } from "../repositories/userRepo";
import Transaction from "../models/Transaction";
import User from "../models/user";
import Card from "../models/Card";


const cardCreationService = async (card:ICard, userData:IUserCreation) => {
    try{
        const user = await getUserByUserName(userData.userName);
        if(!user){
            return generateErrorCode("CR", 3, "User not found");
        }
        const newCard = await createCard(card,userData);  
        if(!newCard){
            return generateErrorCode("CR", 1, "Card not created");
        }
        const updateData = { $push: { Cards: newCard } };
        const updatedUser = await updateUser(user._id, updateData);
        if(!updatedUser){
            return generateErrorCode("CR", 2, "User not updated");
        }
        return null;
    }catch(error){
        console.log("an error has accrued while trying to create  \n",error);
        return generateErrorCode(null, 1);
    }
}

const updateTransactionService = async ({Description, Amount, CardId}:ITransaction,  userData: IUserCreation) => {
    try{
        if(userData.Cards.includes(CardId) === false){
            return generateErrorCode("CR", 4);
        }
        const newTransaction = new Transaction({
            Description,
            Amount
          });
          const updatedCard = await Card.findByIdAndUpdate(
            CardId,
            { $push: { Transactions: newTransaction } },
            { new: true }
          );
        await newTransaction.save();
        return updatedCard;
    }catch(Exception){
        console.log("an error has accrued while trying to create transaction  \n", Exception);
        return null
    }
}


export { cardCreationService, updateTransactionService };