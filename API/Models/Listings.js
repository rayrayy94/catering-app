const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    cuisineType: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = new mongoose.model("listings", listingSchema);
module.exports = Listing;
