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
    return [user, token];
  }catch(Exception){
      console.log(Exception)
      return 
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
    const user = User.findOne({UserName: userName});
    return user;
  }catch(Exception){
      console.log(Exception)
      return 
  }
};

const updateUser = async (userId: string, updateData: Partial<typeof User>): Promise<typeof User | null> => {
  // Implementation of the update user functionality
  return null;
};

const deleteUser = async (userId: string): Promise<boolean> => {
  // Implementation of the delete user functionality
  return true;
};

export { createUser, getUserById, updateUser, deleteUser, getUserByUserName };