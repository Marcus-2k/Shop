const Product = require("../models/Product");
const Seller = require("../models/Seller");
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
    const productId = await Product.findById(req.params.id);
    res.status(200).json(productId);
  } catch (error) {
    console.log(error);
  }
};

module.exports.create = async function (req, res) {
  console.log("Server create");
  try {
    // console.log(req.files);

    // Images ====================================================================
    const files = Object.values(req.files);
    const imageSrc = [];
    files.forEach((image) => {
      imageSrc.push(image[0].path);
    });

    // KeyWords ====================================================================
    const keyWords = req.body.keyWords.split(" ");

    // Category ====================================================================
    const category = req.body.category.split(" "); // '0 1 0' >>> [ '0', '1', '1' ]
    category.forEach((element, idx) => {
      category[idx] = Number(element);
    }); // [ '0', '1', '1' ] >>> [ 0, 1, 1 ]

    // Options ====================================================================
    const options = req.body.options.split(" "); // '0 1 0' >>> [ '0', '1', '1' ]
    options.forEach((element, idx) => {
      options[idx] = Number(element);
    }); // [ '0', '1', '1' ] >>> [ 0, 1, 1 ]

    // OptionsToString ====================================================================
    const optionsToString = req.body.optionsToString.split(",");
    optionsToString.forEach((element, idx) => {
      // optionsToString[idx] = [element];
      optionsToString[idx] = element;
    });

    // QueryParams ====================================================================
    const params = req.body.queryParams.split(",");
    const queryParams = {};
    params.forEach((element, idx) => {
      if (idx % 2 === 0) {
        idx++;
        queryParams[element] = params[idx];
      }
    });

    // Status ====================================================================
    const status = Number(req.body.status);

    // ActionPrice ====================================================================
    const action = Boolean(Number(req.body.action));
    const actionPrice = action === true ? Number(req.body.actionPrice) : -1;

    console.log("=============================================");
    const product = new Product({
      imageSrc,
      name: req.body.name,
      price: req.body.price,
      action,
      actionPrice,
      counter: Number(req.body.counter),
      category,
      options,
      optionsToString,
      queryParams,
      status,
      seller: req.body.seller,
      keyWords,
      description: req.body.description,
      user: req.user.id,
    });

    console.log(product);
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
  console.log(req.body);

  const updateProduct = {};

  if (req.file) {
    updateProduct.imageSrc = req.file.path;

    const product = await Product.findById(req.params.id);

    deleteImgFromFolder(product.imageSrc);
  }

  if (req.body.name) {
    updateProduct.name = req.body.name;
  }

  if (req.body.price) {
    updateProduct.price = Number(req.body.price);
  }

  if (req.body.category) {
    // ============================================================
    const category = req.body.category.split(" ");
    category.forEach((item, idx) => {
      category[idx] = Number(item);
    });
    updateProduct.category = category;
    // ============================================================
    const options = req.body.options.split(" ");
    options.forEach((item, idx) => {
      options[idx] = Number(item);
    });
    updateProduct.options = options;
    // ============================================================
    updateProduct.optionsToString = req.body.optionsToString.split(",");
    // ============================================================
    const queryParams = {};
    const params = req.body.queryParams.split(",");
    params.forEach((element, idx) => {
      if (idx % 2 === 0) {
        idx++;
        queryParams[element] = params[idx];
      }
    });
    updateProduct.queryParams = queryParams;
    // ============================================================
  } else if (req.body.options) {
    // ============================================================
    const options = req.body.options.split(" ");
    options.forEach((item, idx) => {
      options[idx] = Number(item);
    });
    updateProduct.options = options;
    // ============================================================
    updateProduct.optionsToString = req.body.optionsToString.split(",");
    // ============================================================
    const queryParams = {};
    const params = req.body.queryParams.split(",");
    params.forEach((element, idx) => {
      if (idx % 2 === 0) {
        idx++;
        queryParams[element] = params[idx];
      }
    });
    updateProduct.queryParams = queryParams;
    // ============================================================
  }

  if (req.body.keyWords) {
    updateProduct.keyWords = req.body.keyWords.split(" ");
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
