import {
  Component,
  DoCheck,
  ElementRef,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import {
  CategoryProduct,
  Product,
  ActiveFilter,
  Options,
  FilterNameParams,
  ActiveFilterBlock,
} from "src/app/shared/interface/interfaces"; // Interface
// Service
import { CategoryProductService } from "src/app/shared/service/category-product.service";
import { NameQueryService } from "src/app/shared/service/name-query.service";
import { RequestSearchService } from "src/app/shared/service/server/request-search.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit, DoCheck, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: RequestSearchService,
    private catagoryName: CategoryProductService,
    private originalAndQueryName: NameQueryService,
    private showNotice: ShowNoticeService
  ) {}

  titleSearch?: string;
  allQuery: Params = {};

  ngOnInit() {
    console.log("Start ngOnInit Search");
    this.route.queryParams.subscribe((queryParam: Params) => {
      this.titleSearch = queryParam["search_text"];
      this.allQuery = queryParam;
    });

    if (this.titleSearch) {
      this.searchService.search(this.titleSearch, this.allQuery).subscribe(
        (res) => {
          // console.log(res.product);
          // console.log(res.uniqueProductCategory);
          // console.log(res.productOptionsBlock);
          // console.log(res.currentPage);
          // console.log(res.maxPage);
          // console.log(res.limit);
          // ==============================================================================================
          this.listProduct = res.product; // List Product
          this.uniqueCategory = res.uniqueProductCategory; // List Product Category Unique
          const productOptionsBlock: number[][][] = res.productOptionsBlock; // Parameters by block to categories
          this.currentPage = Number(res.currentPage); // Current Page
          // this.maxPage = res.maxPage; // Max pages site
          this.limit = res.limit; // Limits item site
          // ==============================================================================================
          this.categoryNameDB = this.catagoryName.categoryList; // import from category-product.service.ts
          this.originalName = this.originalAndQueryName.originalName;
          this.nameForServer = this.originalAndQueryName.nameForServer;
          // ==============================================================================================
          while (res.maxPage > 0) {
            this.maxPage.push(res.maxPage--);
          }
          this.maxPage.reverse(); // Кількість сторінок на сайті [ 1, 2, 3, ..., 29 ]
          // ==============================================================================================
          let optionsListBlockCategory: Options[][] = []; // Options Product List
          this.uniqueCategory.forEach((element: number[], idx: number) => {
            optionsListBlockCategory.push(
              this.categoryNameDB[element[0]].nameListCategory[element[1]]
                .subNameListCategory[element[2]].options
            );
          });
          // ==============================================================================================
          let filter: FilterNameParams[] = [];
          this.uniqueCategory.forEach((category: number[], i: number) => {
            //
            optionsListBlockCategory[i].forEach((element, idx) => {
              //
              let filterBlock: FilterNameParams = {
                name: element.name,
                params: [],
              };
              productOptionsBlock[i].forEach((item, k) => {
                filterBlock.params.push(element.select[item[idx]]);
              });
              filter.push(filterBlock);
              //
            });
          });
          let filterItem: any = {};
          filter = filter.filter((entry: FilterNameParams) => {
            let previous: any;

            // Have we filterItem this label before?
            if (filterItem.hasOwnProperty(entry.name)) {
              // Yes, grab it and add this data to it
              previous = filterItem[entry.name];
              entry.params.forEach((name) => {
                previous.params.push(name);
              });
              // Don't keep this entry, we've merged it into the previous one
              return false;
            }

            // entry.data probably isn't an array; make it one for consistency
            if (!Array.isArray(entry.params)) {
              entry.params = [entry.params];
            }

            // Remember that we've filterItem it
            filterItem[entry.name] = entry;

            // Keep this one, we'll merge any others that match into it
            return true;
          });
          let filterActive: ActiveFilterBlock[] = [];
          filter.forEach((element: FilterNameParams) => {
            //
            let setParams = Array.from(new Set(element.params));
            //
            let filterParamsBlock: ActiveFilterBlock = {
              name: element.name,
              inputActive: [],
            };
            setParams.forEach((item) => {
              let counter = 0;
              element.params.forEach((arrayItem: string) => {
                if (item === arrayItem) {
                  counter++;
                }
              });
              let filterParams: ActiveFilter = {
                name: item,
                counter,
                active: false,
              };
              filterParamsBlock.inputActive.push(filterParams);
            });
            filterActive.push(filterParamsBlock);
          });
          // ==============================================================================================
          Object.assign(this.queryParams, this.allQuery);

          const parameters: any = Object.values(this.queryParams).splice(1);
          let parametersSplit: string[][] = [];
          parameters.forEach((element: string, idx: number) => {
            parametersSplit.push(element.split(","));
          });

          const noSortParams = parametersSplit.flat(1);

          let allParams: string[][] = [];
          noSortParams.forEach((element: string, idx) => {
            allParams[idx] = [element];
          });

          filterActive.forEach((element: ActiveFilterBlock, idx: number) => {
            noSortParams.forEach((item: string, index: number) => {
              element.inputActive.forEach((blockItem) => {
                if (blockItem.name === item) {
                  blockItem.active = true;
                }
              });
            });
          });

          this.listFilter = filterActive;
          // ==============================================================================================
          this.loaderProduct = false; // Loader Main
          this.loaderSelect = false; // Loader SideBar
          this.loaderLine = false; // Loader Header
          // ==============================================================================================
        },
        (e) => {
          console.log(e);
        }
      );
    } else if (this.titleSearch === undefined) {
      this.router.navigate([""]);
      this.showNotice.message("Помилка запиту, не введено текст пошуку.");
    }
  }

  ngDoCheck(): void {}

  ngOnDestroy(): void {}

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  url_server_img: string = `http://${this.HOST}${this.PORT}/`; // Link to server folder

  // @ElementRef('selectLimit')

  // Loader Site ============================================================================
  loaderSelect: boolean = true; // Loader block Select
  loaderProduct: boolean = true; // Loader block Product
  loaderLine: boolean = true; // Loader block Header
  // Loader Site ============================================================================

  // Sidebar ================================================================================

  uniqueCategory: number[][] = []; // Category List [ [1,0,0], [1,0,5] ... ]
  categoryNameDB: CategoryProduct[] = []; // All Category, import from category-name.service.ts

  listFilter: ActiveFilterBlock[] = [];

  originalName: string[] = []; // Original name params product
  nameForServer: string[] = []; // Special name for query params

  queryParams: Params = {};

  filterSearch(
    nameInput: string,
    nameBlock: string,
    indexBlock: number,
    idxInput: number,
    checked: boolean
  ) {
    if (checked === true) {
      let positionIndexOriginalName: number =
        this.originalName.indexOf(nameBlock);
      let nameQueryForServer: string = "";

      if (positionIndexOriginalName >= 0) {
        nameQueryForServer = this.nameForServer[positionIndexOriginalName];

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

        console.log(this.queryParams);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false; // re-render
        this.router.navigate([`search`], {
          queryParams: this.queryParams,
        });
      } else {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.navigate([`search`], {
          queryParams: {
            search_text: this.titleSearch,
          },
        });
      }
    } else if (checked === false) {
      let positionIndexOriginalName: number =
        this.originalName.indexOf(nameBlock);
      let nameQueryForServer: string = "";

      if (positionIndexOriginalName >= 0) {
        nameQueryForServer = this.nameForServer[positionIndexOriginalName];

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

        console.log(this.queryParams);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false; // re-render
        this.router.navigate([`search`], {
          queryParams: this.queryParams,
        });
      } else {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.navigate([`search`], {
          queryParams: {
            search_text: this.titleSearch,
          },
        });
      }
    }
  }

  // Sidebar ================================================================================

  // Main Product ===========================================================================
  listProduct: Product[] = []; // List Product

  currentPage?: number;
  maxPage: number[] = [];

  limit?: number;
  newPage(page: number) {
    if (this.queryParams.hasOwnProperty("page")) {
      delete this.queryParams["page"];
    }
    this.queryParams["page"] = page;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // re-render
    this.router.navigate([`search`], {
      queryParams: this.queryParams,
    });
  }

  newLimit(limit: string | number) {
    limit = Number(limit);

    if (this.queryParams.hasOwnProperty("limit")) {
      delete this.queryParams["limit"];
    }
    this.queryParams["limit"] = limit;

    if (this.queryParams.hasOwnProperty("page")) {
      delete this.queryParams["page"];
    }
    this.queryParams["page"] = 1;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // re-render
    this.router.navigate([`search`], {
      queryParams: this.queryParams,
    });
  }
  // Main Product ===========================================================================
}
