import { jwtCreate } from "../service/jwtService";

const login = (req, res) => {
     try {
      // TODO add validation inside a service folder. make the validation better than this 
    if(req.body.userName === "admin" && req.body.password === "admin") {
            const token = jwtCreate(req, res);
            res.status(200).json({
                token,
                code: 'OK'
            });
        } else {
            res.status(400).json({message:"Invalid Credentials"})
        }
  } catch (error) {
    res.send(error).status(400);
  }
}

export { login };