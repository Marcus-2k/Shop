import { HttpParams } from "@angular/common/http";
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
  FilterParamsBlock,
  QueryParams,
} from "src/app/shared/interface/interfaces";
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
  categorySearch?: string;

  async ngOnInit() {
    console.log("Start ngOnInit Search");
    this.route.queryParams.subscribe((queryParam: Params) => {
      this.titleSearch = queryParam["search_text"];
      // this.categorySearch = queryParam["category"];
    });

    if (this.titleSearch) {
      await this.searchService.search(this.titleSearch).subscribe(
        (res) => {
          // console.log(res.product);
          // console.log(res.uniqueProductCategory);
          // console.log(res.productOptionsBlock);

          //

          this.listProduct = res.product; // List Product
          this.uniqueCategory = res.uniqueProductCategory; // List Product Category Unique
          this.productOptionsBlock = res.productOptionsBlock; //

          //

          this.categoryNameDB = this.catagoryName.categoryList; // import from category-product.service.ts
          this.originalName = this.originalAndQueryName.originalName;
          this.nameForServer = this.originalAndQueryName.nameForServer;

          //

          this.uniqueCategory.forEach((element: number[], idx: number) => {
            this.optionsListBlockCategory.push(
              this.categoryNameDB[element[0]].nameListCategory[element[1]]
                .subNameListCategory[element[2]].options
            );
          });
          this.optionsList = this.optionsListBlockCategory.flat(1);

          //

          // ==============================================================================================
          // const filter: string[] = [];
          // this.uniqueCategory.forEach(
          //   (uniqueCategory: number[], i: number) => {
          //     //
          //     this.productOptionsBlock[i].forEach(
          //       (item: number[], idx: number) => {
          //         //
          //         this.optionsListBlockCategory[i].forEach(
          //           (element: Options, k: number) => {
          //             //
          //             filter.push(element.select[item[k]]);
          //           }
          //         );
          //       }
          //     );
          //   }
          // );

          // const set = Array.from(new Set(filter));
          // const uniqueFilter: ActiveFilter[] = [];

          // set.forEach((element: string, i) => {
          //   let counter = 0;
          //   filter.forEach((item: string, idx) => {
          //     if (element === item) {
          //       counter++;
          //     }
          //   });
          //   const itemBlockFilter: ActiveFilter = {
          //     name: element,
          //     counter,
          //     active: false,
          //   };
          //   uniqueFilter.push(itemBlockFilter);
          // });
          // this.listFilter = uniqueFilter;

          // ==============================================================================================

          let filter: FilterNameParams[] = [];
          this.uniqueCategory.forEach((category: number[], i: number) => {
            //
            this.optionsListBlockCategory[i].forEach((element, idx) => {
              //
              let filterBlock: FilterNameParams = {
                name: element.name,
                params: [],
              };
              this.productOptionsBlock[i].forEach((item, k) => {
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

          let filterActive: FilterParamsBlock[] = [];
          filter.forEach((element: FilterNameParams) => {
            //
            let setParams = Array.from(new Set(element.params));
            //
            let filterParamsBlock: FilterParamsBlock = {
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
                // queryName: element.name,
                // queryParams: [],
              };
              filterParamsBlock.inputActive.push(filterParams);
            });
            filterActive.push(filterParamsBlock);
          });

          console.log(filterActive);
          this.listFilter = filterActive;

          // ==============================================================================================

          filterActive.forEach((element) => {
            let index: number = this.originalName.indexOf(element.name);
            let nameForServer: string = this.nameForServer[index];
            // console.log(index);
            // console.log(element.name);
            // console.log(nameForServer);
            let queryParams: QueryParams = { name: nameForServer, query: [] };
          });

          //
          this.loaderProduct = false; // Loader Main
          this.loaderSelect = false; // Loader SideBar
          setInterval(() => {
            this.loaderLine = false; // Loader Header
          }, 500);
        },
        (e) => {
          console.log(e);
        }
      );
    } else if (this.titleSearch === undefined) {
      this.router.navigate([""]);
      this.showNotice.message("Не коректний запит");
    }
  }

  ngDoCheck(): void {}

  ngOnDestroy(): void {}

  // Other === START

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  url_server_img: string = `http://${this.HOST}${this.PORT}/`; // Link to server folder

  loaderSelect: boolean = true; // Loader block Select
  loaderProduct: boolean = true; // Loader block Product
  loaderLine: boolean = true; // Loader block Header

  // Other === END

  /* Sidebar */

  optionsList: Options[] = []; // Options Product List
  optionsListBlockCategory: Options[][] = []; // Options Product List
  productOptions: number[][] = []; // Options Product List

  uniqueCategory: number[][] = []; // Category List [ [1,0,0], [1,0,5] ... ]
  categoryNameDB: CategoryProduct[] = []; // All Category, import from category-name.service.ts

  productOptionsBlock: number[][][] = [];

  listFilter: FilterParamsBlock[] = [];

  originalName: string[] = [];
  nameForServer: string[] = [];

  // queryParams: QueryParams[] = [{ name: "Колір", query: [] }];
  queryParams: QueryParams[] = [{ name: "Колір", query: [] }];

  filterSearch(
    nameInput: string,
    nameBlock: string,
    indexBlock: number,
    checked: boolean
  ) {
    if (checked === true) {
      let positionIndexOriginalName: number =
        this.originalName.indexOf(nameBlock);
      let nameQuery: string = "";

      if (positionIndexOriginalName >= 0) {
        nameQuery = this.nameForServer[positionIndexOriginalName];

        console.log(nameInput);
        console.log(nameBlock);
        console.log(indexBlock);

        const params = new HttpParams();
        // params.append('param1', "value1");
        // params.append("param2", "value2");

        this.router.routeReuseStrategy.shouldReuseRoute = () => false; // re-render component === true
        this.router.navigate([`search`], {
          // relativeTo: this.route,
          queryParams: {
            search_text: this.titleSearch,
            query: this.titleSearch,
          },
          // queryParamsHandling: "merge",
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
    }
  }

  /* Sidebar */

  /* Body */

  listProduct: Product[] = []; // List Product

  /* Body */
}
