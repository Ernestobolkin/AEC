import User  from "../models/user";
import { jwtCreate } from "../service/jwtService";
import bcrypt from "bcrypt";
import { IUserCreation } from "../interfaces/userInterface";


const createUser = async (user: IUserCreation): Promise<typeof User> => {
  try{
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);
      const newUser = new User({
          UserName: user.userName,
          Password: hashedPassword,
          Email: user.email,
      });
      const savedUser = await newUser.save();
      const token = jwtCreate(savedUser);
      const userToReturn = {
          UserName: savedUser.UserName,
          Email: savedUser.Email,
          token: token
      }
    return userToReturn;
  }catch(Exception){
      console.log(Exception)
      return 
  }
};

const loginUser = async (userData: IUserCreation): Promise<typeof User> => {
  try{
      const user = await User.findOne({UserName: userData.userName});
      if(!user){
          return null;
      }
      const validPassword = await bcrypt.compare(userData.password, user.Password);
      if(!validPassword){
          return null;
      }
      const token = jwtCreate(user);
    return {
      UserName: user.UserName,
      Email: user.Email,
      token,
    };
  }catch(Exception){
      console.log(Exception)
      return null
  }
};


const getUserById = async (userId: string): Promise<typeof User | null> => {
  try{
      // Implementation of the get user functionality
    const user = User.findOne({_id: userId});
    return user;
  }catch(Exception){
      console.log(Exception)
      return 
  }
};

const getUserByUserName = async (userName : string): Promise<typeof User | null> => {
  try{
      // Implementation of the get user functionality
    const user = await User.findOne({UserName: userName});
    return user;
  }catch(Exception){
      console.log(Exception)
      return 
  }
};

const getUserByEmail = async (email : string): Promise<typeof User | null> => {
  try{
    const user = await User.findOne({Email: email});
    return user;
  }
  catch(Exception){
    console.log(Exception)
    return
  }
};

const updateUser = async (userId: string, updateData: Partial<typeof User>): Promise<typeof User | null> => {
  // Implementation of the update user functionality
  return null;
};

export { createUser, getUserById, updateUser, getUserByUserName, loginUser, getUserByEmail };