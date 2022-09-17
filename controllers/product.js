const Product = require("../models/Product");
const User = require("../models/User");
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
    const productId = await Product.findById(
      { _id: req.params.id },
      {
        imageSrc: 1,
        name: 1,
        price: 1,
        action: 1,
        actionPrice: 1,
        counter: 1,
        category: 1,
        characteristics: 1,
        status: 1,
        keywords: 1,
        description: 1,
      }
    );
    res.status(200).json(productId);
  } catch (error) {
    console.log(error);
  }
};

module.exports.create = async function (req, res) {
  console.log("Server create");
  try {
    // console.log(req.files);
    // console.log(req.body);

    // Images ==========================================================================
    const files = Object.values(req.files);
    const imageSrc = [];
    files.forEach((image) => {
      imageSrc.push(image[0].path);
    });

    // Keywords ========================================================================
    const keyWords = req.body.keyWords.split(" ");

    // Category ========================================================================
    const category = req.body.category.split(" "); // '0 1 0' >>> [ '0', '1', '1' ]
    category.forEach((element, idx) => {
      category[idx] = Number(element);
    }); // [ '0', '1', '1' ] >>> [ 0, 1, 1 ]

    // Characteristics =================================================================
    const characteristics = req.body.characteristics.split(" "); // '0 1 0' >>> [ '0', '1', '1' ]
    characteristics.forEach((element, idx) => {
      characteristics[idx] = Number(element);
    }); // [ '0', '1', '1' ] >>> [ 0, 1, 1 ]

    // Status ==========================================================================
    const status = Number(req.body.status);

    // ActionPrice =====================================================================
    const action = Boolean(Number(req.body.action));
    const actionPrice = action === true ? Number(req.body.actionPrice) : -1;

    // Create ==========================================================================
    const product = new Product({
      imageSrc,
      name: req.body.name,
      price: req.body.price,
      action,
      actionPrice,
      counter: Number(req.body.counter),
      category,
      characteristics,
      status,
      keyWords,
      description: req.body.description,
      comments: [],
      questions: [],
      user: req.user.id,
    });
    // console.log(product);

    // Save DB =========================================================================
    await product.save();

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
  // console.log(req.body);
  // console.log(req.files);

  const updateProduct = {};

  if (Object.keys(req.files).length >= 1) {
    const files = Object.values(req.files);
    const imageSrc = [];
    files.forEach((image) => {
      imageSrc.push(image[0].path);
    });

    updateProduct.imageSrc = imageSrc;

    const product = await Product.findById({ _id: req.params.id });

    product.imageSrc.forEach((item) => {
      deleteImgFromFolder(item);
    }); // Delete file from folder uploads
  }

  if (req.body.name) {
    updateProduct.name = req.body.name;
  }

  if (req.body.price) {
    updateProduct.price = Number(req.body.price);
  }

  if (req.body.action === "1") {
    updateProduct.action = true;
    updateProduct.actionPrice = Number(req.body.actionPrice);
  } else if (req.body.action === "0") {
    updateProduct.action = false;
    updateProduct.actionPrice = -1;
  } else if (req.body.actionPrice) {
    updateProduct.actionPrice = Number(req.body.actionPrice);
  }

  if (req.body.counter) {
    updateProduct.counter = Number(req.body.counter);
  }

  if (req.body.category) {
    // ============================================================
    const category = req.body.category.split(" ");
    category.forEach((item, idx) => {
      category[idx] = Number(item);
    });
    updateProduct.category = category;
    // ============================================================
    const characteristics = req.body.characteristics.split(" ");
    characteristics.forEach((item, idx) => {
      characteristics[idx] = Number(item);
    });
    updateProduct.characteristics = characteristics;
    // ============================================================
  } else if (req.body.characteristics) {
    // ============================================================
    const characteristics = req.body.characteristics.split(" ");
    characteristics.forEach((item, idx) => {
      characteristics[idx] = Number(item);
    });
    updateProduct.characteristics = characteristics;
    // ============================================================
  }

  if (req.body.status) {
    updateProduct.status = Number(req.body.status);
  }

  if (req.body.keywords) {
    updateProduct.keywords = req.body.keywords.split(" ");
  }
  if (req.body.description) {
    updateProduct.description = req.body.description;
  }

  console.log(updateProduct);

  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updateProduct },
      { new: true }
    );
    res.status(200).json({ message: "Товар успішно змінено." });
  } catch (error) {
    res.status(400).json("Виникла помилка, спробуйте ще раз пізніше.");
    console.log(error);
  }
};

module.exports.delete = async function (req, res) {
  console.log("Server delete");
  try {
    console.log(req.params.id);
    const product = await Product.findById(
      { _id: req.params.id },
      { imageSrc: 1 }
    );

    product.imageSrc.forEach((item) => {
      console.log(item);
      deleteImgFromFolder(item);
    }); // Delete file from folder uploads

    await Product.remove({ _id: req.params.id }); // Delete card in DB

    res.status(200).json({
      message: "Товар видалено",
    });
  } catch (error) {
    console.log(error);
  }
};

function deleteImgFromFolder(linkImg) {
  fs.unlink(linkImg, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Deleted file: ${linkImg}`);
    }
  }); // Delete img, in folder uploads
}
