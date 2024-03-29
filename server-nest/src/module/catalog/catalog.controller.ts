import {
  Controller,
  Get,
  Res,
  Param,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Response } from "express";
import { CATALOG } from "src/shared/db/catalog";
import { GetCatalogSectionDto } from "./catalog.dto";

/* Interface */
import { Catalog } from "src/shared/interfaces/catalog";
import { Breadcrumbs } from "src/shared/interfaces/widget/breadcrumbs";
import { MessageRes } from "src/shared/interfaces/res/message";

@Controller("catalog")
/* Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
export class CatalogController {
  @Get()
  public async getCatalog(
    @Res() response: Response<Catalog[]>,
  ): Promise<Response<Catalog[]>> {
    return response.status(200).json(CATALOG);
  }

  @Get("home")
  public async getCatalogHome(
    @Res() response: Response<Catalog[]>,
  ): Promise<Response> {
    let sidebar_list = [];

    for (let idx = 0; idx < CATALOG.length; idx++) {
      sidebar_list.push({
        nameCategory: CATALOG[idx].nameCategory,
        nameCategoryImg: CATALOG[idx].nameCategoryImg,
        navigate_link: CATALOG[idx].navigate_link,
      });
    }

    return response.status(200).json(sidebar_list);
  }

  @Get(":navigate_link")
  public async getCatalogSection(
    @Res()
    response: Response<
      { widget_breadcrumbs: Breadcrumbs; catalog_section: Catalog } | MessageRes
    >,
    @Param() param: GetCatalogSectionDto,
  ): Promise<Response> {
    const CLONE_CATALOG: Catalog[] = JSON.parse(JSON.stringify(CATALOG));

    for (let idx = 0; idx < CLONE_CATALOG.length; idx++) {
      if (CLONE_CATALOG[idx].navigate_link === param.navigate_link) {
        const widget_breadcrumbs: Breadcrumbs = {
          first: {
            name: CLONE_CATALOG[idx].nameCategory,
            link: CLONE_CATALOG[idx].navigate_link,
          },
          second: undefined,
          third: undefined,
          location: undefined,
        };

        return response.status(200).json({
          widget_breadcrumbs,
          catalog_section: CLONE_CATALOG[idx],
        });
      }
    }

    return response.status(404).json({ message: "Розділ каталогу не існує" });
  }
}
