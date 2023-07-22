import { Injectable } from "@nestjs/common";
import { CATALOG } from "src/shared/db/catalog";
import { Catalog } from "src/shared/interfaces/catalog";
import { CategoryNumber } from "src/shared/interfaces/category-number";
import { Breadcrumbs } from "src/shared/interfaces/widget/breadcrumbs";

@Injectable()
export class CatalogService {
  public constructor() {}

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
  public createWidgetAutoPortal(categoryNumber: CategoryNumber) {
    const widget =
      CATALOG[categoryNumber[0]].nameListCategory[categoryNumber[1]]
        .subNameListCategory;

    return widget;
  }
}
