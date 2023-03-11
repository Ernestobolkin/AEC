import Card from "../../models/Card";
import { Request, Response } from "express";

const createCard = async (req: Request, res: Response) => {
    try{
        const { cardIdentifierNumber, cardName } = req.body;
        const card = new Card({
            cardIdentifierNumber: cardIdentifierNumber,
            cardName: cardName
        });
        await card.save();
        
        res.send("Card wat created").status(200);
    }catch(Exception){
        res.send(Exception).status(400);
    }
}

export { createCard };
