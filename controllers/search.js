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

      // ===================================================================================================================
      let parameters2 = Object.entries(req.query).splice(1); // {search_text: "телефон"; ram: "4 ГБ,16 ГБ"} >>> ['4 ГБ,16 ГБ']
      parameters2.pop(); // delete limit
      parameters2.pop(); // delete page
      parameters2 = parameters2.flat(1);

      const queryParams = {};
      parameters2.forEach((element, idx) => {
        if (idx % 2 === 0) {
          idx++;
          queryParams[element] = parameters2[idx].split(",");
        }
      });
      console.log(queryParams);
      // ===================================================================================================================
      let parameters = Object.values(req.query).splice(1); // {search_text: "телефон"; ram: "4 ГБ,16 ГБ"} >>> ['4 ГБ,16 ГБ']
      parameters = parameters.flat(1);
      parameters.pop(); // delete limit
      parameters.pop(); // delete page

      const paramsString = [];
      parameters.forEach((element, idx) => {
        element.split(",").forEach((item) => {
          paramsString.push([item]);
        });
      }); // [ '6 ГБ', 'Білий', '1 рік,2 роки' ] >>> [ [ '6 ГБ' ], [ 'Білий' ], [ '1 рік' ], [ '2 роки' ] ]
      console.log(paramsString);

      //
      let count = await Product.find({
        name: { $regex: search_text, $options: "i" },
        optionsToString: { $in: paramsString },
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
      let categoryNoUnique2 = [];
      let productOptions = [];
      let productOptions2 = [];

      product.forEach((element) => {
        categoryNoUnique.push(element.category);
        productOptions.push(element.options);
      }); // Category and Options in collection

      product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        optionsToString: { $in: paramsString },
      })
        .limit(limit)
        .skip(limit * --page); // Search in DB, all product by keywors

      product.forEach((element) => {
        categoryNoUnique2.push(element.category);
        productOptions2.push(element.options);
      }); // Category and Options in collection

      // ==========================================
      const uniqueProductCategory = deleteDuplicateCategory(categoryNoUnique); // Unique Product
      const uniqueProductCategory2 = deleteDuplicateCategory(categoryNoUnique2); // Unique Product
      // ==========================================
      const counterProductInCategory = counterProduct(
        uniqueProductCategory,
        categoryNoUnique
      ); // Counter category, and product in it
      const counterProductInCategory2 = counterProduct(
        uniqueProductCategory2,
        categoryNoUnique2
      ); // Counter category, and product in it
      // ==========================================
      const productOptionsBlock = productBlock(
        counterProductInCategory,
        productOptions
      ); // Product parameters block by category
      const productOptionsBlock2 = productBlock(
        counterProductInCategory2,
        productOptions2
      ); // Product parameters block by category
      // ==========================================

      // console.log(productOptionsBlock);
      // console.log(productOptionsBlock2);
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
