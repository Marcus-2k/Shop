import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { ActivatedRoute, Params, Router } from "@angular/router";
import {
  Product,
  ActiveFilter,
  Options,
  ActiveFilterBlock,
  CategoryProduct_Characteristics,
} from "src/app/shared/interface/interfaces"; // Interface

// Service
import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestCatalogService } from "src/app/shared/service/server/request-catalog.service";
import { RequestSearchService } from "src/app/shared/service/server/request-search.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

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
    private requestCatalog: RequestCatalogService,
    private showNotice: ShowNoticeService,
    private renameTitle: RenameTitleService
  ) {}

  search_text?: string;
  allQuery: Params = {};

  ngOnInit() {
    console.log("Start ngOnInit Search");

    this.route.queryParams.subscribe((queryParam: Params) => {
      this.search_text = queryParam["search_text"];
      this.type_sort = queryParam["type_sort"]
        ? Number(queryParam["type_sort"])
        : 5;
      this.allQuery = queryParam;
    });

    Object.assign(this.queryParams, this.allQuery);

    if (this.search_text) {
      this.searchService.search(this.search_text, this.allQuery).subscribe(
        (response) => {
          // ==============================================================================================
          console.log("=====================================================");
          console.log(response.product);
          console.log(response.uniqueProductCategory);
          console.log(response.productCharacteristicsBlock);
          console.log("Відкрита сторінка", response.currentPage);
          console.log("Кількість сторінок", response.maxPage);
          console.log("Товарів на сторінку", response.limit);
          console.log("=====================================================");
          // ==============================================================================================
          this.productList = response.product; // List Product
          this.uniqueCategory = response.uniqueProductCategory; // List Product Category Unique
          const productOptionsBlock: number[][][] =
            response.productCharacteristicsBlock; // Parameters by block to categories
          this.currentPage = Number(response.currentPage); // Current Page
          this.maxPage = response.maxPage; // Max pages site
          this.limit = response.limit; // Limits item site
          // ==============================================================================================
          this.requestCatalog.getCategoryAndCharacteristics().subscribe(
            (res: CategoryProduct_Characteristics[]) => {
              console.log(res);
              this.categoryNameDB = res;
              // ==============================================================================================
              let optionsListBlockCategory: Options[][] = []; // Options Product List
              this.uniqueCategory.forEach((element: number[], idx: number) => {
                optionsListBlockCategory.push(
                  this.categoryNameDB[element[0]].nameListCategory[element[1]]
                    .subNameListCategory[element[2]].characteristics
                );
              });
              console.log(optionsListBlockCategory);
              // ==============================================================================================
              let filterName: ActiveFilterBlock[] = [];
              optionsListBlockCategory.forEach((element: Options[], index) => {
                productOptionsBlock[index].forEach((item, idx) => {
                  let block: ActiveFilterBlock = {
                    name: element[idx].name,
                    inputActive: [],
                    blockActive: true,
                  };
                  item.forEach((items) => {
                    let item: ActiveFilter = {
                      name: element[idx].select[items],
                      query_name: element[idx].query_name,
                      counter: 0,
                      active: false,
                    };
                    block.inputActive.push(item);
                  });
                  filterName.push(block);
                });
              });
              // ==============================================================================================
              const uniqueFilter: ActiveFilterBlock[] = [];
              filterName.forEach((element, idx) => {
                if (idx === 0) {
                  uniqueFilter.push(element);
                } else if (idx > 0) {
                  let flag = true;
                  for (let key of uniqueFilter) {
                    if (key.name === element.name) {
                      key.inputActive = key.inputActive.concat(
                        element.inputActive
                      );
                      flag = false;
                    }
                  }
                  if (flag) {
                    uniqueFilter.push(element);
                  }
                }
              });
              // ==============================================================================================
              let uniqueFilterBlock: ActiveFilterBlock[] = [];
              uniqueFilter.forEach((element) => {
                let uniqueFilterBlockItem: ActiveFilterBlock = {
                  name: element.name,
                  inputActive: [],
                  blockActive: true,
                };
                let inputActiveItem: ActiveFilter[] = [];
                //
                element.inputActive.forEach((item, index) => {
                  //
                  if (index === 0) {
                    inputActiveItem.push(item);
                  } else if (index > 0) {
                    //
                    let flag = true;
                    for (let key of inputActiveItem) {
                      if (key.name === item.name) {
                        flag = false;
                        key.counter++;
                      }
                    }
                    if (flag) {
                      inputActiveItem.push(item);
                    }
                  }
                  uniqueFilterBlockItem.inputActive = inputActiveItem;
                });
                uniqueFilterBlock.push(uniqueFilterBlockItem);
              });
              // ==============================================================================================
              const parameters: string[] = Object.values(
                this.queryParams
              ).splice(1);
              parameters.pop(); //delete type_sort queryParams
              parameters.pop(); //delete page queryParams
              parameters.pop(); //delete limit queryParams
              // ==============================================================================================
              let sortParameters: string[] = [];
              parameters.forEach((element: string, idx) => {
                if (element.indexOf(",") !== -1) {
                  sortParameters = sortParameters.concat(element.split(","));
                } else {
                  sortParameters.push(element);
                }
              });
              // this.resetParameters = sortParameters;
              uniqueFilterBlock.forEach((element: ActiveFilterBlock, i) => {
                sortParameters.forEach((block) => {
                  element.inputActive.forEach((item, idx) => {
                    if (block === item.name) {
                      uniqueFilterBlock[i].inputActive[idx].active = true;
                    }
                  });
                });
              });
              // ==============================================================================================
              this.listFilter = uniqueFilterBlock;
              // ==============================================================================================
              this.loader = false;
              // ==============================================================================================
            },
            (error) => {
              console.log(error);
            }
          );
        },
        (e) => {
          console.log(e);
        }
      );
    } else if (this.search_text === undefined) {
      this.router.navigate([""]);
      this.showNotice.message("Помилка запиту, не введено текст пошуку.");
    }

    this.renameTitle.renameTitleSite("Інтернет-магазин");

    console.log(this.queryParams);
  }

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  url_server_folder: string = `http://${this.HOST}${this.PORT}/`; // Link to server folder
  loader: boolean = true; // Loader block Select

  // Header START =================================================================================
  counterProductSearchInDB: number = 0;

  type_sort: number = 0;

  productSort() {
    if (this.queryParams.hasOwnProperty("type_sort")) {
      delete this.queryParams["type_sort"];
    }
    this.queryParams["type_sort"] = this.type_sort;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate([`search`], {
      queryParams: this.queryParams,
    });
  }
  // Header END ===================================================================================

  // Sidebar START ================================================================================
  uniqueCategory: number[][] = []; // Category List [ [1,0,0], [1,0,5] ... ]
  categoryNameDB: CategoryProduct_Characteristics[] = []; // All Category, import from category-name.service.ts

  listFilter: ActiveFilterBlock[] = [];

  queryParams: Params = {};

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

      console.log(this.queryParams);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false; // re-render
      this.router.navigate([`search`], {
        queryParams: this.queryParams,
      });
    } else if (checked === false) {
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

      this.router.routeReuseStrategy.shouldReuseRoute = () => false; // re-render
      this.router.navigate([`search`], {
        queryParams: this.queryParams,
      });
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

    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // re-render
    this.router.navigate([`search`], {
      queryParams: this.queryParams,
    });
  }
  // Main Product END =============================================================================
}
