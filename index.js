require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello boy ... this is iqbal");
});

app.get("/login", (req, res) => {
  res.send("welcome to login page...");
});

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
  console.log(`Server is listening .. at port ${process.env.PORT}`);
});
