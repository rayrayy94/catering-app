const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to my API",
  });
});

app.use("/listing", require("./Listings"));

module.exports = app;
