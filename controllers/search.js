const Product = require("../models/Product");

module.exports.search = async function (req, res) {
  console.log("Server search");

  try {
    console.log(req.query);

    const lengthQueryParams = Object.keys(req.query).length; // Counter Params

    const search_text = req.query.search_text;

    // Pagination === START
    const limit = req.query.limit ? Number(req.query.limit) : 10; // Скільки користувачів на сторінку
    let page = req.query.page ? Number(req.query.page) : 1; // Сторінка яку нада відобразити

    let currentPage = page; // Open page
    let count;
    // let count = await Product.find({
    //   name: { $regex: search_text, $options: "i" },
    // })
    //   .countDocuments({})
    //   .exec(); // Max page

    // const maxPage = Math.ceil(count / limit); // Number rounding 3.02 >>> 4
    let maxPage;
    // Pagination === END

    if (lengthQueryParams === 3) {
      console.log("IF");

      let count = await Product.find({
        name: { $regex: search_text, $options: "i" },
      })
        .countDocuments({})
        .exec(); // Counter element in collection
      maxPage = Math.ceil(count / limit); // Number rounding 3.02 >>> 4

      let product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        // $regex >> partial keywords, options "i" >> case insensitivity
      });

      let categoryNoUnique = [];
      let productOptions = [];

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
    } else if (lengthQueryParams > 3) {
      console.log("ELSE IF");
      const parameters = Object.values(req.query).splice(1); // {search_text: "телефон"; ram: "4 ГБ,16 ГБ"} >>> ['4 ГБ,16 ГБ']
      parameters.pop(); // delete limit
      parameters.pop(); // delete page

      let allQueryParams = []; // Example [ [ '6 ГБ' ], [ '10' ], [ '1' ] ]
      parameters.forEach((element) => {
        element.split(",").forEach((item) => {
          allQueryParams.push([item]);
        });
        // allQueryParams.push(element.split(","));
      }); // [ '6 ГБ', '10', '1' ] >>> [ [ '6 ГБ' ], [ '10' ], [ '1' ] ]

      console.log(allQueryParams);

      //
      let count = await Product.find({
        name: { $regex: search_text, $options: "i" },
        optionsToString: { $in: allQueryParams },
      })
        .countDocuments({})
        .exec(); // Counter element in collection
      maxPage = Math.ceil(count / limit); // Number rounding 3.02 >>> 4
      //

      let product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        // $regex >> partial keywords, options "i" >> case insensitivity
      });

      let categoryNoUnique = [];
      let productOptions = [];

      product.forEach((element) => {
        categoryNoUnique.push(element.category);
        productOptions.push(element.options);
      }); // Category and Options in collection

      product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        optionsToString: { $in: allQueryParams },
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
