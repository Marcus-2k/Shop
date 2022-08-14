const Seller = require("../models/Seller");

module.exports.getSeller = async function (req, res) {
  console.log("Server getSeller");
  try {
    const sellers = await Seller.find();
    res.status(200).json(sellers);
    // res.status(200).json({ message: "GET SELLER" });
  } catch (error) {
    console.log(error);
  }
};
