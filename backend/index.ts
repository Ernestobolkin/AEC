import express from "express";
const app = express();
const port = process.env.PORT || 8080;
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import { login } from "./routers/login";
import { updatePayment, getPayments } from "./routers/dataTable/payments";

// should be in env or config file
const mongoURI = ''; 

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req, res) => {
    res.send("Hello World!").status(200);
})

app.post("/login", login);

app.put("/update/:id", updatePayment);

app.get("/payments", updatePayment);


mongoose.set('strictQuery', true);
mongoose.connect(mongoURI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(port, () => {
      console.log("Server is up on port " + port);
    });
  }).catch((error) => {
    console.log(error);
});
