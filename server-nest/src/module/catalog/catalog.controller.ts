import {
  Controller,
  Get,
  Res,
  Param,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from "@nestjs/common";
import { Response } from "express";
import { CATALOG } from "src/shared/db/catalog";
import { GetCatalogSectionDto } from "./catalog.dto";

/** Interface */
import { Catalog } from "src/shared/interfaces/catalog";
import { Breadcrumbs } from "src/shared/interfaces/breadcrumbs";
import { MessageRes } from "src/shared/interfaces/res/message";
import { CatalogSection } from "./catalog.interface.response";
import { JwtAuthGuard } from "src/shared/guards/jwt.guard";

@Controller("catalog")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
export class CatalogController {
  @Get()
  async getCatalog(
    @Res() response: Response<Catalog[]>
  ): Promise<Response<Catalog[]>> {
    return response.status(200).json(CATALOG);
  }

  @Get("home")
  async getCatalogHome(
    @Res() response: Response<Catalog[]>
  ): Promise<Response<Catalog[]>> {
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
  async getCatalogSection(
    @Res() response: Response<CatalogSection | MessageRes>,
    @Param() param: GetCatalogSectionDto
  ): Promise<Response<CatalogSection | MessageRes>> {
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
