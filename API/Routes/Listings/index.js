const express = require("express");
const {
  getAllListings,
  addListing,
  getListingById,
  updateListing,
  deleteListing,
} = require("../../Controller/Listings/listings");

const app = express.Router();

app.get("/", getAllListings);
app.get("/:id", getListingById);
app.post("/", addListing);
app.patch("/:id", updateListing);
app.delete("/:id", deleteListing);

module.exports = app;
