const Product = require("../models/Product");

module.exports.getHistoryGuest = async function (req, res) {
  console.log("Server getHistoryGuest");

  try {
    const idProducts = Object.values(req.query)[0].split(",");

    let product = [];

    for (let i = 0; i < idProducts.length; i++) {
      let itemProduct = await Product.findById(idProducts[i]);

      itemProduct.imageSrc.splice(2, 7);
      product.push(itemProduct);
    }

    res.status(200).json({ history__view: product });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Помилка: Користувача не оновлено, спробуйте пізніше",
    });
  }
};
