import { Request, Response } from "express";
import { cardCreationService } from "../../service/cardService";
import { ICard } from "../../interfaces/userInterface";

const createCard = async (req: Request, res: Response) => {
    try{
        const { cardIdentifierNumber, cardName } = req.body;
        if(!cardIdentifierNumber || !cardName){
            return res.send("Missing some parameters").status(400);
        }
        // add validation to the card data
        const card:ICard = {
            CardIdentifierNumber: cardIdentifierNumber,
            CardName: cardName,
        }
        const response = await cardCreationService(card,req.body);
        if(response){
            return res.send(response).status(400);
        }
        return res.send("Card created successfully").status(200);
    }catch(Exception){
        return res.send(Exception).status(400);
    }
}

export { createCard };
