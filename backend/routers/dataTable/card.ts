import Card from "../../models/Card";
import { Request, Response } from "express";

const createCard = async (req: Request, res: Response) => {
    try{
        const { cardIdentifierNumber, cardName } = req.body;
        const card = new Card({
            CardIdentifierNumber: cardIdentifierNumber,
            CardName: cardName,
        });
        await card.save();
        
        return res.send("Card was created").status(200);
    }catch(Exception){
        return res.send(Exception).status(400);
    }
}

export { createCard };
