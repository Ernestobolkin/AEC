import { ErrorCode } from "../interfaces/userInterface";

// Error code interface
// LG = Login error
// RG = Registration error
// GE = General error


// Error code numbers for General error || GE
// 1 = General error
// 2 = MongoDB error
// 3 = Server error

// Error code numbers for Registration error || RG
// 1 = Invalid email address
// 2 = Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number
// 3 = Username must be between 3 and 20 characters
// 4 = Email already exists
// 5 = Username already exists
// 6 = Failed to create user account, jwt error.
// 7 = Failed to create user account, mongoDB error.
// 8 = bycrypt error while hashing password

// Error code numbers for Login error || LG
// 1 = Invalid login credentials
// 2 = Failed to login, jwt error.



  
const generateErrorCode = (type: string, number: number, customMessage?: string): ErrorCode => {
    let code = "";
    let message = "";
  
    switch (type) {
      case "LOGIN":
        code = "LG" + number;
        message = customMessage || `Invalid login credentials`;
        break;
      case "REGISTRATION":
        code = "RG" + number;
        message = customMessage || `Failed to create user account`;
        break;
      default:
        code = "GR" + number;
        message = customMessage || `General error`;
        break;
    }
    return { code, message };
  };

export { generateErrorCode };