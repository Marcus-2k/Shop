import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { ActivatedRoute, Params, Router } from "@angular/router";

import {
  Product,
  Filter,
  WidgetAutoPortal,
  WidgetSectionId,
} from "src/app/shared/interface/interfaces";
import { Widget_Breadcrumbs } from "src/app/shared/interface/card/card.interfaces";

import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestSearchService } from "src/app/shared/service/server/request-search.service";
import { OpenSnackBarService } from "src/app/shared/service/open-snack-bar.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: RequestSearchService,
    private showNotice: OpenSnackBarService,
    private renameTitle: RenameTitleService
  ) {}

  ngOnInit() {
    console.log("Start ngOnInit Search");

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.search_text = queryParams["search_text"];

      Object.assign(this.queryParams, queryParams);
    });

    this.route.params.subscribe((params: Params) => {
      Object.assign(this.params, params);
    });

    // Checking the correctness of data START ========================================================
    // limit
    if (this.queryParams["limit"]) {
      if (isNaN(Number(this.queryParams["limit"]))) {
        // console.log("Not A Number");
        this.limit = 10;
        this.queryParams["limit"] = 10;
      } else if (
        this.pageSizeOptions.indexOf(Number(this.queryParams["limit"])) === -1
      ) {
        // console.log("is equal to 10 or 25 or 50 or 100");
        this.limit = 10;
        this.queryParams["limit"] = 10;
      } else {
        // console.log("correct value");
        this.limit = Number(this.queryParams["limit"]);
      }
    } else {
      // console.log("undefined value");
      this.limit = 10;
      this.queryParams["limit"] = 10;
    }

    // page
    if (this.queryParams["page"]) {
      if (isNaN(Number(this.queryParams["page"]))) {
        // console.log("Not A Number");
        this.currentPage = 1;
        this.queryParams["page"] = 1;
      } else if (Number(this.queryParams["page"]) < 1) {
        // console.log("less than 1");
        this.currentPage = 1;
        this.queryParams["page"] = 1;
      } else {
        // console.log("correct value");
        this.currentPage = Number(this.queryParams["page"]);
      }
    } else {
      // console.log("undefined value");
      this.currentPage = 1;
      this.queryParams["page"] = 1;
    }

    // type_sort
    if (this.queryParams["type_sort"]) {
      if (isNaN(Number(this.queryParams["type_sort"]))) {
        // console.log("Not A Number");
        this.type_sort = 5;
        this.queryParams["type_sort"] = 5;
      } else if (
        Number(this.queryParams["type_sort"]) > 5 ||
        Number(this.queryParams["type_sort"]) < 0 ||
        Number(this.queryParams["type_sort"]) === 2 ||
        Number(this.queryParams["type_sort"]) === 3
      ) {
        // only 0, 1, 4, 5 | 2, 3 disabled
        // console.log("more than 5 or less than 5 | is equal to 2 or 3");
        this.type_sort = 5;
        this.queryParams["type_sort"] = 5;
      } else {
        // console.log("correct value");
        this.type_sort = Number(this.queryParams["type_sort"]);
      }
    } else {
      // console.log("undefined value");
      this.type_sort = 5;
      this.queryParams["type_sort"] = 5;
    }
    // Checking the correctness of data END ==========================================================

    if (this.search_text || this.params["navigate_link"]) {
      this.searchService.search(this.queryParams, this.params).subscribe({
        next: (response) => {
          // ==============================================================================================
          console.log("=====================================================");
          console.log("Товари", response.product);
          console.log("Фільтри", response.filters);
          console.log("Віджет авто-портал", response.widget_auto_portal);
          console.log("Віджет секція-айді", response.widget_section_id);

          console.log("Хлібні крихти", response.widget_breadcrumbs);

          console.log("Відкрита сторінка", response.currentPage);
          console.log("Кількість сторінок", response.maxPage);
          console.log("Товарів на сторінку", response.limit);
          console.log("Загальна кількість товарів", response.number_of_product);
          console.log("=====================================================");
          // ==============================================================================================
          this.productList = response.product;
          this.listFilter = response.filters;
          this.widget_auto_portal = response.widget_auto_portal;
          this.widget_section_id = response.widget_section_id;
          this.widget_breadcrumbs = response.widget_breadcrumbs;

          this.number_of_product = response.number_of_product;

          this.currentPage = response.currentPage;
          this.maxPage = response.maxPage;
          this.limit = response.limit;
          // ==============================================================================================
          let onlyQueryParamsFilter: Params = {};
          Object.assign(onlyQueryParamsFilter, this.queryParams);

          delete onlyQueryParamsFilter["search_text"];
          delete onlyQueryParamsFilter["type_sort"];
          delete onlyQueryParamsFilter["page"];
          delete onlyQueryParamsFilter["limit"];

          for (let key in onlyQueryParamsFilter) {
            onlyQueryParamsFilter[key] = onlyQueryParamsFilter[key].split(",");

            for (let i = 0; i < this.listFilter.length; i++) {
              for (
                let idx = 0;
                idx < this.listFilter[i].checkboxList.length;
                idx++
              ) {
                if (
                  onlyQueryParamsFilter[key].indexOf(
                    this.listFilter[i].checkboxList[idx].query_value
                  ) !== -1
                ) {
                  this.counterActiveFilter++;
                  this.listFilter[i].checkboxList[idx].active = true;
                }
              }
            }
          }
          // ==============================================================================================
        },
        error: (error) => {
          console.log(error);
          if (error.status === 404) {
            this.router.navigate(["/404"]);
            this.showNotice.open("Помилка запиту, заборонене посилання.", "Ok");
          }
          // if (error.status === 500 || error.status === 0) {}
        },
        complete: () => {
          this.loader = false;
        },
      });
    } else if (
      (this.search_text === "" || this.search_text === undefined) &&
      this.params.hasOwnProperty("navigate_link") === false
    ) {
      this.router.navigate(["/"]);

      this.showNotice.open(
        "Помилка запиту, не введено текст пошуку.",
        undefined
      );
    }

    this.renameTitle.renameTitleSite("Інтернет-магазин");

    const type_tile: string | null = localStorage.getItem("type_tile");
    if (type_tile) {
      if (type_tile === "large" || type_tile === "small") {
        this.type_tile = type_tile;
      }
    }

    console.log(this.queryParams);
    console.log(this.params);
  }
  // Сommon START =================================================================================
  body: HTMLBodyElement = document.getElementsByTagName("body")[0];

  search_text: string | undefined;

  loader: boolean = true;
  searchEmpty: boolean = false;
  loaderNewData: boolean = false;

  number_of_product: number | undefined;

  searchByQuery() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => true;

    if (this.params.hasOwnProperty("navigate_link")) {
      this.router.navigate(["search", this.params["navigate_link"]], {
        queryParams: this.queryParams,
      });
    } else {
      this.router.navigate(["search"], {
        queryParams: this.queryParams,
      });
    }

    if (this.search_text || this.params["navigate_link"]) {
      this.startLoadData();

      this.searchService.search(this.queryParams, this.params).subscribe({
        next: (response) => {
          console.log("=====================================================");
          console.log(response.product);
          console.log(response.filters);
          console.log(response.widget_auto_portal);
          console.log(response.widget_section_id);
          console.log("Відкрита сторінка", response.currentPage);
          console.log("Кількість сторінок", response.maxPage);
          console.log("Товарів на сторінку", response.limit);
          console.log("Загальна кількість товарів", response.number_of_product);
          console.log("=====================================================");
          this.productList = response.product;
          // this.listFilter = response.filters;

          this.number_of_product = response.number_of_product;

          this.currentPage = response.currentPage;
          this.maxPage = response.maxPage;
          this.limit = response.limit;
        },
        error: (err) => {},
        complete: () => {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.endLoadData();
        },
      });
    } else if (
      (this.search_text === "" || this.search_text === undefined) &&
      this.params.hasOwnProperty("navigate_link") === false
    ) {
      this.router.navigate(["/"]);

      this.showNotice.open(
        "Помилка запиту, не введено текст пошуку.",
        undefined
      );
    }
  }

  startLoadData() {
    this.loaderNewData = true;
    this.body.classList.add("active--load_data");
  }
  endLoadData() {
    this.loaderNewData = false;
    this.body.classList.remove("active--load_data");
  }
  // Сommon END ===================================================================================
  // Header START =================================================================================
  type_sort: number = 0;
  type_tile: "large" | "small" = "small";

  counterActiveFilter: number = 0;
  resetAllFilter() {
    for (const key in this.queryParams) {
      if (key !== "type_sort" && key !== "limit" && key !== "page") {
        delete this.queryParams[key];
      }
    }

    for (let idx = 0; idx < this.listFilter.length; idx++) {
      for (let i = 0; i < this.listFilter[idx].checkboxList.length; i++) {
        this.listFilter[idx].checkboxList[i].active = false;
      }
    }

    this.counterActiveFilter = 0;

    this.searchByQuery();
  }

  productSort() {
    if (this.queryParams.hasOwnProperty("type_sort")) {
      delete this.queryParams["type_sort"];
    }
    this.queryParams["type_sort"] = this.type_sort;

    this.searchByQuery();
  }
  tileChange() {
    localStorage.setItem("type_tile", this.type_tile);
  }
  // Header END ===================================================================================
  // Sidebar START ================================================================================
  listFilter: Filter[] = [];
  // listFilter2: Filter[] = [];
  // listFilter3: Filter[][] = [];

  queryParams: Params = {};
  params: Params = {};

  widget_auto_portal: WidgetAutoPortal[] | undefined;
  widget_section_id: WidgetSectionId[] | undefined;
  widget_breadcrumbs: Widget_Breadcrumbs | undefined;

  filterSearch(nameInput: string, nameQuery: string, checked: boolean) {
    if (checked === true) {
      const nameQueryForServer: string = nameQuery;

      if (this.queryParams.hasOwnProperty(nameQueryForServer)) {
        this.queryParams[nameQueryForServer] =
          this.queryParams[nameQueryForServer] + "," + nameInput;
      } else {
        this.queryParams[nameQueryForServer] = nameInput;
      }

      // Limit
      if (this.queryParams.hasOwnProperty("limit")) {
        delete this.queryParams["limit"];
        this.queryParams["limit"] = this.limit;
      } else {
        this.queryParams["limit"] = this.limit;
      }
      // Page
      if (this.queryParams.hasOwnProperty("page")) {
        delete this.queryParams["page"];
        this.queryParams["page"] = this.currentPage;
      } else {
        this.queryParams["page"] = this.currentPage;
      }
      // type_sort
      if (this.queryParams.hasOwnProperty("type_sort")) {
        delete this.queryParams["type_sort"];
        this.queryParams["type_sort"] = this.type_sort;
      } else {
        this.queryParams["type_sort"] = this.type_sort;
      }

      this.counterActiveFilter++;
      this.searchByQuery();
    } else {
      const nameQueryForServer: string = nameQuery;

      let deleteSubString: string[] =
        this.queryParams[nameQueryForServer].split(",");

      let deleteIndex: number = deleteSubString.indexOf(nameInput);

      deleteSubString.splice(deleteIndex, 1);

      this.queryParams[nameQueryForServer] = deleteSubString.join(",");

      if (this.queryParams[nameQueryForServer].length === 0) {
        delete this.queryParams[nameQueryForServer];
      }

      // Limit
      if (this.queryParams.hasOwnProperty("limit")) {
        delete this.queryParams["limit"];
        this.queryParams["limit"] = this.limit;
      } else {
        this.queryParams["limit"] = this.limit;
      }
      // Page
      if (this.queryParams.hasOwnProperty("page")) {
        delete this.queryParams["page"];
        this.queryParams["page"] = this.currentPage;
      } else {
        this.queryParams["page"] = this.currentPage;
      }
      // type_sort
      if (this.queryParams.hasOwnProperty("type_sort")) {
        delete this.queryParams["type_sort"];
        this.queryParams["type_sort"] = this.type_sort;
      } else {
        this.queryParams["type_sort"] = this.type_sort;
      }

      this.counterActiveFilter--;
      this.searchByQuery();
    }
  }
  // Sidebar END ==================================================================================
  // Main Product START ===========================================================================
  productList: Product[] = []; // List Product

  currentPage: number = 1;
  maxPage: number = 1;

  limit: number = 10; // number of products per page

  pageSizeOptions: number[] = [10, 25, 50, 100]; // select (number of products per page)

  pageEvent?: PageEvent;
  onPaginateChange(event: PageEvent) {
    if (this.queryParams.hasOwnProperty("page")) {
      delete this.queryParams["page"];
    }
    this.queryParams["page"] = event.pageIndex + 1;

    if (this.queryParams.hasOwnProperty("limit")) {
      delete this.queryParams["limit"];
    }
    this.queryParams["limit"] = event.pageSize;

    this.searchByQuery();
  }
  // Main Product END =============================================================================
  // Media Adaptability START =====================================================================
  widthWindow: number = window.innerWidth;
  showFilter: boolean = false;

  onFilterSidebar() {
    this.showFilter = true;
    this.body.classList.add("active--filter");
  }
  offFilterSidebar() {
    this.showFilter = false;
    this.body.classList.remove("active--filter");
  }
  // Media Adaptability END =======================================================================
}
