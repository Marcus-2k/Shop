const Product = require("../models/Product");

module.exports.getByIdCard = async function (req, res) {
  console.log("Server getByIdCard");
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
    console.log(req.params.id);
    const product = await Product.findById(
      { _id: req.params.id },
      {
        name: 0,
        imageSrc: 0,
        price: 0,
        action: 0,
        actionPrice: 0,
        counter: 0,
        // category: 0,
        // options: 0,
        optionsToString: 0,
        queryParams: 0,
        keyWords: 0,
        description: 0,
        status: 0,
        seller: 0,
        comments: 0,
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
        keyWords: 0,
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
        keyWords: 0,
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
    const productPhoto = await Product.findOne(
      {},
      {
        // imageSrc: 0,
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
        questions: 0,
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
  } catch (error) {
    console.log(error);
  }
};
