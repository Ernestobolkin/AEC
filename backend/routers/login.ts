import { jwtCreate } from "../service/jwtService";

const login = (req, res) => {
     try {
      
      res.status(400).json({message:"Invalid Credentials"})
  } catch (error) {
    res.send(error).status(400);
  }
}

export { login };