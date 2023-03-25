import { generateErrorCode } from "./errorCodeService";
import { createUser } from "../repositories/userRepo";
import { getUserByUserName ,getUserByEmail } from "../repositories/userRepo";
import { IUserCreation } from "../interfaces/userInterface";

const registerService = async (user: IUserCreation) => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const existingUser = await getUserByUserName(user.userName);
    const existingEmail = await getUserByEmail(user.email);
    if(existingUser || existingEmail){
        return generateErrorCode(null, 1);
    }
    
    if (!emailRegex.test(user.email)) {
      return generateErrorCode("REGISTRATION", 1, "Invalid email address");
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(user.password)) {
      return generateErrorCode(
        "REGISTRATION",
        2,
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number"
      );
    }

    if (user.userName.length < 3 || user.userName.length > 20) {
      return generateErrorCode("REGISTRATION", 1);
    }
    // need to handle the data that returns from the repo. handle with error codes if needed
    const userData = await createUser(user);
    if(!userData){
      return generateErrorCode(null, 1);
    }
    if(userData?.message){
      console.log("an error has accrued in registration \n",userData.message);
      return generateErrorCode(null, 6,"something went wrong while creating the user");
    }
    return userData;
  } catch (error) {
    console.log("an error has accrued in registration \n",error);
    return generateErrorCode(null, 1);
  }
};

export { registerService };