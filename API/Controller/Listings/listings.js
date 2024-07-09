const Listing = require("../../Models/Listings");

const getAllListings = async (req, res) => {
  try {
    const allListings = await Listing.find();
    res.status(200).send({
      listings: allListings,
      length: allListings.length,
    });
  } catch (error) {
    res.status(404).send({
      message: "Something went wrong",
      error: error,
    });
  }
};

const addListing = (req, res) => {
  try {
    const addListing = new Listing(req.body);
    addListing
      .save()
      .then(() => {
        res.status(200).send(addListing);
      })
      .catch((error) => {
        res.status(404).send({
          message: "Data was not saved",
          error: error,
        });
      });
  } catch (error) {
    res.status(404).send({
      message: "Something went wrong",
      error: error,
    });
  }
};

module.exports = {
  getAllListings,
  addListing,
};
