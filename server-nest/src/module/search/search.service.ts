import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery, ProjectionType, QueryOptions } from "mongoose";

import { Product } from "src/shared/interfaces/schemas/Product";

import { CategoryService } from "../category/category.service";

import { Option } from "src/shared/interfaces/option";
import { Checkbox, Filter } from "src/shared/interfaces/filter";
import { MessageRes } from "src/shared/interfaces/res/message";
import { ProductCharacteristics } from "src/shared/interfaces/schemas/product/product-characteristics";
import { LanguageShort } from "src/shared/interfaces/language/language";

@Injectable()
export class SearchService {
  public constructor(
    @InjectModel("product") private readonly ProductModel: Model<Product>,
    private categoryService: CategoryService,
  ) {
    // this.test();
  }

  async test() {
    const product = await this.ProductModel.find();

    // console.log("product = ", product.characteristicsName);

    for (let index = 0; index < product.length; index++) {
      let characteristics: Option[] =
        this.categoryService.getCharacteristicsByCategory(
          product[index].category,
        )[0];

      const obj = {};
      for (let idx = 0; idx < characteristics.length; idx++) {
        obj[characteristics[idx].query_title] = [];

        for (let i = 0; i < product[index].characteristics[idx].length; i++) {
          obj[characteristics[idx].query_title].push(
            characteristics[idx].select[product[index].characteristics[idx][i]]
              .query_value,
          );
        }
      }
      console.log("before = ", product[index].characteristicsName);
      console.log("after = ", obj);

      const result = await this.ProductModel.updateOne(
        { _id: product[index]._id },
        { characteristicsName: obj },
      );

      console.log("result = ", result);
    }
  }

  public async search(
    filter: FilterQuery<Product>,
    projection?: ProjectionType<Product> | null | undefined,
    options?: QueryOptions<Product> | null | undefined,
  ): Promise<Product[]> {
    return await this.ProductModel.find(filter, projection, options);
  }

  public async countBySearch(filter: FilterQuery<Product>): Promise<any> {
    return await this.ProductModel.count(filter);
  }

  public createFilters(
    product: ProductCharacteristics[],
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

    const filters: Filter[] = [];
    for (let index = 0; index < characteristics.length; index++) {
      const filter: Filter = {
        title: characteristics[index].name[language],
        query_title: characteristics[index].query_title,
        show: true,
        checkboxList: [],
      };

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
      filters.push(filter);
    }

    return filters;
  }
}
