const Product = require("../models/Product");

module.exports.searchSite = async function (req, res) {
  console.log("Server searchSite");
  try {
    console.log(req.query);

    const search_text = req.query.search_text; // Requst Text search
    // let category; // Reques Category

    // let categoryFilter = [];

    // if (req.query.category) {
    //   category = req.query.category.split(",");

    //   category.forEach((element, idx) => {
    //     let numberArray = ("" + Number(element)).split("").map(Number);
    //     categoryFilter.push(numberArray);
    //   }); // Перетворюємо массив строкових чисел в, масив масивів з числами
    // }

    let productCategory = [];
    let productCharacteristics = [];

    if (req.query.search_text) {
      const product = await Product.find({
        name: { $regex: search_text, $options: "i" },
      }); // $regex >> partial keyWords, options "i" >> case insensitivity

      product.forEach((element) => {
        productCharacteristics.push(element.characteristics);
        productCategory.push(element.category);
      }); // Характеристики в знайдених товарів по ключовому слові

      if (req.query.category) {
        // delete product;
        // const product = await Product.find({
        //   name: { $regex: search_text, $options: "i" },
        //   category: { $in: categoryFilter },
        // });
        res
          .status(200)
          .json({ product, productCharacteristics, productCategory });
      } else {
        res
          .status(200)
          .json({ product, productCharacteristics, productCategory });
      }
    } else {
      res.status(404).json({ message: "Помилка запуту" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Сталася помилка. Спробуйте пізніше." });
  }
};

module.exports.filterSearchSite = async function (req, res) {
  console.log("Server filterSearchSite");
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Сталася помилка. Спробуйте пізніше." });
  }
};
