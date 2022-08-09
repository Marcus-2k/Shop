const Product = require("../models/Product");
const fs = require("fs");

module.exports.getAllProduct = async function (req, res) {
  console.log("Server getAllUser");
  try {
    const product = await Product.find({ user: req.user.id });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getById = async function (req, res) {
  console.log("Server getById");
  try {
    const productId = await Product.findById(req.params.id);
    res.status(200).json(productId);
  } catch (error) {
    console.log(error);
  }
};

module.exports.create = async function (req, res) {
  console.log("Server create");
  try {
    const keyWords = req.body.keyWords.split(" ");

    const category = req.body.category.split(" "); // '0 1 0' >>> [ '0', '1', '1' ]
    category.forEach((element, idx) => {
      category[idx] = Number(element);
    }); // [ '0', '1', '1' ] >>> [ 0, 1, 1 ]

    const options = req.body.options.split(" "); // '0 1 0' >>> [ '0', '1', '1' ]
    options.forEach((element, idx) => {
      options[idx] = Number(element);
    }); // [ '0', '1', '1' ] >>> [ 0, 1, 1 ]

    // ====================================================================
    const optionsToString = req.body.optionsToString.split(",");
    optionsToString.forEach((element, idx) => {
      // optionsToString[idx] = [element];
      optionsToString[idx] = element;
    });
    console.log(optionsToString);
    // =========================
    const params = req.body.queryParams.split(",");
    const queryParams = {};
    params.forEach((element, idx) => {
      if (idx % 2 === 0) {
        idx++;
        queryParams[element] = params[idx];
      }
    });
    console.log(queryParams);
    // ====================================================================

    const product = new Product({
      name: req.body.name,
      imageSrc: req.file.path,
      price: req.body.price,
      category,
      options,
      optionsToString,
      queryParams,
      keyWords,
      description: req.body.description,
      action: Boolean(Number(req.body.action)),
      user: req.user.id,
    });

    // console.log(product);
    // await product.save();
    res.status(201).json({ message: "Товар створено успішно." });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Виникла помилка, спробуйте ще раз пізніше." });
    console.log(error);
  }
};

module.exports.update = async function (req, res) {
  console.log("Server update");

  const category = req.body.category.split(" ");
  const keyWords = req.body.keyWords.split(" ");

  const updated = {
    name: req.body.name,
    price: req.body.price,
    category,
    keyWords,
    description: req.body.description,
  };
  if (req.file) {
    updated.imageSrc = req.file.path;

    const productImg = await Product.findById(req.params.id);

    deleteImg(productImg.imageSrc); // Delete file from folder uploads
  }
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updated },
      { new: true }
    );
    res.status(200).json({ message: "Товар успішно змінено" });
  } catch (error) {
    res.status(400).json("Виникла помилка, спробуйте ще раз пізніше.");
    console.log(error);
  }
};

module.exports.delete = async function (req, res) {
  console.log("Server delete");
  try {
    const productImg = await Product.findById(req.params.id);

    deleteImg(productImg.imageSrc); // Delete file from folder uploads

    await Product.remove({ _id: req.params.id }); // Delete cart in DB

    res.status(200).json({
      message: "Товар видалено",
    });
  } catch (error) {
    console.log(error);
  }
};

function deleteImg(linkImg) {
  fs.unlink(linkImg, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Deleted file ${linkImg}`);
    }
  });
} // Delete file from folder uploads
