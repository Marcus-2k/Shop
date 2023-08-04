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
  ) {}

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
    category: string,
    product: ProductCharacteristics[],
    type_catalog: 1 | 2,
    language: LanguageShort,
  ): Filter[] | MessageRes {
    const characteristics: Option[] | MessageRes =
      this.categoryService.getCharacteristicsByCategory(category);
    if (!Array.isArray(characteristics)) {
      return characteristics;
    }

    if (type_catalog === 2) {
      // removed duplicate characteristics
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
        for (let i = 0; i < product[idx].characteristics[index].length; i++) {
          let find_duplicate: boolean = false;

          for (let j = 0; j < filter.checkboxList.length; j++) {
            if (
              filter.checkboxList[j].query_value ===
              characteristics[index].select[
                product[idx].characteristics[index][i]
              ].query_value
            ) {
              filter.checkboxList[j].counter += 1;

              find_duplicate = true;

              break;
            }
          }

          if (find_duplicate === false) {
            const checkbox: Checkbox = {
              name: characteristics[index].select[
                product[idx].characteristics[index][i]
              ].name[language],

              query_value:
                characteristics[index].select[
                  product[idx].characteristics[index][i]
                ].query_value,

              active: false,
              counter: 0,
            };

            filter.checkboxList.push(checkbox);
          }
        }
      }

      filters.push(filter);
    }

    return filters;
  }
}
