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
  console.log("Сервер create");
  try {
    const keyWords = req.body.keyWords.split(" ");
    let category = req.body.category.split(" ");
    category[0] = Number(category[0]);
    category[1] = Number(category[1]);
    if (category.length > 2) {
      category[2] = Number(category[2]);
    }
    const product = new Product({
      name: req.body.name,
      imageSrc: req.file.path,
      price: req.body.price,
      category,
      keyWords,
      description: req.body.description,
      action: req.body.action,
      user: req.user.id,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json("Виникла помилка, спробуйте ще раз пізніше.");
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

    fs.unlink(productImg.imageSrc, (err) => {
      if (err) console.log(err);
      else {
        console.log("\nDeleted file: file.txt");
      }
    }); // Delete img, in folder
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

    fs.unlink(productImg.imageSrc, (err) => {
      if (err) console.log(err);
      else {
        console.log("\nDeleted file: file.txt");
      }
    }); // Delete img, in folder

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
} // Delete img
