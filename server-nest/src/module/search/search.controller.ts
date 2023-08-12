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
/* DTO */
import { ParamDto, QueryDto } from "./search.dto";
/* Service */
import { SearchService } from "./search.service";
import { CatalogService } from "../catalog/catalog.service";
import { CategoryService } from "../category/category.service";
/* Interface */
import { Product } from "src/shared/interfaces/schemas/Product";
import { Breadcrumbs } from "src/shared/interfaces/widget/breadcrumbs";
import { TypeSortNumber } from "src/shared/interfaces/type/sort/type-sort-number";
import { CategoryNumber } from "src/shared/interfaces/category-number";
import { MessageRes } from "src/shared/interfaces/res/message";
import {
  CatalogNameListCategory,
  CatalogSubNameListCategory,
} from "src/shared/interfaces/catalog";
import { Filter } from "src/shared/interfaces/filter";
import { ProductCharacteristics } from "src/shared/interfaces/schemas/product/product-characteristics";
import { LanguageShort } from "src/shared/interfaces/language/language";
import { SearchRes } from "src/shared/interfaces/res/search";

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
    @Res() response: Response<SearchRes | MessageRes>,
    @Query() query: QueryDto,
    @Param() param: ParamDto,
  ): Promise<Response> {
    const search_text: string | undefined = query.search_text;
    const navigate_link: string | undefined = param.navigate_link;

    if (navigate_link === undefined && search_text === undefined) {
      return response.status(404).json({ message: "Invalid request" });
    }

    const language: LanguageShort = "en";

    // Pagination START ============================================================================
    const limit: number = query.limit;

    let currentPage: number = query.page;

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
    const Project: PipelineStage = {
      $project: {
        category: true,
        characteristics: true,
        characteristicsName: true,
      },
    };

    // MongoDB Query ===============================================================================

    let product!: Product[];

    let product_characteristics!: ProductCharacteristics[];

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

      product_characteristics = await this.service.search(
        ...FilterQuery,
        Project,
      );

      widget_breadcrumbs =
        this.catalogService.createWidgetBreadcrumbs(categoryNumber);
    } else {
      /**
       * SEARCH TEXT   ====================================================================================================
       */

      FilterQuery.unshift({
        $match: { name: { $regex: search_text, $options: "i" } },
      });

      product_characteristics = await this.service.search(
        ...FilterQuery,
        Project,
      );

      const category: string[] = [];
      for (let idx = 0; idx < product_characteristics.length; idx++) {
        category.push(product_characteristics[idx].category);
      }

      const sectionId: CatalogNameListCategory[] | MessageRes =
        this.catalogService.createWidgetSectionId(category);
      if (!Array.isArray(sectionId)) {
        return response.status(404).json({ message: "Invalid request" });
      }
      widget_sectionId = sectionId;
    }

    // MongoDB Query ===============================================================================
    const [MongoQuery, MongoQueryList, count_query]:
      | [null, null, 0]
      | [PipelineStage, null, 1]
      | [PipelineStage, PipelineStage[], number] =
      this.service.createQueryParams(query);
    if (MongoQuery) {
      FilterQuery.unshift(MongoQuery);
    }

    const product_by_query: Product[] = await this.service.search(
      ...FilterQuery,
      Project,
    );

    let product_by_divided_query: Product[][] | null;

    if (count_query > 1 && MongoQueryList) {
      const promises: Promise<Product[]>[] = MongoQueryList.map(
        (pipeline) => this.service.search(pipeline),
        //.catch(err => [])
      );
      product_by_divided_query = await Promise.all(promises);
    }

    // Filters =====================================================================================
    const filters: Filter[] | MessageRes = this.service.createFilters(
      product_characteristics,
      product_by_query,
      product_by_divided_query,
      count_query,
      query,
      typeCatalog !== null && typeof typeCatalog !== "string"
        ? typeCatalog.type
        : null,
      language,
    );

    if ("message" in filters) {
      return response.status(400).json({ message: filters.message });
    }
    // Filters =====================================================================================

    if (type_sort === 0) {
      // Сheap
      FilterQuery.unshift(
        { $addFields: { sortPrice: { $ifNull: ["$actionPrice", "$price"] } } },
        { $sort: { sortPrice: 1 } },
      );
    } else if (type_sort === 1) {
      // Expensive
      FilterQuery.unshift(
        { $addFields: { sortPrice: { $ifNull: ["$actionPrice", "$price"] } } },
        { $sort: { sortPrice: -1 } },
      );
    } else if (type_sort === 2) {
      // Popularity <Disabled Client>
    } else if (type_sort === 3) {
      // Novelty <Disabled Client>
    } else if (type_sort === 4) {
      // Action
      FilterQuery.unshift({ $sort: { actionPrice: -1 } });
    } else if (type_sort === 5) {
      // Grade (default)
    }
    // MongoDB Query ===============================================================================

    // FIND RESULT =================================================================================
    // Pagination ==================================================================================
    const countByQuery: { count: number }[] = await this.service.countByQuery(
      ...FilterQuery,
    );
    if (countByQuery.length === 0) {
      count = 0;
    } else {
      count = countByQuery[0].count;
    }
    maxPage = Math.ceil(count / limit);

    if (limit === maxPage * limit) {
      currentPage = 1;
    }

    // Pagination ==================================================================================
    // PRODUCT =====================================================================================
    product = await this.service.search(
      ...FilterQuery,
      { $skip: (currentPage - 1) * limit },
      { $limit: limit },
    );
    // PRODUCT =====================================================================================
    // FIND RESULT =================================================================================

    return response.status(200).json({
      product,
      filters,
      widget_breadcrumbs,

      widget_auto_portal: widget_autoPortal,
      widget_section_id: widget_sectionId,

      number_of_product: count,
      currentPage,
      maxPage,
      limit,
    });
  }
}
