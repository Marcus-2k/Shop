import { Injectable } from "@nestjs/common";
import { CATALOG } from "src/shared/db/catalog";
import { CATEGORY } from "src/shared/db/category";
import { CategoryNumber } from "src/shared/interfaces/category-number";

import { Option } from "src/shared/interfaces/option";
import { MessageRes } from "src/shared/interfaces/res/message";

@Injectable()
export class CategoryService {
  public constructor() {}

  public getCharacteristicsByCategory(
    category: string,
  ): Option[][] | MessageRes {
    for (let index = 0; index < CATEGORY.length; index++) {
      for (let idx = 0; idx < CATEGORY[index].nameListCategory.length; idx++) {
        if (CATEGORY[index].nameListCategory[idx].navigate_link === category) {
          if (CATEGORY[index].nameListCategory[idx].characteristics) {
            return [CATEGORY[index].nameListCategory[idx].characteristics];
          } else {
            const characteristics: Option[][] = [];

            for (
              let l = 0;
              l <
              CATEGORY[index].nameListCategory[idx].subNameListCategory.length;
              l++
            ) {
              characteristics.push(
                CATEGORY[index].nameListCategory[idx].subNameListCategory[l]
                  .characteristics,
              );
            }

            return characteristics;
          }
        } else if (CATEGORY[index].nameListCategory[idx].subNameListCategory) {
          for (
            let i = 0;
            i <
            CATEGORY[index].nameListCategory[idx].subNameListCategory.length;
            i++
          ) {
            if (
              CATEGORY[index].nameListCategory[idx].subNameListCategory[i]
                .navigate_link === category
            ) {
              return [
                CATEGORY[index].nameListCategory[idx].subNameListCategory[i]
                  .characteristics,
              ];
            }
          }
        }
      }
    }

    return { message: "Розділ каталогу не існує" };
  }

  public getCategoryNumberByCategory(
    category: string,
  ): CategoryNumber | MessageRes {
    for (let index = 0; index < CATEGORY.length; index++) {
      for (let idx = 0; idx < CATEGORY[index].nameListCategory.length; idx++) {
        if (CATEGORY[index].nameListCategory[idx].navigate_link === category) {
          return [index, idx];
        }

        if (!CATEGORY[index].nameListCategory[idx].characteristics) {
          for (
            let i = 0;
            i <
            CATEGORY[index].nameListCategory[idx].subNameListCategory.length;
            i++
          ) {
            if (
              CATEGORY[index].nameListCategory[idx].subNameListCategory[i]
                .navigate_link === category
            ) {
              return [index, idx, i];
            }
          }
        }
      }
    }

    return { message: "Розділ каталогу не існує" };
  }

  public getTypeCatalogByCategory(
    category: string,
  ): { type: 1 } | { category: string[]; type: 2 } | string {
    for (let index = 0; index < CATALOG.length; index++) {
      for (let idx = 0; idx < CATALOG[index].nameListCategory.length; idx++) {
        if (CATALOG[index].nameListCategory[idx].type === 1) {
          if (CATALOG[index].nameListCategory[idx].navigate_link === category) {
            return { type: 1 };
          }
        } else {
          if (CATALOG[index].nameListCategory[idx].navigate_link === category) {
            const categoryList: string[] = [];

            for (
              let i = 0;
              i <
              CATALOG[index].nameListCategory[idx].subNameListCategory.length;
              i++
            ) {
              categoryList.push(
                CATALOG[index].nameListCategory[idx].subNameListCategory[i]
                  .navigate_link,
              );
            }

            return {
              type: 2,
              category: categoryList,
            };
          } else {
            for (
              let i = 0;
              i <
              CATALOG[index].nameListCategory[idx].subNameListCategory.length;
              i++
            ) {
              if (
                CATALOG[index].nameListCategory[idx].subNameListCategory[i]
                  .navigate_link === category
              ) {
                return { type: 1 };
              }
            }
          }
        }
      }
    }

    return "Розділ каталогу не існує";
  }
}
