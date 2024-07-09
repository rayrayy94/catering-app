const express = require("express");
const {
  getAllListings,
  addListing,
} = require("../../Controller/Listings/listings");

const app = express.Router();

app.get("/", getAllListings);
app.post("/", addListing);

module.exports = app;
