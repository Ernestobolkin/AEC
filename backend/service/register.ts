import { generateErrorCode } from "./errorCodeService";
import { createUser } from "../repositories/userRepo";
import { getUserByUserName } from "../repositories/userRepo";
import { IUserCreation } from "../interfaces/userInterface";

const registerService = async (user: IUserCreation) => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const existingUser = await getUserByUserName(user.userName);
    if(existingUser){
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
    const userData = await createUser(user);
    return userData;
    // Return success message or user data
  } catch (error) {
    return generateErrorCode(null, 1);
  }
};

export { registerService };