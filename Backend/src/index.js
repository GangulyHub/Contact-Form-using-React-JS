const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const mongoose = require("mongoose");
const port = 8000 || process.env.PORT;
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/v1", router);

app.get("/", (req, res, next) => {
  res.send("Welcome to Contact Us Backend");
});

mongoose
  .connect(
    "mongodb+srv://ganguly1234:ganguly1234@cluster0.ymbtt.mongodb.net/gangulys?retryWrites=true&w=majority" ,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
    )
  .then((result) => {
    app.listen(port, () => {
      console.log("Server running at  " + port);
    });
  })
  .catch((err) => console.log(err));
