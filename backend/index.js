const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const path = require("path");
const { verifyJwt, jwtCreate } = require("./service/jwtService");

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public")))

// app.use(verifyJwt)

// app.get("/", (req, res) => {
//     res.send("Hello World!").status(200);
// })

app.get("/test",verifyJwt, (req, res) => {
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

app.listen(port, () => {
    console.log("Server is up on port " + port);
});

