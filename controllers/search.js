const Product = require("../models/Product");
const Catalog = require("../db/catalog");

module.exports.search = async function (req, res) {
  console.log("Server search");

  try {
    console.log(req.query);

    const lengthQueryParams = Object.keys(req.query).length; // Counter Params

    const search_text = req.query.search_text;

    // Pagination === START
    let limit = req.query.limit ? Number(req.query.limit) : 10; // Скільки товарів на сторінку
    if (limit < 10) {
      limit = 10;
    }
    let page = req.query.page ? Number(req.query.page) : 1; // Сторінка яку нада відобразити

    let currentPage = page; // Open page
    let count; // Counter element in collection
    let maxPage; // Max page site
    // Pagination === END

    const type_sort = req.query.type_sort ? Number(req.query.type_sort) : 5; // Type sorting
    // 0 = Від дешевих до дорогих (cheap)
    // 1 = Від дорогих до дешевих (expensive)
    // 2 = Популярні (popularity)
    // 3 = Новинки (novelty)
    // 4 = Акція (action)
    // 5 = За рейтингом (grade)

    if (lengthQueryParams === 4) {
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

      let categoryNoUnique = [];
      let productCharacteristics = [];

      product.forEach((element) => {
        categoryNoUnique.push(element.category);
        productCharacteristics.push(element.characteristics);
      }); // Category and Characteristics in collection

      // Type sorting ==============================================================
      if (type_sort === 0) {
        // Сheap
        product = await Product.find({
          name: { $regex: search_text, $options: "i" },
        })
          .sort({ price: 1 })
          .limit(limit)
          .skip(limit * --page);
      } else if (type_sort === 1) {
        // Expensive
        product = await Product.find({
          name: { $regex: search_text, $options: "i" },
        })
          .sort({ price: -1 })
          .limit(limit)
          .skip(limit * --page);
      } else if (type_sort === 2) {
        // Popularity <Disabled Client>
      } else if (type_sort === 3) {
        // Novelty <Disabled Client>
      } else if (type_sort === 4) {
        // Action
        product = await Product.find({
          name: { $regex: search_text, $options: "i" },
        })
          .sort({ action: -1 })
          .limit(limit)
          .skip(limit * --page);

        // Delete item product if action = true
        for (let idx = 0; idx < product.length; idx++) {
          if (product[idx].action === false) {
            product.splice(idx, 1);
            idx--;
          }
        }
      } else if (type_sort === 5) {
        // Grade
        product = await Product.find({
          name: { $regex: search_text, $options: "i" },
        })
          .limit(limit)
          .skip(limit * --page);
      }

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
      let productCharacteristicsName = [];
      uniqueProductCategory.forEach((element) => {
        if (element.length === 3) {
          productCharacteristicsName.push(
            Catalog.categoryList[element[0]].nameListCategory[element[1]]
              .subNameListCategory[element[2]].characteristics
          );
        }
      });

      return res.status(200).json({
        product,
        uniqueProductCategory,
        productCharacteristicsBlock,
        productCharacteristicsName,
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

      // Type sorting ==============================================================
      if (type_sort === 0) {
        // Сheap
        product = await Product.find({
          name: { $regex: search_text, $options: "i" },
        })
          .sort({ price: 1 })
          .limit(limit)
          .skip(limit * --page);
      } else if (type_sort === 1) {
        // Expensive
        product = await Product.find({
          name: { $regex: search_text, $options: "i" },
        })
          .sort({ price: -1 })
          .limit(limit)
          .skip(limit * --page);
      } else if (type_sort === 2) {
        // Popularity <Disabled Client>
      } else if (type_sort === 3) {
        // Novelty <Disabled Client>
      } else if (type_sort === 4) {
        // Action
        product = await Product.find({
          name: { $regex: search_text, $options: "i" },
        })
          .sort({ action: -1 })
          .limit(limit)
          .skip(limit * --page);

        // Delete item product if action = true
        for (let idx = 0; idx < product.length; idx++) {
          if (product[idx].action === false) {
            product.splice(idx, 1);
            idx--;
          }
        }
      } else if (type_sort === 5) {
        // Grade
        product = await Product.find({
          name: { $regex: search_text, $options: "i" },
        })
          .limit(limit)
          .skip(limit * --page);
      }

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
      let productCharacteristicsName = [];
      uniqueProductCategory.forEach((element) => {
        if (element.length === 3) {
          productCharacteristicsName.push(
            Catalog.categoryList[element[0]].nameListCategory[element[1]]
              .subNameListCategory[element[2]].characteristics
          );
        }
      });

      return res.status(200).json({
        product,
        uniqueProductCategory,
        productCharacteristicsBlock,
        productCharacteristicsName,
        currentPage,
        maxPage,
        limit,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// All function this controller ==================================================================================

// Delete Duplicate Category ====================================================================
function deleteDuplicateCategory(categoryNoUnique) {
  categoryNoUnique.forEach((element, i) => {
    categoryNoUnique[i] = element.join("");
  }); // [ [1,0,5], [1,0,5], [1,0,0] ... ] >>> [ '105', '105', '100', ...]

  const uniqueProductCategory = Array.from(new Set(categoryNoUnique));
  uniqueProductCategory.forEach((element, i) => {
    uniqueProductCategory[i] = ("" + element).split("").map(Number);
  }); // [ '105', '100' ... ] >>> [ [1,0,5], [1,0,0] ... ]
  return uniqueProductCategory;
} // return [ [1,0,5], [1,0,5], [1,0,0] ] >>> [ [1, 0, 5], [1, 0, 0] ]

// Counter Product In Category ==================================================================
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
} // return [ [ 1 ], [ 6 ], [ 10 ] ]

// Product Characteristics Block ================================================================
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
