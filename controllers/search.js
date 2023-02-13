const Product = require("../models/Product");
const SearchService = require("../service/search-service");
const catalog = require("../db/catalog");
const catalog_option = require("../db/catalog_characteristics");

module.exports.search = async function (req, res) {
  console.log("Server search");

  try {
    console.log(req.query);

    const search_text = req.query.search_text;
    const navigate_link = req.params["navigate_link"];

    if (!search_text && !navigate_link) {
      return res.status(404).json({ message: "Не коректний запит" });
    }

    if (navigate_link === "link") {
      return res.status(404).json({ message: "Не коректний запит" });
    }

    // Pagination START ============================================================================
    let limit = req.query.limit ? Number(req.query.limit) : 10; // Скільки товарів на сторінку
    if (
      limit < 10 ||
      limit > 100 ||
      typeof limit !== "number" ||
      isNaN(limit)
    ) {
      limit = 10;
    }

    let currentPage = req.query.page ? Number(req.query.page) : 1; // Open page
    if (
      currentPage < 1 ||
      typeof currentPage !== "number" ||
      isNaN(currentPage)
    ) {
      currentPage = 1;
    }

    let count; // Counter element in collection
    let maxPage; // Max number of pages
    // Pagination END ==============================================================================

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

    let product;
    let FilterQuery = {};

    let filters;
    let widget_auto_portal;
    if (navigate_link) {
      let { categoryList, type } = await SearchService.searchCategoryByParams(
        req.params
      );
      if (categoryList === null || type === null) {
        return res.status(500).json({ message: "Server error" });
      }

      if (type === 1) {
        FilterQuery = { category: categoryList[0] };
      } else if (type === 2) {
        FilterQuery = { category: { $in: categoryList } };
        widget_auto_portal =
          catalog.categoryList[categoryList[0][0]].nameListCategory[
            categoryList[0][1]
          ].subNameListCategory;
      } else {
        return res.status(500).json({ message: "Server error" });
      }

      product = await Product.find(FilterQuery, {
        category: 1,
        characteristics: 1,
        characteristicsName: 1,
      });

      count = await Product.find(FilterQuery).countDocuments({}).exec();
      maxPage = Math.ceil(count / limit);

      let filtersData = createFilters(product);
      filters = filtersData.filters;
    } else if (search_text) {
      FilterQuery.name = { $regex: search_text, $options: "i" };

      product = await Product.find(FilterQuery, {
        category: 1,
        characteristics: 1,
        characteristicsName: 1,
      });

      count = await Product.find(FilterQuery).countDocuments({}).exec();
      maxPage = Math.ceil(count / limit);

      let filtersData = createFilters(product);
      filters = filtersData.filters;
    }

    // Type sorting START ========================================================================================
    if (type_sort === 0) {
      // Сheap
      product = await Product.find({
        ...FilterQuery,
        ...getQueryParams(req.query),
      })
        .sort({ price: 1 })
        .limit(limit)
        .skip(limit * (currentPage - 1));

      let sortByAction = false;

      if (product.length <= 1) {
        sortByAction = true;
      }

      while (!sortByAction) {
        console.log("while");

        for (let idx = 0; idx < product.length; idx++) {
          if (idx >= 1) {
            if (
              product[idx].action === true &&
              product[idx - 1].action === true
            ) {
              if (product[idx].actionPrice < product[idx - 1].actionPrice) {
                let prevItem = product[idx - 1];
                product[idx - 1] = product[idx];
                product[idx] = prevItem;
              }
            } else if (
              product[idx].action === true &&
              product[idx - 1].action === false
            ) {
              if (product[idx].actionPrice < product[idx - 1].price) {
                let prevItem = product[idx - 1];
                product[idx - 1] = product[idx];
                product[idx] = prevItem;
              }
            }
          }
        }

        for (let idx = 0; idx < product.length; idx++) {
          if (idx !== 0) {
            if (
              product[idx].action === true &&
              product[idx - 1].action === true
            ) {
              if (product[idx].actionPrice < product[idx - 1].actionPrice) {
                sortByAction = false;
                break;
              } else {
                sortByAction = true;
              }
            } else if (
              product[idx].action === true &&
              product[idx - 1].action === false
            ) {
              if (product[idx].actionPrice < product[idx - 1].price) {
                sortByAction = false;
                break;
              } else {
              }
              sortByAction = true;
            }
          }
        }
      }
    } else if (type_sort === 1) {
      // Expensive
      product = await Product.find({
        ...FilterQuery,
        ...getQueryParams(req.query),
      })
        .sort({ price: 1 })
        .limit(limit)
        .skip(limit * (currentPage - 1));

      let sortByAction = false;

      if (product.length <= 1) {
        sortByAction = true;
      }

      while (!sortByAction) {
        console.log("while");

        for (let idx = 0; idx < product.length; idx++) {
          if (idx >= 1) {
            if (
              product[idx].action === true &&
              product[idx - 1].action === true
            ) {
              if (product[idx].actionPrice < product[idx - 1].actionPrice) {
                let prevItem = product[idx - 1];
                product[idx - 1] = product[idx];
                product[idx] = prevItem;
              }
            } else if (
              product[idx].action === true &&
              product[idx - 1].action === false
            ) {
              if (product[idx].actionPrice < product[idx - 1].price) {
                let prevItem = product[idx - 1];
                product[idx - 1] = product[idx];
                product[idx] = prevItem;
              }
            }
          }
        }

        for (let idx = 0; idx < product.length; idx++) {
          if (idx !== 0) {
            if (
              product[idx].action === true &&
              product[idx - 1].action === true
            ) {
              if (product[idx].actionPrice < product[idx - 1].actionPrice) {
                sortByAction = false;
                break;
              } else {
                sortByAction = true;
              }
            } else if (
              product[idx].action === true &&
              product[idx - 1].action === false
            ) {
              if (product[idx].actionPrice < product[idx - 1].price) {
                sortByAction = false;
                break;
              } else {
              }
              sortByAction = true;
            }
          }
        }
      }

      product.reverse();
    } else if (type_sort === 2) {
      // Popularity <Disabled Client>
    } else if (type_sort === 3) {
      // Novelty <Disabled Client>
    } else if (type_sort === 4) {
      // Action
      product = await Product.find({
        ...FilterQuery,
        ...getQueryParams(req.query),
      })
        .sort({ action: -1 })
        .limit(limit)
        .skip(limit * (currentPage - 1));

      count = await Product.find({
        ...FilterQuery,
        ...getQueryParams(req.query),
        action: true,
      })
        .sort({ action: -1 })
        .countDocuments({})
        .exec();
      maxPage = Math.ceil(count / limit);

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
        ...FilterQuery,
        ...getQueryParams(req.query),
      })
        .limit(limit)
        .skip(limit * (currentPage - 1));
    }
    // Type sorting END ==========================================================================================

    return res.status(200).json({
      product,
      filters,
      widget_auto_portal,
      currentPage,
      maxPage,
      limit,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

function createFilters(productList) {
  console.log("START createFilters");

  let product = [...productList];
  let filters = [];

  let productCategory = [];
  let productCharacteristics = [];
  // =============================================================================================
  for (let i = 0; i < product.length; i++) {
    if (i === 0) {
      productCategory.push(product[i].category.join(""));
      productCharacteristics.push([product[i].characteristics]);
    } else {
      if (productCategory.indexOf(product[i].category.join("")) !== -1) {
        let positionCategory = productCategory.indexOf(
          product[i].category.join("")
        );

        productCharacteristics[positionCategory].push(
          product[i].characteristics
        );
      } else {
        productCategory.push(product[i].category.join(""));
        productCharacteristics.push([product[i].characteristics]);
      }
    }
  }
  // =============================================================================================
  for (let idx = 0; idx < productCategory.length; idx++) {
    productCategory[idx] = ("" + productCategory[idx]).split("").map(Number);
  }
  // =============================================================================================
  for (let i = 0; i < productCategory.length; i++) {
    let characteristics = [];

    if (productCategory[i].length === 3) {
      // console.log("if 3 ==========");

      characteristics =
        catalog_option.categoryList_characteristics[productCategory[i][0]]
          .nameListCategory[productCategory[i][1]].subNameListCategory[
          productCategory[i][2]
        ].characteristics;
    } else if (productCategory[i].length === 2) {
      // console.log("else if 2 ==========");

      characteristics =
        catalog_option.categoryList_characteristics[productCategory[i][0]]
          .nameListCategory[productCategory[i][1]].characteristics;
    } else {
      break;
    }

    for (let idx = 0; idx < characteristics.length; idx++) {
      const filter = {
        title: characteristics[idx].name,
        query_name: characteristics[idx].query_name,
        show: true,
        checkboxList: [],
      };

      for (let index = 0; index < productCharacteristics[i].length; index++) {
        for (let j = 0; j < productCharacteristics[i][index][idx].length; j++) {
          let checkboxListItem = {
            name: characteristics[idx].select[
              productCharacteristics[i][index][idx][j]
            ],
            counter: 0,
            active: false,
          };

          filter.checkboxList.push(checkboxListItem);
        }
      }

      filters.push(filter);
    }
  }
  // =============================================================================================
  let filtersUnique = [];
  let characteristicsName = {};
  if (productCategory.length > 1) {
    //
    for (let idx = 0; idx < product.length; idx++) {
      for (const key in product[idx].characteristicsName) {
        if (characteristicsName.hasOwnProperty(key)) {
          characteristicsName[key]++;
        } else {
          characteristicsName[key] = 1;
        }
      }
    }

    let characteristicsNameString = [];
    for (const key in characteristicsName) {
      if (characteristicsName[key] < product.length) {
        delete characteristicsName[key];
      } else {
        characteristicsNameString.push(key);
      }
    }

    for (let idx = 0; idx < filters.length; idx++) {
      if (characteristicsNameString.indexOf(filters[idx].query_name) === -1) {
        filters.splice(idx, 1);
        idx--;
      }
    }

    let seen = {};
    filtersUnique = filters.filter((entry) => {
      let previous;

      if (seen.hasOwnProperty(entry.query_name)) {
        previous = seen[entry.query_name];
        previous.checkboxList.push(...entry.checkboxList);

        return false;
      }

      if (!Array.isArray(entry.checkboxList)) {
        entry.checkboxList = [...entry.checkboxList];
      }

      seen[entry.query_name] = entry;

      return true;
    });
  } else {
    filtersUnique = filters;
  }
  for (let i = 0; i < filtersUnique.length; i++) {
    let checkboxListUnique = [];

    while (filtersUnique[i].checkboxList.length > 0) {
      // console.log("while ", i + 1, "/", filtersUnique.length);

      let checkboxUnique = filtersUnique[i].checkboxList[0];
      filtersUnique[i].checkboxList.splice(0, 1);

      for (let idx = 0; idx < filtersUnique[i].checkboxList.length; idx++) {
        if (checkboxUnique.name === filtersUnique[i].checkboxList[idx].name) {
          checkboxUnique.counter++;
          filtersUnique[i].checkboxList.splice(idx, 1);
          idx--;
        }
      }
      checkboxListUnique.push(checkboxUnique);
    }

    filtersUnique[i].checkboxList = checkboxListUnique;
  }
  // =============================================================================================
  return { filters: filtersUnique };
  // =============================================================================================
}

function getQueryParams(reqQuery) {
  console.log("START getQueryParams");

  let queryParams = Object.assign({}, reqQuery);

  delete queryParams.search_text;
  delete queryParams.limit;
  delete queryParams.page;
  delete queryParams.type_sort;

  let queryParamsMongo = {};

  for (let param in queryParams) {
    queryParamsMongo["characteristicsName." + param] = {
      $in: queryParams[param].split(","),
    };
  }

  return queryParamsMongo;
}
