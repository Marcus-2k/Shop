const Product = require("../models/Product");
// const categoryNumberTitle = [{ category: [1, 0, 0], lengthOption: 3 }];

module.exports.search = async function (req, res) {
  console.log("Server search");

  try {
    console.log(req.query);

    const lengthQueryParams = Object.keys(req.query).length; // Counter Params

    const search_text = req.query.search_text;

    // Pagination === START
    const limit = req.query.limit ? Number(req.query.limit) : 10; // Скільки товарів на сторінку
    let page = req.query.page ? Number(req.query.page) : 1; // Сторінка яку нада відобразити

    let currentPage = page; // Open page
    let count; // Counter element in collection
    let maxPage; // Max page site
    // Pagination === END

    if (lengthQueryParams === 3) {
      console.log("IF");

      count = await Product.find({
        name: { $regex: search_text, $options: "i" },
      })
        .countDocuments({})
        .exec(); // Counter element in collection
      maxPage = Math.ceil(count / limit); // Number rounding 3.02 >>> 4

      let product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        // $regex >> partial keywords, options "i" >> case insensitivity
      });
      console.log("===========================");
      // console.log(product);
      console.log("===========================");

      let categoryNoUnique = [];
      let productCharacteristics = [];

      product.forEach((element) => {
        categoryNoUnique.push(element.category);
        productCharacteristics.push(element.characteristics);
      }); // Category and Characteristics in collection

      product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        // $regex >> partial keywords, options "i" >> case insensitivity
      })
        .limit(limit)
        .skip(limit * --page); // Search in DB, all product by keywors

      // ===========================================================================
      const uniqueProductCategory = deleteDuplicateCategory(categoryNoUnique); // Unique Category Product
      // console.log(uniqueProductCategory);

      const counterProductInCategory = counterProduct(
        uniqueProductCategory,
        categoryNoUnique
      ); // Counter category, and product in it
      // console.log(counterProductInCategory);

      const productCharacteristicsBlock = productBlock(
        counterProductInCategory,
        productCharacteristics
      ); // Product parameters block by category
      // console.log(productCharacteristicsBlock);
      // ===========================================================================

      res.status(200).json({
        product,
        uniqueProductCategory,
        productCharacteristicsBlock,
        currentPage,
        maxPage,
        limit,
      });
    } else if (lengthQueryParams > 3) {
      console.log("ELSE IF");
      // ===================================================================================================================
      // ===================================================================================================================
      // ===================================================================================================================
      let parameters = Object.values(req.query).splice(1); // {search_text: "телефон"; ram: "4 ГБ,16 ГБ"} >>> ['4 ГБ,16 ГБ']
      parameters = parameters.flat(1);
      parameters.pop(); // delete page
      parameters.pop(); // delete limit

      const parametersToString = [];
      parameters.forEach((element, idx) => {
        element.split(",").forEach((item) => {
          // parametersToString.push([item]);
          parametersToString.push(item);
        });
      }); // [ '6 ГБ', 'Білий', '1 рік,2 роки' ] >>> [ [ '6 ГБ' ], [ 'Білий' ], [ '1 рік' ], [ '2 роки' ] ]

      // console.log(parametersToString);
      // ===================================================================================================================
      let parametersQuery = Object.entries(req.query).splice(1);
      parametersQuery.pop(); // delete page
      parametersQuery.pop(); // delete limit
      parametersQuery = parametersQuery.flat(1);

      const queryParams = {};
      parametersQuery.forEach((element, idx) => {
        if (idx % 2 === 0) {
          idx++;
          // ===
          // queryParams[element] = parameters2[idx].split(",");
          // ===
          if (parametersQuery[idx].indexOf(",") !== -1) {
            queryParams[element] = parametersQuery[idx].split(",");
          } else {
            queryParams[element] = parametersQuery[idx];
          }
          // ===
        }
      });
      // console.log(queryParams);
      // ===================================================================================================================
      // ===================================================================================================================
      // ===================================================================================================================

      count = await Product.find({
        name: { $regex: search_text, $options: "i" },
      })
        .countDocuments({})
        .exec(); // Counter element in collection
      maxPage = Math.ceil(count / limit); // Number rounding 3.02 >>> 4

      let product = await Product.find({
        name: { $regex: search_text, $options: "i" },
      });

      let categoryNoUnique = [];
      let productCharacteristics = [];

      product.forEach((element) => {
        categoryNoUnique.push(element.category);
        productCharacteristics.push(element.characteristics);
      }); // Category and Characteristics in collection

      product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        // $regex >> partial keywords, options "i" >> case insensitivity
        optionsToString: { $in: parametersToString },
      })
        .limit(limit)
        .skip(limit * --page); // Search in DB, all product by keywors

      // ===========================================================================
      const uniqueProductCategory = deleteDuplicateCategory(categoryNoUnique); // Unique Category Product
      // console.log(uniqueProductCategory);

      const counterProductInCategory = counterProduct(
        uniqueProductCategory,
        categoryNoUnique
      ); // Counter category, and product in it
      // console.log(counterProductInCategory);

      const productCharacteristicsBlock = productBlock(
        counterProductInCategory,
        productCharacteristics
      ); // Product parameters block by category
      // console.log(productCharacteristicsBlock);
      // ===========================================================================

      res.status(200).json({
        product,
        uniqueProductCategory,
        productCharacteristicsBlock,
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

// Product Characteristics Block ============================================================

function productBlock(counter, productCharacteristics) {
  const productCharacteristicsBlock = [];
  counter.forEach((element) => {
    let characteristicsBlock = productCharacteristics.splice(0, element[0]);
    productCharacteristicsBlock.push(characteristicsBlock);
  });

  const characteristicsBlockCategory = [];
  productCharacteristicsBlock.forEach((element, i) => {
    characteristicsBlockCategory.push([]);

    for (let index = 0; index < element[0].length; index++) {
      let characteristicsBlock = [];
      element.forEach((item, idx) => {
        characteristicsBlock.push(item[index]);
      });
      characteristicsBlockCategory[i].push(characteristicsBlock);
    }
  });

  return characteristicsBlockCategory;
}

async function addCharacteristicsSelected(
  characteristics,
  paramsString,
  search_text,
  query
) {
  const product = await Product.find(
    // {},
    {
      // name: { $regex: search_text, $options: "i" },
      // queryParams: {
      //   $or: [
      //     { ram: "32 ГБ", color: "Білий", guarantee: "1 рік" },
      //     { ram: "24 ГБ", color: "Білий", guarantee: "1 рік" },
      //     { ram: "16 ГБ", color: "Жовтий", guarantee: "1 рік" },
      //   ],
      // },
      // optionsToString: {
      //   $in: [
      //     "Білий",
      //     ["16 ГБ", "Жовтий", ""],
      //     ["32 ГБ", "Білий", "1 рік"],
      //     ["24 ГБ", "Білий", "1 рік"],
      //   ],
      // },
    }
  );

  // console.log(product);

  return 0;
}
