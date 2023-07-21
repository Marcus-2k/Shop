import { Injectable } from "@nestjs/common";
import { CATEGORY } from "src/shared/db/category";

import { Option } from "src/shared/interfaces/option";
import { MessageRes } from "src/shared/interfaces/res/message";

@Injectable()
export class CategoryService {
  constructor() {}

  public getCharacteristicsByCategory(category: string): Option[] | MessageRes {
    for (let index = 0; index < CATEGORY.length; index++) {
      for (let idx = 0; idx < CATEGORY[index].nameListCategory.length; idx++) {
        if (CATEGORY[index].nameListCategory[idx].characteristics) {
          if (
            CATEGORY[index].nameListCategory[idx].navigate_link === category &&
            CATEGORY[index].nameListCategory[idx].characteristics
          ) {
            return CATEGORY[index].nameListCategory[idx].characteristics;
          }
        } else {
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
              return CATEGORY[index].nameListCategory[idx].subNameListCategory[
                i
              ].characteristics;
            }
          }
        }
      }
    }

    return { message: "Розділ каталогу не існує" };
  }

  public getCategoryNumberByCategory(
    category: string
  ): [number, number] | [number, number, number] | MessageRes {
    for (let index = 0; index < CATEGORY.length; index++) {
      for (let idx = 0; idx < CATEGORY[index].nameListCategory.length; idx++) {
        if (CATEGORY[index].nameListCategory[idx].characteristics) {
          if (
            CATEGORY[index].nameListCategory[idx].navigate_link === category &&
            CATEGORY[index].nameListCategory[idx].characteristics
          ) {
            return [index, idx];
          }
        } else {
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
}
