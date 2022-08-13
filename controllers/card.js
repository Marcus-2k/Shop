const Product = require("../models/Product");
const fs = require("fs");

module.exports.getByIdCard = async function (req, res) {
  console.log("Server getByIdCard");
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
