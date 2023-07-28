import {
  Controller,
  UsePipes,
  ValidationPipe,
  Get,
  Query,
  Res,
  Param,
} from "@nestjs/common";
import { Response } from "express";
import { FilterQuery, ProjectionType, QueryOptions } from "mongoose";

import { SearchByLinkDto, SearchByTextDto, SearchQueryDto } from "./search.dto";

import { SearchService } from "./search.service";
import { CategoryService } from "../category/category.service";

import { Product } from "src/shared/interfaces/schemas/Product";
import { Breadcrumbs } from "src/shared/interfaces/widget/breadcrumbs";
import { TypeSortNumber } from "src/shared/interfaces/type/sort/type-sort-number";
import { CatalogService } from "../catalog/catalog.service";
import { CategoryNumber } from "src/shared/interfaces/category-number";
import { MessageRes } from "src/shared/interfaces/res/message";
import { CatalogSubNameListCategory } from "src/shared/interfaces/catalog";
import { Filter } from "src/shared/interfaces/filter";
import { ProductCharacteristics } from "src/shared/interfaces/schemas/product/product-characteristics";
import { LanguageShort } from "src/shared/interfaces/language/language";

@Controller("search")
/** Pipes */
@UsePipes(new ValidationPipe({ transform: true }))
export class SearchController {
  public constructor(
    private service: SearchService,
    private categoryService: CategoryService,
    private catalogService: CatalogService,
  ) {}

  @Get()
  public async searchByText(
    @Res() response: Response<any>,
    @Query() query: SearchByTextDto,
  ): Promise<Response> {
    return response.status(200).json({ query });
  }

  @Get(":navigate_link")
  public async searchByLink(
    @Res() response: Response<any>,
    @Query() query: SearchQueryDto,
    @Param() param: SearchByLinkDto,
  ): Promise<Response> {
    const navigate_link: string = param.navigate_link;
    const language: LanguageShort = "en";

    // Pagination START ============================================================================
    const limit: number = query.limit;

    let currentPage = query.page;

    let count!: number;
    let maxPage!: number;
    // Pagination END ==============================================================================

    // Search Query ================================================================================
    const type_sort: TypeSortNumber = query.type_sort;
    // Search Query ================================================================================

    const typeCatalog: { type: 1 } | { category: string[]; type: 2 } | string =
      this.categoryService.getTypeCatalogByCategory(navigate_link);

    if (typeof typeCatalog === "string") {
      return response.status(400).json({ message: typeCatalog });
    }

    const categoryNumber: CategoryNumber | MessageRes =
      this.categoryService.getCategoryNumberByCategory(navigate_link);
    if (!Array.isArray(categoryNumber)) {
      return response.status(400).json({ message: categoryNumber.message });
    }

    // Widgets ===============================================================
    let widget_auto_portal: CatalogSubNameListCategory[] | undefined;

    let widget_section_id: any;

    const widget_breadcrumbs: Breadcrumbs =
      this.catalogService.createWidgetBreadcrumbs(categoryNumber);
    // Widgets ===============================================================

    // MongoDB Query =========================================================
    const FilterQuery: FilterQuery<Product> = {};
    const Projection: ProjectionType<Product> = {};
    const Options: QueryOptions<Product> = {
      limit: limit,
      skip: (currentPage - 1) * limit,
    };

    if (typeCatalog.type === 1) {
      FilterQuery.category = navigate_link;
    } else {
      FilterQuery.category = { $in: typeCatalog.category };

      widget_auto_portal =
        this.catalogService.createWidgetAutoPortal(categoryNumber);
    }
    // MongoDB Query =========================================================

    const product: Product[] = await this.service.search(
      FilterQuery,
      Projection,
      Options,
    );

    // Filters ===============================================================
    const productCharacteristics: ProductCharacteristics[] =
      await this.service.search(FilterQuery, {
        characteristics: true,
        characteristicsName: true,
      });
    const filters: Filter[] | MessageRes = this.service.createFilters(
      navigate_link,
      productCharacteristics,
      typeCatalog.type,
      language,
    );

    if ("message" in filters) {
      return response.status(400).json({ message: filters.message });
    }
    // Filters ===============================================================

    // Pagination ============================================================
    count = await this.service.countBySearch(FilterQuery);
    maxPage = Math.ceil(count / limit);
    // Pagination ============================================================

    if (limit === maxPage * limit) {
      currentPage = 1;
    }

    return response.status(200).json({
      product,
      filters,
      widget_auto_portal,
      widget_section_id,
      widget_breadcrumbs,
      number_of_product: count,
      currentPage,
      maxPage,
      limit,
    });
  }
}
