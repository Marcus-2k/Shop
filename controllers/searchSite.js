//
const Product = require("../models/Product");

module.exports.searchSite = async function (req, res) {
  console.log("Сервер searchSite");
  try {
    console.log(req.query);
    console.log(req.params);
    // const search_text = req.query.search_text; // Text search

    // const product = await Product.find(); // All Product DB

    // const resProduct = await product.filter((item) => {
    //   return (
    //     item.name.toLowerCase().indexOf(search_text.toLowerCase(), 0) !== -1
    //   );
    // });

    // let resCategory = [];

    // for (let idx = 0; idx < resProduct.length; idx++) {
    //   resCategory.push(resProduct[idx].category);
    // } // Add in resCategory from resProduct.category

    // // Response
    // if (resProduct.length === 0) {
    //   res.status(200).json({ message: "Товари не знайдено" });
    // } else {
    //   res.status(200).json({ resProduct, resCategory });
    // }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Сталася помилка. Спробуйте пізніше." });
  }
};

module.exports.filterSearchSite = async function (req, res) {
  console.log("Сервер filterSearchSite");
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Сталася помилка. Спробуйте пізніше." });
  }
};
