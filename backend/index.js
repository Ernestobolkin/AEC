const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const { verifyJwt, jwtCreate } = require("./service/jwtService");
const { Payment } = require("./models/Payment");

// should be in env or config file
const mongoURI = 'mongodb+srv://elzo:XhxnvNubdu@ertodatabase.ilvau.mongodb.net/?retryWrites=true&w=majority'; 

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req, res) => {
    res.send("Hello World!").status(200);
})

app.post("/login", (req, res) => {
  try {
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
})

app.put("/update", (req, res) => {
  try{
    if(req.body?.payment && req.body?.payment !== null){
      const { Name, Description, Date, Amount } = req.body;
      const payment = new Payment({
        Name,
        Description,
        Date,
        Amount
      });
      payment.save().then(() => {
        res.send("Payment updated").status(200);
      }).catch((error) => {
        console.log(error);
    })
  }
  }catch(Exception){
    res.send(Exception).status(400);
  }
})

mongoose.set('strictQuery', true);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(port, () => {
      console.log("Server is up on port " + port);
    });
  }).catch((error) => {
    console.log(error);
});
