const Product = require("../models/Product");
const catalog = require("../db/catalog");

module.exports.getByIdCard = async function (req, res) {
  console.log("Server getByIdCard");
  try {
    const product = await Product.findById(
      { _id: req.params.id },
      {
        imageSrc: 1,
        name: 1,
        price: 1,
        action: 1,
        actionPrice: 1,
        category: 1,
        status: 1,
        user: 1,
        _id: 1,
      }
    );

    if (product) {
      const productCard = {
        product,
        breadCrumbs: {
          levelOne: catalog.categoryList[product.category[0]].nameCategory,
          levelTwo:
            product.category.length === 3
              ? catalog.categoryList[product.category[0]].nameListCategory[
                  product.category[1]
                ].subNameCategory
              : undefined,
          location: product.name,
        },
      };

      res.status(200).json(productCard);
    } else {
      res.status(404).json({ messge: "Такий товар не існує" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardInfo = async function (req, res) {
  console.log("Server getByIdCardInfo");
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ messge: "Такий товар не існує" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardCharacteristics = async function (req, res) {
  console.log("Server getByIdCardCharacteristics");
  try {
    const product = await Product.findById(
      { _id: req.params.id },
      {
        category: 1,
        characteristics: 1,
      }
    );

    let characteristicsName;

    if (product.category.length === 3) {
      characteristicsName =
        catalog.categoryList[product.category[0]].nameListCategory[
          product.category[1]
        ].subNameListCategory[product.category[2]].characteristics;
    } else if (product.category.length === 2) {
      // characteristicsName = catalog.categoryList[product.category[0]].nameListCategory[product.category[1]].characteristics;
    }

    const productCharacteristics = Object.assign(
      {},
      {
        _id: product._id,
        characteristics: product.characteristics,
        characteristicsName: characteristicsName,
      }
    );

    if (product) {
      res.status(200).json(productCharacteristics);
    } else {
      res.status(404).json({ messge: "Такий товар не існує" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardComments = async function (req, res) {
  console.log("Server getByIdCardComments");
  try {
    const product = await Product.findById(
      { _id: req.params.id },
      {
        name: 0,
        imageSrc: 0,
        price: 0,
        action: 0,
        actionPrice: 0,
        counter: 0,
        category: 0,
        options: 0,
        optionsToString: 0,
        queryParams: 0,
        keywords: 0,
        description: 0,
        status: 0,
        seller: 0,
        // comments: 0,
        questions: 0,
        user: 0,
        __v: 0,
        _id: 0,
      }
    );

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ messge: "Такий товар не існує" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardQuestions = async function (req, res) {
  console.log("Server getByIdCardQuestions");
  try {
    const product = await Product.findById(
      { _id: req.params.id },
      {
        name: 0,
        imageSrc: 0,
        price: 0,
        action: 0,
        actionPrice: 0,
        counter: 0,
        category: 0,
        options: 0,
        optionsToString: 0,
        queryParams: 0,
        keywords: 0,
        description: 0,
        status: 0,
        seller: 0,
        comments: 0,
        // questions: 0,
        user: 0,
        __v: 0,
        _id: 0,
      }
    );

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ messge: "Такий товар не існує" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardPhoto = async function (req, res) {
  console.log("Server getByIdCardPhoto");
  try {
    const productPhoto = await Product.findById(
      { _id: req.params.id },
      {
        imageSrc: 1,
        _id: 0,
      }
    );
    res.status(200).json(productPhoto);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getByIdCardAccessories = async function (req, res) {
  console.log("Server getByIdCardAccessories");
  try {
  } catch (error) {
    console.log(error);
  }
};
