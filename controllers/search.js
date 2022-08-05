const Product = require("../models/Product");

module.exports.search = async function (req, res) {
  console.log("Server search");

  try {
    console.log(req.query);

    const lengthReq = Object.keys(req.query).length; // Counter Params
    const search_text = req.query.search_text;

    const limit = req.query.limit_user ? req.query.limit_user : 10; // Скільки користувачів на сторінку
    let page = req.query.page ? req.query.page : 1; // Сторінка яку нада відобразити

    let currentPage = page; // Open page

    const count = await Product.find({
      name: { $regex: search_text, $options: "i" },
    })
      .countDocuments({})
      .exec(); // Max page
    const maxPage = Math.ceil(count / limit); // Number rounding 3.02 >>> 4

    console.log(limit);
    console.log(count);
    console.log(maxPage);
    console.log("==============================");

    if (req.query.search_text || (req.query.search_text && req.query.limit)) {
      let categoryNoUnique = [];
      let productOptions = [];

      let product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        // $regex >> partial keywords, options "i" >> case insensitivity
      });

      product.forEach((element) => {
        categoryNoUnique.push(element.category);
        productOptions.push(element.options);
      }); // Category and Options in collection

      product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        // $regex >> partial keywords, options "i" >> case insensitivity
      })
        .limit(limit)
        .skip(limit * --page); // Search in DB, all product by keywors
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
        currentPage,
        maxPage,
        limit,
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
      ); // Sort all product by category

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
        maxPage,
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
