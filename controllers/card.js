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
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
    // res.status(200).json({ message: "s" });
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
  console.log("Server getByIdCardQuestions");
  try {
    // const product = await Product.findById(req.params.id);
    // res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardPhoto = async function (req, res) {
  console.log("Server getByIdCardPhoto");
  try {
    const productPhoto = await Product.findOne(
      {},
      {
        name: 0,
        price: 0,
        action: 0,
        actionPrice: 0,
        counter: 0,
        category: 0,
        options: 0,
        optionsToString: 0,
        queryParams: 0,
        keyWords: 0,
        description: 0,
        status: 0,
        seller: 0,
        comments: 0,
        user: 0,
        __v: 0,
        _id: 0,
      },
      { _id: req.params.id }
    );
    res.status(200).json(productPhoto);
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
