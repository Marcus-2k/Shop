const Product = require("../models/Product");

module.exports.getByIdCard = async function (req, res) {
  console.log("Server getByIdCard");
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardInfo = async function (req, res) {
  console.log("Server getByIdCardInfo");
  try {
    console.log(req.params);
    console.log(req.query);
    // const product = await Product.findById(req.params.id);
    res.status(200).json({ message: "sdaasdsasd" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardCharacteristics = async function (req, res) {
  console.log("Server getByIdCardCharacteristics");
  try {
    // const product = await Product.findById(req.params.id);
    // res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardComments = async function (req, res) {
  console.log("Server getByIdCardCommentsrd");
  try {
    // const product = await Product.findById(req.params.id);
    // res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardQuestions = async function (req, res) {
  console.log("Server getByIdCardQuestionsd");
  try {
    // const product = await Product.findById(req.params.id);
    // res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardPhoto = async function (req, res) {
  console.log("Server getByIdCardPhotodCard");
  try {
    // const product = await Product.findById(req.params.id);
    // res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardAccessories = async function (req, res) {
  console.log("Server getByIdCardAccessories");
  try {
    // const product = await Product.findById(req.params.id);
    // res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
