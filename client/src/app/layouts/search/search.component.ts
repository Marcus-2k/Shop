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
} from "src/app/shared/interface/interfaces";
import { CategoryProductService } from "src/app/shared/service/category-product.service";
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
      await this.searchService
        .search(this.titleSearch, this.categorySearch)
        .subscribe(
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

            //

            this.uniqueCategory.forEach((element: number[], idx: number) => {
              this.optionsListBlockCategory.push(
                this.categoryNameDB[element[0]].nameListCategory[element[1]]
                  .subNameListCategory[element[2]].options
              );
            });
            this.optionsList = this.optionsListBlockCategory.flat(1);

            //

            // console.log(this.optionsListBlockCategory);
            // console.log(this.productOptionsBlock);

            const filter: string[] = [];
            // const filter: ActiveFilter[] = [];
            // const filter: ActiveFilter[][] = [];
            this.uniqueCategory.forEach((uniqueCategory: number[], i) => {
              // console.log("========", uniqueCategory, "========");
              this.productOptionsBlock[i].forEach((item: number[], idx) => {
                // console.log(item);

                const blockFilter: ActiveFilter[] = [];

                this.optionsListBlockCategory[i].forEach(
                  (element: Options, k) => {
                    // const itemBlockFilter: ActiveFilter = {
                    //   name: element.select[item[k]],
                    //   counter: 0,
                    //   active: false,
                    // };
                    filter.push(element.select[item[k]]);
                    // blockFilter.push(itemBlockFilter);
                  }
                );

                // filter.push(blockFilter);
              });
              console.log("=============================================");
            });
            console.log(filter);

            //
            const set = new Set(filter);
            const setFilter: ActiveFilter[] = [];

            filter.forEach((element: string, i) => {
              let counter = 0;
              for (let idx = 0; idx < filter.length; idx++) {
                if (element === filter[idx]) {
                  console.log("повтор");
                  counter += 1;
                  filter.splice(idx, 1);
                }
              }
              // filter.forEach((item: string, idx) => {});

              const itemSetFilter: ActiveFilter = {
                name: element,
                counter: counter,
                active: false,
              };
              setFilter.push(itemSetFilter);
            });

            console.log(setFilter);
            console.log(set);
            //

            this.loaderProduct = false; // Loader Main
            this.loaderSelect = false; // Loader SideBar
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

  // Other === END

  /* Sidebar */

  optionsList: Options[] = []; // Options Product List
  optionsListBlockCategory: Options[][] = []; // Options Product List
  productOptions: number[][] = []; // Options Product List

  uniqueCategory: number[][] = []; // Category List [ [1,0,0], [1,0,5] ... ]
  categoryNameDB: CategoryProduct[] = []; // All Category, import from category-name.service.ts

  productOptionsBlock: number[][][] = [];

  listFilter: ActiveFilter[] = [];

  filterSearch() {}

  // generatorNmbreForLabel(i: number, idx: number) {
  //   return `${i}${idx}`;
  // }

  /* Sidebar */

  /* Body */

  listProduct: Product[] = []; // List Product

  /* Body */
}
