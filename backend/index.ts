import express from "express";
const app = express();
const port = process.env.PORT || 8080;
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import { login } from "./routers/login";
import { updateTransaction, getTransactions } from "./routers/dataTable/transaction";
import { createCard } from "./routers/dataTable/card";
import { register } from "./routers/register";
import Config from "./config";
import { verifyJwt } from "./service/jwtService";

const mongoURL = Config.mongoConnectionString || ""; 

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req, res) => {
    res.send("Hello World!").status(200);
})

app.post("/login", login);

app.post("/register", register);

app.put("/update/:id",verifyJwt, updateTransaction);

app.get("/transactions",verifyJwt, getTransactions);

app.post("/card",verifyJwt, createCard);


mongoose.set('strictQuery', true);
mongoose.connect(mongoURL)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(port, () => {
      console.log("Server is up on port " + port);
    });
  }).catch((error) => {
    console.log(error);
});
