import { generateErrorCode } from "./errorCodeService";
import { ICard, ITransaction, IUserCreation } from "../interfaces/userInterface";
import { getUserByUserName } from "../repositories/userRepo";
import { insertCard, fetchCard, updateCard  } from "../repositories/cardRepo";
import { updateUser } from "../repositories/userRepo";
import Transaction from "../models/Transaction";
import { insertTransaction } from "../repositories/transactionRepo";


const cardCreationService = async (card:ICard, userData:IUserCreation) => {
    try{
        const user = await getUserByUserName(userData.userName);
        if(!user){
            return generateErrorCode("CR", 3);
        }
        const newCard = await insertCard(card,userData);  
        if(!newCard){
            return generateErrorCode("CR", 1, "Card was not created");
        }
        const updateData = { $push: { Cards: newCard } };
        const updatedUser = await updateUser(user._id, updateData);
        if(!updatedUser){
            return generateErrorCode("CR", 2, "User was not updated");
        }
        return null;
    }catch(error){
        console.log("an error has accrued while trying to create  \n", error);
        return generateErrorCode(null, 1);
    }
}

const updateTransactionService = async ({Description, Amount, CardId}:ITransaction,  userData: IUserCreation) => {
    try{
        if(userData.Cards.includes(CardId) === false){
            return generateErrorCode("CR", 4);
        }
        const newTransaction = await insertTransaction({Description, Amount});
        if(!newTransaction){
            return generateErrorCode("CR", 5, "Transaction was not created");
        }
        const updatedCard = await updateCard(newTransaction, CardId, userData);
            if(!updatedCard){
                return generateErrorCode("CR", 1, "Card was not created");
            }
        return updatedCard;
    }catch(Exception){
        console.log("an error has accrued while trying to create transaction  \n", Exception);
        return generateErrorCode(null, 1);
    }
}


export { cardCreationService, updateTransactionService };