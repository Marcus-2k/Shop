const Product = require("../models/Product");

module.exports.search = async function (req, res) {
  console.log("Server search");

  try {
    console.log(req.query);
    const lengthReq = Object.keys(req.query).length;
    const search_text = req.query.search_text; // Назва товару пошуку

    if (lengthReq === 1) {
      let categoryNoUnique = [];
      let productOptions = [];

      const product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        // $regex >> partial keyWords, options "i" >> case insensitivity
      }); // Search in DB, all product by keywors === START

      // product.sort((item, itemTwo) =>
      //   item.category < itemTwo.category ? 1 : -1
      // );

      product.forEach((element) => {
        categoryNoUnique.push(element.category);
        productOptions.push(element.options);
      }); // Category and Options in collection

      const uniqueProductCategory = deleteDuplicateCategory(categoryNoUnique); // Unique Product

      const counterProductInCategory = counterProduct(
        uniqueProductCategory,
        categoryNoUnique
      ); // Counter category, and product in it

      const productOptionsBlock = productBlock(
        counterProductInCategory,
        productOptions
      ); // Product parameters block by category

      // ===========================================================================
      res.status(200).json({
        product,
        uniqueProductCategory,
        productOptionsBlock,
      });
    } else if (lengthReq > 1) {
      const parameters = Object.values(req.query).splice(1); // {search_text: "телефон"; ram: "4 ГБ,16 ГБ"} >>> ['4 ГБ,16 ГБ']

      let parametersSplit = [];
      parameters.forEach((element) => {
        parametersSplit.push(element.split(","));
      });

      const allParams = parametersSplit.flat(1); // concat all arrays in one array

      allParams.forEach((element, idx) => {
        allParams[idx] = [element];
      }); // [ 'example', 'example' ] >>> [ ['example'], ['example'] ]

      const product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        optionsToString: { $in: allParams },
      }); // Search in DB, all product by keywors

      product.sort((item, itemTwo) =>
        item.category < itemTwo.category ? 1 : -1
      ); // sort all product by category

      let categoryNoUnique = [];
      let productOptions = [];

      product.forEach((element) => {
        categoryNoUnique.push(element.category);
        productOptions.push(element.options);
      }); // Category and Options in collection

      const uniqueProductCategory = deleteDuplicateCategory(categoryNoUnique); // Unique Product

      const counterProductInCategory = counterProduct(
        uniqueProductCategory,
        categoryNoUnique
      ); // Counter category, and product in it

      const productOptionsBlock = productBlock(
        counterProductInCategory,
        productOptions
      ); // Product parameters block by category

      // ===========================================================================
      res.status(200).json({
        product,
        uniqueProductCategory,
        productOptionsBlock,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Сталася помилка. Спробуйте пізніше." });
  }
};

// All function this controller ==================================================================================

// Delete Duplicate Category ========================================================
function deleteDuplicateCategory(categoryNoUnique) {
  categoryNoUnique.forEach((element, i) => {
    categoryNoUnique[i] = element.join("");
  }); // [ [1,0,5], [1,0,5], [1,0,0] ... ] >>> [ '105', '105', '100', ...]

  const uniqueProductCategory = Array.from(new Set(categoryNoUnique));
  uniqueProductCategory.forEach((element, i) => {
    uniqueProductCategory[i] = ("" + element).split("").map(Number);
  }); // [ '105', '100' ... ] >>> [ [1,0,5], [1,0,0] ... ]
  return uniqueProductCategory;
}

// Counter Product ==================================================================
function counterProduct(uniqueProductCategory, categoryNoUnique) {
  const counterProductInCategory = [];
  let uniqueCategory = [];

  uniqueProductCategory.forEach((element, i) => {
    uniqueCategory[i] = element.join(""); // uniqueCategory = [ '100', '105' ]
    counterProductInCategory.push([0]); // [ [ 0 ], [ 0 ], [ 0 ] ]
  });

  categoryNoUnique.forEach((element, i) => {
    uniqueCategory.forEach((item, idx) => {
      if (element === item) {
        counterProductInCategory[idx][0]++;
      }
    });
  }); // counterProductInCategory = [ [ 1 ], [ 6 ], [ 10 ] ]

  return counterProductInCategory;
}

// Product Options Block ============================================================

function productBlock(counter, productOptions) {
  const productOptionsBlock = [];
  counter.forEach((element) => {
    let optionsBlock = productOptions.splice(0, element[0]);
    productOptionsBlock.push(optionsBlock);
  });
  return productOptionsBlock;
}
