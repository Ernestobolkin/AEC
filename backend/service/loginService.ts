import { generateErrorCode } from "./errorCodeService";
import { loginUser } from "../repositories/userRepo";
import { getUserByUserName } from "../repositories/userRepo";
import { IUserCreation } from "../interfaces/userInterface";

const loginService = async (user: IUserCreation) => {
    try{
        const existingUser = await getUserByUserName(user.userName);
        if(!existingUser){
            return generateErrorCode("LOGIN", 1);
        }
        const userData = await loginUser(user);
        if(userData === null){
            return generateErrorCode("LOGIN", 1);
        }
        return userData;
    }catch(Exception){
        return generateErrorCode(null, 1);
    }
}

export { loginService };