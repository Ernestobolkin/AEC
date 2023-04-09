import { ICard, IUserCreation, ITransaction } from "../interfaces/userInterface";
import Card from "../models/Card";


const insertCard = async (card: ICard, userData: IUserCreation) => {
    try {
        const newCard = new Card({
            CardIdentifierNumber: card.CardIdentifierNumber,
            CardName: card.CardName,
            NameHolder: userData.userName,
        });
        await newCard.save();
        return newCard;
    }
    catch (Exception) {
        console.log("an error has accrued while trying to create  \n", Exception);
        return null
    }
};

const fetchCards = async (userName: string, cardId:string) => {
    try {
        const cards = Card.find({NameHolder: userName, _id: cardId});
        return cards;
    }catch(Exception){
        console.log("an error has accrued while trying to fetch card  \n", Exception);
        return null
    }
}

const updateCard = async (newTransaction: ITransaction , CardId: string , userData: IUserCreation) => {
    try {
        const updatedCard = await Card.findByIdAndUpdate(
            CardId,
            { $push: { Transactions: newTransaction } },
            { new: true }
          );
        await updatedCard.save();
        return updatedCard;
    }catch(Exception){
        console.log("an error has accrued while trying to create transaction  \n", Exception);
        return null
    }
}


        


export { insertCard, fetchCards, updateCard  };