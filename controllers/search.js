const Product = require("../models/Product");
const Catalog = require("../db/catalog");

module.exports.search = async function (req, res) {
  console.log("Server search");

  try {
    console.log(req.query);

    const search_text = req.query.search_text;

    // Pagination === START
    let limit = req.query.limit ? Number(req.query.limit) : 10; // Скільки товарів на сторінку
    if (
      limit < 10 ||
      limit > 100 ||
      typeof limit !== "number" ||
      isNaN(limit)
    ) {
      limit = 10;
    }

    let page = req.query.page ? Number(req.query.page) : 1; // Сторінка яку нада відобразити
    if (page < 1 || typeof page !== "number" || isNaN(page)) {
      page = 1;
    }

    let currentPage = page; // Open page
    let count; // Counter element in collection
    let maxPage; // Max page site
    // Pagination === END

    let type_sort = req.query.type_sort ? Number(req.query.type_sort) : 5; // Type sorting
    // 0 = Від дешевих до дорогих (cheap)
    // 1 = Від дорогих до дешевих (expensive)
    // 2 = Популярні (popularity)
    // 3 = Новинки (novelty)
    // 4 = Акція (action)
    // 5 = За рейтингом (grade)
    if (
      type_sort > 5 ||
      type_sort < 0 ||
      typeof type_sort !== "number" ||
      isNaN(type_sort)
    ) {
      type_sort = 5;
    }

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

    const uniqueProductCategory = deleteDuplicateCategory(categoryNoUnique); // Unique Category Product
    // console.log(uniqueProductCategory);

    console.log(getQueryParams(req.query, uniqueProductCategory));
    // Type sorting ==============================================================
    if (type_sort === 0) {
      // Сheap
      product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        $or: getQueryParams(req.query, uniqueProductCategory),
      })
        .sort({ price: 1 })
        .limit(limit)
        .skip(limit * --page);

      let sortByAction = false;

      if (product.length <= 1) {
        sortByAction = true;
      }

      while (!sortByAction) {
        console.log("while");

        product.forEach((element, idx) => {
          if (idx >= 1) {
            if (
              element.action === true &&
              element.actionPrice < product[idx - 1].price
            ) {
              let prevItem = product[idx - 1];
              product[idx - 1] = element;
              product[idx] = prevItem;
            }
          }
        });

        product.forEach((element, idx) => {
          if (idx !== 0) {
            if (
              element.action === true &&
              element.actionPrice < product[idx - 1].price
            ) {
              sortByAction = false;
            } else {
              sortByAction = true;
            }
          } else {
            sortByAction = false;
          }
        });
      }
    } else if (type_sort === 1) {
      // Expensive
      product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        $or: getQueryParams(req.query, uniqueProductCategory),
      })
        .sort({ price: 1 })
        .limit(limit)
        .skip(limit * --page);

      let sortByAction = false;

      if (product.length <= 1) {
        sortByAction = true;
      }

      while (!sortByAction) {
        console.log("while");

        product.forEach((element, idx) => {
          if (idx >= 1) {
            if (
              element.action === true &&
              element.actionPrice < product[idx - 1].price
            ) {
              let prevItem = product[idx - 1];
              product[idx - 1] = element;
              product[idx] = prevItem;
            }
          }
        });

        product.forEach((element, idx) => {
          if (idx !== 0) {
            if (
              element.action === true &&
              element.actionPrice < product[idx - 1].price
            ) {
              sortByAction = false;
            } else {
              sortByAction = true;
            }
          } else {
            sortByAction = false;
          }
        });
      }

      product.reverse();
    } else if (type_sort === 2) {
      // Popularity <Disabled Client>
    } else if (type_sort === 3) {
      // Novelty <Disabled Client>
    } else if (type_sort === 4) {
      // Action
      product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        $or: getQueryParams(req.query, uniqueProductCategory),
      })
        .sort({ action: -1 })
        .limit(limit)
        .skip(limit * --page);

      count = await Product.find({
        name: { $regex: search_text, $options: "i" },
        action: true,
      })
        .sort({ action: -1 })
        .countDocuments({})
        .exec(); // Counter element in collection
      maxPage = Math.ceil(count / limit); // Number rounding 3.02 >>> 4

      // Delete item product if action = false
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
        $or: getQueryParams(req.query, uniqueProductCategory),
      })
        .limit(limit)
        .skip(limit * --page);
    }

    // ===========================================================================
    if (req.body.widthCharacteristics) {
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
        productCharacteristicsBlock,
        productCharacteristicsName,
        currentPage,
        maxPage,
        limit,
      });
    } else {
      return res.status(200).json({
        product,
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

function getQueryParams(reqQuery, uniqueCategory) {
  let queryParams = Object.assign({}, reqQuery);

  delete queryParams.search_text;
  delete queryParams.limit;
  delete queryParams.page;
  delete queryParams.type_sort;

  let queryParamsCategory = [];

  for (let idx = 0; idx < uniqueCategory.length; idx++) {
    queryParamsCategory.push({});

    for (let param in queryParams) {
      for (
        let j = 0;
        j <
        Catalog.categoryList[uniqueCategory[idx][0]].nameListCategory[
          uniqueCategory[idx][1]
        ].subNameListCategory[uniqueCategory[idx][2]].characteristics.length;
        j++
      ) {
        if (
          Catalog.categoryList[uniqueCategory[idx][0]].nameListCategory[
            uniqueCategory[idx][1]
          ].subNameListCategory[uniqueCategory[idx][2]].characteristics[j]
            .query_name === param
        ) {
          queryParamsCategory[idx]["characteristicsName." + param] = {
            $in: queryParams[param].split(","),
          };
        }
      }
    }
  }

  for (let idx = 0; idx < queryParamsCategory.length; idx++) {
    if (Object.keys(queryParamsCategory[idx]).length === 0) {
      if (idx === 0) {
        queryParamsCategory.shift();
      } else {
        queryParamsCategory.splice(1, idx);
        idx - 1;
      }
    }
  }

  return queryParamsCategory;
}
