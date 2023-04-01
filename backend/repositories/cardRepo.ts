import { ICard, IUserCreation } from "../interfaces/userInterface";
import Card from "../models/Card";

const createCard = async (card: ICard, userData: IUserCreation) => {
    try {
        const newCard = new Card({
            CardIdentifierNumber: card.CardIdentifierNumber,
            CardName: card.CardName,
            NameHolder: userData.userName,
        });
        await newCard.save();
        return newCard;
    }
    catch (error) {
        console.log("an error has accrued while trying to create  \n", error);
        return null
    }
};

export { createCard };