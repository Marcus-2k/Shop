const Product = require("../models/Product");

module.exports.searchSite = async function (req, res) {
  console.log("Server searchSite");
  try {
    const search_text = req.query.search_text; // Text search
    console.log(search_text);

    const product = await Product.find({
      name: { $regex: search_text, $options: "i" },
    }); // $regex >> partial keyWords, options "i" >> case insensitivity

    res.status(200).json(product);
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
