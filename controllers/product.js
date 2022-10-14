const Product = require("../models/Product");
const fs = require("fs");

module.exports.getAllProduct = async function (req, res) {
  console.log("Server getAllUser");

  try {
    const product = await Product.find({ user: req.user.id });

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getByIdProduct = async function (req, res) {
  console.log("Server getByIdProduct");

  try {
    const product = await Product.findById(req.params.id, {
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
    });

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.createProduct = async function (req, res) {
  console.log("Server createProduct");

  try {
    const files = Object.values(req.files);
    const imageSrc = []; // ["folder/name.extension", ...]
    files.forEach((image) => {
      imageSrc.push(image[0].path);
    });

    const keywords = req.body.keywords.split(" "); // ["phone", "samsung", "apple"]

    const category = req.body.category.split(" "); // '0 1 0' >>> [ '0', '1', '1' ]
    category.forEach((element, idx) => {
      category[idx] = Number(element);
    }); // [ '0', '1', '1' ] >>> [ 0, 1, 1 ]

    const characteristics = req.body.characteristics.split(" "); // '0 1 0' >>> [ '0', '1', '1' ]
    characteristics.forEach((element, idx) => {
      characteristics[idx] = Number(element);
    }); // [ '0', '1', '1' ] >>> [ 0, 1, 1 ]

    const status = Number(req.body.status); // 0 = В наявнності, 1 = Очікується постачання , 2 = Немає в наявності, 3 = Закінчується

    const action = Boolean(Number(req.body.action)); // true || false
    const actionPrice = action === true ? Number(req.body.actionPrice) : -1; // if(action === true) {actionPrice = number} else {actionPrice = -1}

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
      keywords,
      description: req.body.description,
      comments: [],
      questions: [],
      accessories: [],
      user: req.user.id,
    });

    await product.save();

    return res.status(201).json({ message: "Товар створено успішно." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.updateProduct = async function (req, res) {
  console.log("Server updateProduct");

  try {
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
      const category = req.body.category.split(" ");
      category.forEach((item, idx) => {
        category[idx] = Number(item);
      });
      updateProduct.category = category;

      const characteristics = req.body.characteristics.split(" ");
      characteristics.forEach((item, idx) => {
        characteristics[idx] = Number(item);
      });
      updateProduct.characteristics = characteristics;
    } else if (req.body.characteristics) {
      const characteristics = req.body.characteristics.split(" ");
      characteristics.forEach((item, idx) => {
        characteristics[idx] = Number(item);
      });
      updateProduct.characteristics = characteristics;
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

    await Product.findOneAndUpdate(
      req.params.id,
      { $set: updateProduct },
      { new: true }
    );

    return res.status(200).json({ message: "Товар успішно змінено" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.deleteProduct = async function (req, res) {
  console.log("Server deleteProduct");

  try {
    const product = await Product.findById(req.params.id, { imageSrc: 1 });

    product.imageSrc.forEach((item) => {
      deleteImgFromFolder(item);
    }); // Delete file from folder uploads

    await Product.remove({ _id: req.params.id }); // Delete card in DB

    return res.status(200).json({ message: "Товар успішно видалено" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
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
