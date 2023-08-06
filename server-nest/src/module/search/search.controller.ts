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
import { PipelineStage } from "mongoose";

import { ParamDto, QueryDto } from "./search.dto";

import { SearchService } from "./search.service";
import { CategoryService } from "../category/category.service";

import { Product } from "src/shared/interfaces/schemas/Product";
import { Breadcrumbs } from "src/shared/interfaces/widget/breadcrumbs";
import { TypeSortNumber } from "src/shared/interfaces/type/sort/type-sort-number";
import { CatalogService } from "../catalog/catalog.service";
import { CategoryNumber } from "src/shared/interfaces/category-number";
import { MessageRes } from "src/shared/interfaces/res/message";
import {
  CatalogNameListCategory,
  CatalogSubNameListCategory,
} from "src/shared/interfaces/catalog";
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

  @Get([":navigate_link", ""])
  public async searchByLink(
    @Res() response: Response<any>,
    @Query() query: QueryDto,
    @Param() param: ParamDto,
  ): Promise<Response> {
    const search_text: string | undefined = query.search_text;
    const navigate_link: string | undefined = param.navigate_link;

    console.log("search_text = ", search_text);
    console.log("navigate_link = ", navigate_link);

    if (navigate_link === undefined && search_text === undefined) {
      return response.status(404).json({ message: "Invalid request" });
    }

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

    // Widgets =====================================================================================
    let widget_breadcrumbs: Breadcrumbs | undefined;
    let widget_autoPortal: CatalogSubNameListCategory[] | undefined;
    let widget_sectionId: undefined | CatalogNameListCategory[];
    // Widgets =====================================================================================

    // MongoDB Query ===============================================================================
    const FilterQuery: PipelineStage[] = [];

    // MongoDB Query ===============================================================================

    let product!: Product[];

    let productCharacteristics!: ProductCharacteristics[];

    let typeCatalog:
      | { type: 1 }
      | { category: string[]; type: 2 }
      | string
      | null = null;

    /**
     * if navigate link >>> string
     * else search_text >>> string
     */
    if (navigate_link) {
      /**
       * NAVIGATE LING ====================================================================================================
       */

      typeCatalog =
        this.categoryService.getTypeCatalogByCategory(navigate_link);
      if (typeof typeCatalog === "string") {
        return response.status(400).json({ message: typeCatalog });
      }

      /**
       * Category Number >>> [number, number] | [number, number, number];
       */
      const categoryNumber: CategoryNumber | MessageRes =
        this.categoryService.getCategoryNumberByCategory(navigate_link);
      if (!Array.isArray(categoryNumber)) {
        return response.status(400).json({ message: categoryNumber.message });
      }

      if (typeCatalog.type === 1) {
        FilterQuery.unshift({
          $match: { category: navigate_link },
        });
      } else {
        FilterQuery.unshift({
          $match: { category: { $in: typeCatalog.category } },
        });

        widget_autoPortal =
          this.catalogService.createWidgetAutoPortal(categoryNumber);
      }

      productCharacteristics = await this.service.search(...FilterQuery, {
        $project: {
          category: true,
          characteristics: true,
          characteristicsName: true,
        },
      });

      widget_breadcrumbs =
        this.catalogService.createWidgetBreadcrumbs(categoryNumber);
    } else {
      /**
       * SEARCH TEXT   ====================================================================================================
       */

      FilterQuery.unshift({
        $match: { name: { $regex: search_text, $options: "i" } },
      });

      productCharacteristics = await this.service.search(...FilterQuery, {
        $project: {
          category: true,
          characteristics: true,
          characteristicsName: true,
        },
      });

      const category: string[] = [];
      for (let idx = 0; idx < productCharacteristics.length; idx++) {
        category.push(productCharacteristics[idx].category);
      }

      const sectionId: CatalogNameListCategory[] | MessageRes =
        this.catalogService.createWidgetSectionId(category);
      if (!Array.isArray(sectionId)) {
        return response.status(404).json({ message: "Invalid request" });
      }
      widget_sectionId = sectionId;
    }

    // Filters =====================================================================================
    const filters: Filter[] | MessageRes = this.service.createFilters(
      productCharacteristics,
      typeCatalog !== null && typeof typeCatalog !== "string"
        ? typeCatalog.type
        : null,
      language,
    );

    if ("message" in filters) {
      return response.status(400).json({ message: filters.message });
    }
    // Filters =====================================================================================

    // MongoDB Query ===============================================================================
    const MongoQueryFromQueryDto: PipelineStage | null =
      this.service.createQueryParams(query);
    if (MongoQueryFromQueryDto) {
      FilterQuery.unshift(MongoQueryFromQueryDto);
    }

    if (type_sort === 0) {
      // Сheap
      FilterQuery.unshift(
        { $addFields: { sortPrice: { $ifNull: ["$actionPrice", "$price"] } } },
        { $sort: { sortPrice: 1 } },
      );
    }
    if (type_sort === 1) {
      // Expensive
      FilterQuery.unshift(
        { $addFields: { sortPrice: { $ifNull: ["$actionPrice", "$price"] } } },
        { $sort: { sortPrice: -1 } },
      );
    }
    if (type_sort === 2) {
      // Popularity <Disabled Client>
    }
    if (type_sort === 3) {
      // Novelty <Disabled Client>
    }
    if (type_sort === 4) {
      // Action
      FilterQuery.unshift({ $sort: { actionPrice: -1 } });
    }
    if (type_sort === 5) {
      // Grade (default)
    }

    // MongoDB Query ===============================================================================

    // RESULT Pagination ===========================================================================
    const countBySearch: { count: number }[] = await this.service.countBySearch(
      ...FilterQuery,
    );
    count = countBySearch[0].count;
    maxPage = Math.ceil(count / limit);

    if (limit === maxPage * limit) {
      currentPage = 1;
    }
    // RESULT Pagination ===========================================================================

    // FIND RESULT =================================================================================
    product = await this.service.search(
      ...FilterQuery,
      { $skip: (currentPage - 1) * limit },
      { $limit: limit },
    );
    // FIND RESULT =================================================================================

    return response.status(200).json({
      product,
      filters,
      widget_auto_portal: widget_autoPortal,
      widget_section_id: widget_sectionId,
      widget_breadcrumbs,
      number_of_product: count,
      currentPage,
      maxPage,
      limit,
    });
  }
}
