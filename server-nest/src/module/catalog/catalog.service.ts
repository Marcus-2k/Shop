import { Injectable } from "@nestjs/common";
import { CATALOG } from "src/shared/db/catalog";
import {
  CatalogNameListCategory,
  CatalogSubNameListCategory,
} from "src/shared/interfaces/catalog";
import { CategoryNumber } from "src/shared/interfaces/category-number";
import { Breadcrumbs } from "src/shared/interfaces/widget/breadcrumbs";
import { CategoryService } from "../category/category.service";
import { MessageRes } from "src/shared/interfaces/res/message";

@Injectable()
export class CatalogService {
  public constructor(private readonly categoryService: CategoryService) {}

  public createWidgetBreadcrumbs(categoryNumber: CategoryNumber): Breadcrumbs {
    const widget: Breadcrumbs = {
      first: {
        name: CATALOG[categoryNumber[0]].nameCategory,
        link: CATALOG[categoryNumber[0]].navigate_link,
      },
      second: {
        name: CATALOG[categoryNumber[0]].nameListCategory[categoryNumber[1]]
          .subNameCategory,
        link: CATALOG[categoryNumber[0]].nameListCategory[categoryNumber[1]]
          .navigate_link,
      },
      third: undefined,
      location: undefined,
    };

    if (categoryNumber.length === 3) {
      widget.third = {
        name: CATALOG[categoryNumber[0]].nameListCategory[categoryNumber[1]]
          .subNameListCategory[categoryNumber[2]].titleSubNameListCategory,
        link: CATALOG[categoryNumber[0]].nameListCategory[categoryNumber[1]]
          .subNameListCategory[categoryNumber[2]].navigate_link,
      };
    }

    return widget;
  }

  public createWidgetAutoPortal(
    categoryNumber: CategoryNumber,
  ): CatalogSubNameListCategory[] {
    const widget: CatalogSubNameListCategory[] =
      CATALOG[categoryNumber[0]].nameListCategory[categoryNumber[1]]
        .subNameListCategory;

    return widget;
  }

  public createWidgetSectionId(
    category: string[],
  ): CatalogNameListCategory[] | MessageRes {
    const categoryNumber: CategoryNumber[] = [];
    for (let idx = 0; idx < category.length; idx++) {
      const result: CategoryNumber | MessageRes =
        this.categoryService.getCategoryNumberByCategory(category[idx]);

      if (!Array.isArray(result)) {
        return result;
      }

      categoryNumber.push(result);
    }

    const sectionId: CatalogNameListCategory[] = [];
    for (let idx = 0; idx < categoryNumber.length; idx++) {
      const element: CategoryNumber = categoryNumber[idx];

      if (element.length === 3) {
        const section: CatalogNameListCategory = JSON.parse(
          JSON.stringify(CATALOG[element[0]].nameListCategory[element[1]]),
        );

        section.subNameListCategory = [
          JSON.parse(
            JSON.stringify(
              CATALOG[element[0]].nameListCategory[element[1]]
                .subNameListCategory[element[2]],
            ),
          ),
        ];

        let position_duplicate!: number;
        let find_duplicate: boolean = false;
        for (let idx = 0; idx < sectionId.length; idx++) {
          if (sectionId[idx].navigate_link === section.navigate_link) {
            find_duplicate = true;
            position_duplicate = Number(idx);
            break;
          }
        }

        if (find_duplicate) {
          sectionId[position_duplicate].subNameListCategory.push(
            ...section.subNameListCategory,
          );

          sectionId[position_duplicate].subNameListCategory = sectionId[
            position_duplicate
          ].subNameListCategory.filter((value, idx, array) => {
            return (
              array.findIndex(
                (item) =>
                  item.titleSubNameListCategory ===
                  value.titleSubNameListCategory,
              ) === idx
            );
          });
        } else {
          sectionId.push(section);
        }
      } else {
        const section: CatalogNameListCategory = JSON.parse(
          JSON.stringify(CATALOG[element[0]].nameListCategory[element[1]]),
        );

        delete section.subNameListCategory;

        let find_duplicate: boolean = false;
        for (let idx = 0; idx < sectionId.length; idx++) {
          if (sectionId[idx].navigate_link === section.navigate_link) {
            find_duplicate = true;
            break;
          }
        }

        if (!find_duplicate) {
          sectionId.push(section);
        }
      }
    }

    return sectionId;
  }
}
