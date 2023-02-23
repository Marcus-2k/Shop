const Catalog = require("../db/catalog");

class SearchService {
  async searchCategoryByParams(params) {
    try {
      if (params) {
        if (params.hasOwnProperty("navigate_link")) {
          let categoryList = [];
          let type = 0;

          for (let i = 0; i < Catalog.categoryList.length; i++) {
            for (
              let idx = 0;
              idx < Catalog.categoryList[i].nameListCategory.length;
              idx++
            ) {
              if (
                Catalog.categoryList[i].nameListCategory[idx].navigate_link ===
                params["navigate_link"]
              ) {
                console.log(i, " + ", idx);
                type = Catalog.categoryList[i].nameListCategory[idx].type;
                if (type === 1) {
                  categoryList.push([i, idx]);
                } else if (type === 2) {
                  for (
                    let index = 0;
                    index <
                    Catalog.categoryList[i].nameListCategory[idx]
                      .subNameListCategory.length;
                    index++
                  ) {
                    categoryList.push([i, idx, index]);
                  }
                }
                break;
              }

              if (
                Catalog.categoryList[i].nameListCategory[idx]
                  .subNameListCategory !== undefined
              ) {
                for (
                  let index = 0;
                  index <
                  Catalog.categoryList[i].nameListCategory[idx]
                    .subNameListCategory.length;
                  index++
                ) {
                  if (
                    Catalog.categoryList[i].nameListCategory[idx]
                      .subNameListCategory[index].navigate_link ===
                    params["navigate_link"]
                  ) {
                    // console.log(i, " + ", idx, " + ", index);
                    categoryList.push([i, idx, index]);
                    type =
                      Catalog.categoryList[i].nameListCategory[idx]
                        .subNameListCategory[index].type;
                    break;
                  }
                }
              }
            }
          }

          return { categoryList, type };
          /**
           * {categoryList: [ [ 0, 0,] ], type: 1}
           * or
           * {categoryList: [ [ 0, 4, 0 ], [ 0, 4, 1 ], ...], type: 2}
           */
        } else {
          return { categoryList: null, type: null };
        }
      } else {
        return { categoryList: null, type: null };
      }
    } catch (error) {
      return { categoryList: null, type: null };
    }
  }
}

module.exports = new SearchService();
