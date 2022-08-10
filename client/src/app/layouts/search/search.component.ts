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
import { OtherDataService } from "src/app/shared/service/other-data.service";
import { RequestSearchService } from "src/app/shared/service/server/request-search.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";
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
    private requestUser: RequestUserService,
    private catagoryName: CategoryProductService,
    private originalAndQueryName: NameQueryService,
    private showNotice: ShowNoticeService,
    private otherData: OtherDataService
  ) {}

  titleSearch?: string;
  allQuery: Params = {};

  ngOnInit() {
    console.log("Start ngOnInit Search");
    this.route.queryParams.subscribe((queryParam: Params) => {
      this.titleSearch = queryParam["search_text"];
      this.allQuery = queryParam;
    });

    Object.assign(this.queryParams, this.allQuery);

    if (this.titleSearch) {
      this.searchService.search(this.titleSearch, this.allQuery).subscribe(
        (res) => {
          // ==============================================================================================
          console.log("=====================================================");
          console.log(res.product);
          console.log(res.uniqueProductCategory);
          console.log(res.productOptionsBlock);
          console.log("Відкрита сторінка", res.currentPage);
          console.log("Кількість сторінок", res.maxPage);
          console.log("Товарів на сторінку", res.limit);
          console.log("=====================================================");

          // ==============================================================================================
          this.productList = res.product; // List Product
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
          // console.log(optionsListBlockCategory);
          // ==============================================================================================
          let filterName: ActiveFilterBlock[] = [];
          optionsListBlockCategory.forEach((element: Options[], index) => {
            productOptionsBlock[index].forEach((item, idx) => {
              let block: ActiveFilterBlock = {
                name: element[idx].name,
                inputActive: [],
              };
              item.forEach((items) => {
                let item: ActiveFilter = {
                  name: element[idx].select[items],
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
                  key.inputActive = key.inputActive.concat(element.inputActive);
                  flag = false;
                }
              }
              if (flag) {
                uniqueFilter.push(element);
              }
            }
          });
          // console.log(uniqueFilter);
          // ==============================================================================================

          let uniqueFilterBlock: ActiveFilterBlock[] = [];
          uniqueFilter.forEach((element) => {
            let uniqueFilterBlockItem: ActiveFilterBlock = {
              name: element.name,
              inputActive: [],
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
          // console.log(uniqueFilterBlock);
          // ==============================================================================================

          const parameters: string[] = Object.values(this.queryParams).splice(
            1
          );
          parameters.pop(); //delete page
          parameters.pop(); //delete limit
          // console.log(parameters);

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

    this.requestUser.getFavorite().subscribe(
      (responce) => {
        console.log(responce);
        this.listFavoriteUser = responce.favorite;
      },
      //
      (error) => {
        this.showNotice.message(
          "Сталася помилка на серверові. Спробуйте пізніше."
        );
        console.log(error);
      }
    );
  }

  ngDoCheck(): void {}

  ngOnDestroy(): void {}

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  url_server_folder: string = `http://${this.HOST}${this.PORT}/`; // Link to server folder

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

  // resetParameters: string[] = [];

  queryParams: Params = {};

  filterSearch(nameInput: string, nameBlock: string, checked: boolean) {
    console.log(nameInput);
    console.log(nameBlock);

    console.log(checked);

    if (checked === true) {
      let positionIndexOriginalName: number =
        this.originalName.indexOf(nameBlock);
      let nameQueryForServer: string = "";

      if (positionIndexOriginalName >= 0) {
        nameQueryForServer = this.nameForServer[positionIndexOriginalName];

        console.log("==========================");
        console.log(nameQueryForServer);

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
  productList: Product[] = []; // List Product

  currentPage: number = 1;
  maxPage: number[] = [];

  limit?: number;
  newPage(page: number) {
    console.log("newPage");
    console.log(page);

    if (this.queryParams.hasOwnProperty("page")) {
      delete this.queryParams["page"];
    }
    this.queryParams["page"] = page;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // re-render
    this.router.navigate([`search`], {
      queryParams: this.queryParams,
    });
  }

  newLimit(limit: number) {
    console.log("newLimit");
    console.log(limit);

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

  listFavoriteUser: string[] = [];

  checkedFavorite(productID: string | undefined): Boolean {
    if (productID) {
      for (const iterator of this.listFavoriteUser) {
        if (iterator === productID) {
          return true;
        }
      }

      return false;
    } else {
      return false;
    }
  }

  addRemoveFavorite(id: string | undefined) {
    if (id) {
      //
      if (this.listFavoriteUser.indexOf(id) === -1) {
        console.log("Add favirite in you list");

        this.requestUser.addFavorite(id).subscribe(
          (response) => {
            console.log(response.favorite);
            this.listFavoriteUser = response.favorite;
            this.otherData.favoriteNumber = response.favorite.length;
            this.showNotice.message(response.message);
          },
          (error) => {
            this.showNotice.message(
              "Сталася помилка на серверові. Спробуйте пізніше."
            );
            console.log(error);
          }
        );
      } else if (this.listFavoriteUser.indexOf(id) !== -1) {
        console.log("Remove favirite in you list");

        this.requestUser.removeFavorite(id).subscribe(
          (response) => {
            console.log(response.favorite);
            this.listFavoriteUser = response.favorite;
            this.otherData.favoriteNumber = response.favorite.length;
            this.showNotice.message(response.message);

            // this.requestUser.getFavorite().subscribe(
            //   (responce) => {
            //     console.log(responce);
            //     this.listFavoriteUser = responce;
            //   },
            //   //
            //   (error) => {
            //     this.showNotice.message(
            //       "Сталася помилка на серверові. Спробуйте пізніше."
            //     );
            //     console.log(error);
            //   }
            // );
          },
          (error) => {
            this.showNotice.message(
              "Сталася помилка на серверові. Спробуйте пізніше."
            );
            console.log(error);
          }
        );
      }
    } else {
    }
  }

  // Main Product ===========================================================================
}
