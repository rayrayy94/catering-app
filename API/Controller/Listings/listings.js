const Listing = require("../../Models/Listings");

// GET ALL LISTINGS
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

// ADD NEW LISTING
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

// GET SPECIFIC LISTING BY ID
const getListingById = async (req, res) => {
  try {
    const id = req.params.id;
    const findListing = await Listing.findById({ _id: id });
    res.status(200).send(findListing);
  } catch (error) {
    res.status(404).send({
      message: "Something went wrong",
      error: error,
    });
  }
};

// UPDATE LISTING BY ID
const updateListing = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateListing = await Listing.findByIdAndUpdate(
      _id,
      ($set = {
        companyName: req.body.companyName,
        description: req.body.description,
        images: req.body.images,
        cuisineType: req.body.cuisineType,
      }),
      { new: true }
    );
    res.status(200).send(updateListing);
  } catch (error) {
    res.status(404).send({
      message: "Cannot update listing",
      error: error,
    });
  }
};

// DELETE LISTING BY ID
const deleteListing = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteListing = await Listing.findOneAndDelete({ _id: _id });
    res.status(200).send({
      message: "Listing deleted successfully",
      "Deleted Listing": deleteListing,
    });
  } catch (error) {
    res.status(404).send({
      message: "Cannot delete listing",
      error: error,
    });
  }
};

module.exports = {
  getAllListings,
  addListing,
  getListingById,
  updateListing,
  deleteListing,
};
