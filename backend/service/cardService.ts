import { generateErrorCode } from "./errorCodeService";
import { ICard, IUserCreation } from "../interfaces/userInterface";
import { getUserByUserName } from "../repositories/userRepo";
import { createCard } from "../repositories/cardRepo";
import { updateUser } from "../repositories/userRepo";


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

export { cardCreationService };