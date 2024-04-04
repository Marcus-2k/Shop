import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, PipelineStage } from "mongoose";
import { Checkbox, Filter } from "../../shared/interfaces/filter";
import { LanguageShort } from "../../shared/interfaces/language/language";
import { Option } from "../../shared/interfaces/option";
import { MessageRes } from "../../shared/interfaces/res/message";
import { Product } from "../../shared/interfaces/schemas/Product";
import { ProductCharacteristics } from "../../shared/interfaces/schemas/product/product-characteristics";
import { CategoryService } from "../category/category.service";
import { QueryDto } from "./search.dto";
// import { writeFile } from "fs";
// import { option } from "../../shared/db/option";
// import { products as PRODUCTS } from "../../shared/db/products";

@Injectable()
export class SearchService {
  public constructor(
    @InjectModel("product") private readonly ProductModel: Model<Product>,
    private categoryService: CategoryService,
  ) {
    // this.test();
  }

  // public async test() {
  //   const products = JSON.parse(JSON.stringify(PRODUCTS));

  //   for (let idx = 0; idx < products.length; idx++) {
  //     const product = products[idx];

  //     for (const key in product.characteristicsName) {
  //       // operating_system_pc
  //       for (const k in option) {
  //         // Producer
  //         if (option[k].query_title === key) {
  //           for (let i = 0; i < product.characteristicsName[key].length; i++) {
  //             for (let l = 0; l < option[k].select.length; l++) {
  //               if (
  //                 option[k].select[l].name.ua ===
  //                 product.characteristicsName[key][i]
  //               ) {
  //                 product.characteristicsName[key][i] =
  //                   option[k].select[l].query_value;
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }

  //   writeFile("./products.json", JSON.stringify(products), (err) => {});
  // }

  public async search(...PipelineStage: PipelineStage[]): Promise<Product[]> {
    return await this.ProductModel.aggregate(PipelineStage);
  }

  public async countByQuery(
    ...PipelineStage: PipelineStage[]
  ): Promise<{ count: number }[]> {
    return await this.ProductModel.aggregate([
      ...PipelineStage,
      { $count: "count" },
    ]);
  }

  public createFilters(
    product: ProductCharacteristics[], // by (navigate_link or search_text)
    product_by_query: ProductCharacteristics[], // by (navigate_link or search_text) and select filter
    product_by_divided_query: ProductCharacteristics[][] | null, // by (navigate_link or search_text) and all filter without one filter

    count_query: number,
    query: QueryDto,

    type_catalog: 1 | 2 | null,
    language: LanguageShort,
  ): Filter[] | MessageRes {
    const category: string[] = [];

    for (let idx = 0; idx < product.length; idx++) {
      if (category.includes(product[idx].category) === false) {
        category.push(product[idx].category);
      }
    }

    let options!: Option[][] | MessageRes;

    if (category.length === 1) {
      options = JSON.parse(
        JSON.stringify(
          this.categoryService.getCharacteristicsByCategory(category[0]),
        ),
      );
    } else {
      options = JSON.parse(
        JSON.stringify(
          this.categoryService.getCharacteristicsByCategories(category),
        ),
      );
    }

    if (!Array.isArray(options)) {
      return options;
    }

    let characteristics!: Option[];

    if (type_catalog === 2 || type_catalog === null) {
      const count_of_category: number = Number(options.length);
      const count_of_duplicate: { [key: string]: number } = {};

      for (let idx = 0; idx < options.length; idx++) {
        for (let i = 0; i < options[idx].length; i++) {
          if (count_of_duplicate.hasOwnProperty(options[idx][i].query_title)) {
            count_of_duplicate[options[idx][i].query_title] += 1;
          } else {
            count_of_duplicate[options[idx][i].query_title] = 1;
          }
        }
      }

      for (let i = 0; i < options[0].length; i++) {
        if (
          count_of_duplicate[options[0][i].query_title] !== count_of_category
        ) {
          options[0].splice(i, 1);

          i -= 1;
        }
      }

      characteristics = options[0];
    } else {
      characteristics = options[0];
    }

    let position_select_filter: number = -1;
    let Filters: Filter[] = [];
    for (let index = 0; index < characteristics.length; index++) {
      const filter: Filter = {
        title: characteristics[index].name[language],
        query_title: characteristics[index].query_title,
        show: true,
        checkboxList: [],
      };

      if (
        query.hasOwnProperty(characteristics[index].query_title) &&
        position_select_filter === -1
      ) {
        position_select_filter = index;
      }

      for (let idx = 0; idx < product.length; idx++) {
        for (
          let i = 0;
          i <
          product[idx].characteristicsName[characteristics[index].query_title]
            .length;
          i++
        ) {
          for (let j = 0; j < characteristics[index].select.length; j++) {
            if (
              characteristics[index].select[j].query_value ===
              product[idx].characteristicsName[
                characteristics[index].query_title
              ][i]
            ) {
              let find_duplicate: boolean = false;

              for (let l = 0; l < filter.checkboxList.length; l++) {
                if (
                  filter.checkboxList[l].query_value ===
                  characteristics[index].select[j].query_value
                ) {
                  filter.checkboxList[l].counter += 1;

                  find_duplicate = true;

                  break;
                }
              }

              if (find_duplicate === false) {
                const checkbox: Checkbox = {
                  name: characteristics[index].select[j].name[language],
                  query_value: characteristics[index].select[j].query_value,
                  active: false,
                  counter: 0,
                };

                filter.checkboxList.push(checkbox);
              }

              break;
            }
          }
        }
      }

      Filters.push(filter);
    }

    if (count_query === 0) {
      return Filters;
    }

    let FiltersByQuery: Filter[] = [];
    for (let index = 0; index < characteristics.length; index++) {
      const FilterByQuery: Filter = {
        title: characteristics[index].name[language],
        query_title: characteristics[index].query_title,
        show: true,
        checkboxList: [],
      };

      for (let idx = 0; idx < product_by_query.length; idx++) {
        for (
          let i = 0;
          i <
          product_by_query[idx].characteristicsName[
            characteristics[index].query_title
          ].length;
          i++
        ) {
          for (let j = 0; j < characteristics[index].select.length; j++) {
            if (
              characteristics[index].select[j].query_value ===
              product_by_query[idx].characteristicsName[
                characteristics[index].query_title
              ][i]
            ) {
              let find_duplicate: boolean = false;

              for (let l = 0; l < FilterByQuery.checkboxList.length; l++) {
                if (
                  FilterByQuery.checkboxList[l].query_value ===
                  characteristics[index].select[j].query_value
                ) {
                  FilterByQuery.checkboxList[l].counter += 1;

                  find_duplicate = true;

                  break;
                }
              }

              if (find_duplicate === false) {
                const checkbox: Checkbox = {
                  name: characteristics[index].select[j].name[language],
                  query_value: characteristics[index].select[j].query_value,
                  active: false,
                  counter: 0,
                };

                FilterByQuery.checkboxList.push(checkbox);
              }

              break;
            }
          }
        }
      }

      FiltersByQuery.push(FilterByQuery);
    }

    [Filters, FiltersByQuery] = [FiltersByQuery, Filters];

    if (count_query === 1) {
      Filters[position_select_filter] = FiltersByQuery[position_select_filter];

      return Filters;
    } else {
      let FiltersByDividedQuery: Filter[][] = [];

      const position_select_filters: number[] = [];
      for (let k = 0; k < product_by_divided_query.length; k++) {
        const filters_divided: Filter[] = [];

        let findSelectBlock: boolean = false;

        for (let index = 0; index < characteristics.length; index++) {
          const FilterByDivided: Filter = {
            title: characteristics[index].name[language],
            query_title: characteristics[index].query_title,
            show: true,
            checkboxList: [],
          };

          if (
            query.hasOwnProperty(characteristics[index].query_title) &&
            !findSelectBlock &&
            position_select_filters.includes(index) === false
          ) {
            findSelectBlock = true;
            position_select_filters.push(index);
          }

          for (let idx = 0; idx < product_by_divided_query[k].length; idx++) {
            for (
              let i = 0;
              i <
              product_by_divided_query[k][idx].characteristicsName[
                characteristics[index].query_title
              ].length;
              i++
            ) {
              for (let j = 0; j < characteristics[index].select.length; j++) {
                if (
                  characteristics[index].select[j].query_value ===
                  product_by_divided_query[k][idx].characteristicsName[
                    characteristics[index].query_title
                  ][i]
                ) {
                  let find_duplicate: boolean = false;

                  for (
                    let l = 0;
                    l < FilterByDivided.checkboxList.length;
                    l++
                  ) {
                    if (
                      FilterByDivided.checkboxList[l].query_value ===
                      characteristics[index].select[j].query_value
                    ) {
                      FilterByDivided.checkboxList[l].counter += 1;

                      find_duplicate = true;

                      break;
                    }
                  }

                  if (find_duplicate === false) {
                    const checkbox: Checkbox = {
                      name: characteristics[index].select[j].name[language],
                      query_value: characteristics[index].select[j].query_value,
                      active: false,
                      counter: 0,
                    };

                    FilterByDivided.checkboxList.push(checkbox);
                  }

                  break;
                }
              }
            }
          }

          filters_divided.push(FilterByDivided);
        }

        FiltersByDividedQuery.push(filters_divided);
      }

      for (let idx = 0; idx < position_select_filters.length; idx++) {
        Filters[position_select_filters[idx]] =
          FiltersByDividedQuery[idx][position_select_filters[idx]];
      }

      return Filters;
    }
  }

  public createQueryParams(
    query: QueryDto,
  ):
    | [null, null, 0]
    | [PipelineStage, null, 1]
    | [PipelineStage, PipelineStage[], number] {
    const queryParams = Object.assign({}, query);

    delete queryParams.search_text;
    delete queryParams.limit;
    delete queryParams.page;
    delete queryParams.type_sort;

    const FilterQuery: PipelineStage = { $match: {} };

    let count = 0;
    for (let param in queryParams) {
      FilterQuery.$match["characteristicsName." + param] = {
        $in: queryParams[param].split(","),
      };

      count += 1;
    }

    const FilterQueryList: PipelineStage[] = [];
    const FilterQueryCLone: PipelineStage = {
      $match: JSON.parse(JSON.stringify(FilterQuery.$match)),
    };

    if (count > 1) {
      for (const key in FilterQueryCLone.$match) {
        const MongoQuery: PipelineStage = {
          $match: JSON.parse(JSON.stringify(FilterQuery.$match)),
        };

        delete MongoQuery.$match[key];

        FilterQueryList.push(MongoQuery);
      }
    }

    /* Return */
    if (count === 0) {
      return [null, null, 0];
    }
    if (count === 1) {
      return [FilterQuery, null, 1];
    }
    return [FilterQuery, FilterQueryList, count];
  }
}
