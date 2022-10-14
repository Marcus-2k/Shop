const ProductModel = require("../models/Product");

module.exports.getHistoryGuest = async function (req, res) {
  console.log("Server getHistoryGuest");

  try {
    const idProducts = Object.values(req.query)[0].split(",");

    let product = [];

    for (let i = 0; i < idProducts.length; i++) {
      const itemProduct = await ProductModel.findById(idProducts[i]);

      itemProduct.imageSrc.splice(2, 7);
      product.push(itemProduct);
    }

    return res.status(200).json({ history__view: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
