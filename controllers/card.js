const Product = require("../models/Product");
const Catalog = require("../db/catalog");
const catalog_option = require("../db/catalog_characteristics");

module.exports.getByIdCard = async function (req, res) {
  console.log("Server getByIdCard");

  try {
    let product = await Product.findById(req.params.id, {
      imageSrc: 1,
      name: 1,
      price: 1,
      action: 1,
      actionPrice: 1,
      counter: 1,
      category: 1,
      status: 1,
      user: 1,
    });

    if (product) {
      product.imageSrc = product.imageSrc.splice(0, 1);

      let widget_breadcrumbs = {
        first: {
          name: Catalog.categoryList[product.category[0]].nameCategory,
          link: Catalog.categoryList[product.category[0]].navigate_link,
        },
        second: {
          name: Catalog.categoryList[product.category[0]].nameListCategory[
            product.category[1]
          ].subNameCategory,
          link: Catalog.categoryList[product.category[0]].nameListCategory[
            product.category[1]
          ].navigate_link,
        },
        third: undefined,
        location: { name: product.name },
      };

      if (
        Catalog.categoryList[product.category[0]].nameListCategory[
          product.category[1]
        ].type === 2
      ) {
        widget_breadcrumbs.third = {
          name: Catalog.categoryList[product.category[0]].nameListCategory[
            product.category[1]
          ].subNameListCategory[product.category[2]].titleSubNameListCategory,
          link: Catalog.categoryList[product.category[0]].nameListCategory[
            product.category[1]
          ].subNameListCategory[product.category[2]].navigate_link,
        };
      } else if (
        Catalog.categoryList[product.category[0]].nameListCategory[
          product.category[1]
        ].type === 1
      ) {
        widget_breadcrumbs.third = undefined;
      }

      const productCard = {
        product,
        widget_breadcrumbs: widget_breadcrumbs,
      };

      return res.status(200).json(productCard);
    } else {
      return res.status(404).json({ message: "Такий товар не існує" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getByIdCardInfo = async function (req, res) {
  console.log("Server getByIdCardInfo");

  try {
    const productInfo = await Product.findById(req.params.id, {
      imageSrc: 1,
      description: 1,
      _id: 0,
    });

    if (productInfo) {
      return res.status(200).json(productInfo);
    } else {
      return res.status(404).json({ message: "Такий товар не існує" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getByIdCardCharacteristics = async function (req, res) {
  console.log("Server getByIdCardCharacteristics");

  try {
    const product = await Product.findById(req.params.id, {
      category: 1,
      characteristics: 1,
      _id: 0,
    });

    if (product) {
      let characteristicsName;

      if (product.category.length === 3) {
        characteristicsName =
          catalog_option.categoryList_characteristics[product.category[0]]
            .nameListCategory[product.category[1]].subNameListCategory[
            product.category[2]
          ].characteristics;
      } else if (product.category.length === 2) {
        characteristicsName =
          catalog_option.categoryList_characteristics[product.category[0]]
            .nameListCategory[product.category[1]].characteristics;
      }

      const productCharacteristics = Object.assign(
        {},
        {
          characteristics: product.characteristics,
          characteristicsName: characteristicsName,
        }
      );

      res.status(200).json(productCharacteristics);
    } else {
      res.status(404).json({ message: "Такий товар не існує" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getByIdCardComments = async function (req, res) {
  console.log("Server getByIdCardComments");

  try {
    const productComments = await Product.findById(req.params.id, {
      comments: 1,
      _id: 0,
    });

    if (productComments) {
      return res.status(200).json(productComments);
    } else {
      return res.status(404).json({ message: "Такий товар не існує" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getByIdCardQuestions = async function (req, res) {
  console.log("Server getByIdCardQuestions");

  try {
    const productQuestions = await Product.findById(req.params.id, {
      questions: 1,
      _id: 0,
    });

    if (productQuestions) {
      return res.status(200).json(productQuestions);
    } else {
      return res.status(404).json({ message: "Такий товар не існує" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getByIdCardPhoto = async function (req, res) {
  console.log("Server getByIdCardPhoto");

  try {
    const productPhoto = await Product.findById(req.params.id, {
      imageSrc: 1,
      _id: 0,
    });

    if (productPhoto) {
      return res.status(200).json(productPhoto);
    } else {
      return res.status(404).json({ message: "Такий товар не існує" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getByIdCardAccessories = async function (req, res) {
  console.log("Server getByIdCardAccessories");

  try {
    const productAccessories = await Product.findById(req.params.id, {
      accessories: 1,
      _id: 0,
    });

    if (productAccessories) {
      return res.status(200).json(productAccessories);
    } else {
      return res.status(404).json({ message: "Такий товар не існує" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
