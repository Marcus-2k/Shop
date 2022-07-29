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
  options,
} from "src/app/shared/interface/interfaces";
import { CategoryProductService } from "src/app/shared/service/category-product.service";
import { RequestSearchService } from "src/app/shared/service/server/request-search.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";
import { environment } from "src/environments/environment";

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
      this.categorySearch = queryParam["category"];
    });

    if (this.titleSearch) {
      await this.searchService
        .search(this.titleSearch, this.categorySearch)
        .subscribe(
          (res) => {
            // console.log("=======================");
            // console.log(res);
            // console.log(res.product);
            // console.log(res.productCategory);
            // console.log(res.productCharacteristics);s
            //
            this.listProduct = res.product; // List Product
            this.categoryListNumber = res.productCategory; // List Product Category
            this.characteristicsListNumber = res.productCharacteristics; // List Product Characteristics
            //
            this.loaderProduct = false; // Loader Main
            this.loaderSelect = false; // Loader SideBar
            this.categoryList = this.catagoryName.categoryList; // List Category
            //
            const noUniqueCategory: number[] = [];
            this.categoryListNumber.forEach((element) => {
              noUniqueCategory.push(Number(element.join("")));
            });
            // console.log(noUniqueCategory);
            //
            const uniqueCategory: number[] = []; // Определяем временный массив
            for (let idx = 0; idx < noUniqueCategory.length; idx++) {
              if (uniqueCategory.indexOf(noUniqueCategory[idx]) === -1) {
                uniqueCategory.push(noUniqueCategory[idx]);
              }
            }
            // console.log(uniqueCategory);
            //
            const uniqueCategoryFilter: number[][] = [];
            uniqueCategory.forEach((element) => {
              if (element === 0) {
                uniqueCategoryFilter.push([0, 0, 0]);
              } else if (element === 10) {
                uniqueCategoryFilter.push([0, 1, 0]);
              } else {
                let numberToArray = ("" + element).split("").map(Number);
                uniqueCategoryFilter.push(numberToArray);
              }
            });
            // console.log(uniqueCategoryFilter);
            //
            uniqueCategoryFilter.forEach((element, idx) => {
              this.optionsProduct.push(
                this.categoryList[element[0]].nameListCategory[element[1]]
                  .subNameListCategory[element[2]].options
              );
            });
            // console.log(this.optionsProduct);
            //
            //
            //
            const filter: ActiveFilter[][] = [];
            //
            let count = Object.create(null);
            let used = new Set();
            // console.log(this.optionsProduct);
            this.optionsProduct.forEach((item: options[], i) => {
              item.forEach((subItem: options, idx) => {
                const filterBlock: ActiveFilter[] = [];
                this.characteristicsListNumber.forEach((element, k) => {
                  const filterItem = {
                    // block: subItem.name,
                    name: subItem.select[element[idx]],
                    counter: 0,
                    active: false,
                  };
                  filterBlock.push(filterItem);
                  // if (idx === k) {
                  //   const filterItem = {
                  //     // block: subItem.name,
                  //     name: subItem.select[element[idx]],
                  //     counter: 0,
                  //     active: false,
                  //   };
                  //   filterBlock.push(filterItem);
                  //   used.add(subItem.select[element[idx]]);
                  // } else {
                  //   // console.log("else");
                  //   if (used.has(subItem.select[element[idx]])) {
                  //     // console.log("повтор");
                  //     // filterBlock.forEach((iteration) => {
                  //     //   // console.log(iteration);
                  //     // });
                  //   } else {
                  //     const filterItem = {
                  //       // block: subItem.name,
                  //       name: subItem.select[element[idx]],
                  //       counter: 0,
                  //       active: false,
                  //     };
                  //     filterBlock.push(filterItem);
                  //     used.add(subItem.select[element[idx]]);
                  //   }
                  // }
                });
                filter.push(filterBlock);
              });
            });
            console.log(filter);
            //
            filter.forEach((item, idx) => {
              item.forEach((element: ActiveFilter, index) => {
                console.log(element);
                // for (let { name } of item) {
                //   if ((count[name] = ~~count[name] + 1) == 2) {
                //     used.add(name);
                //   }
                // }
              });

              console.log("============================");
            });
            // console.log(count);
            // console.log(used);

            //

            this.listFilter = filter;
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

  ngOnDestroy(): void {
    // this.listProduct = [];
    // this.categoryList = [];
    // this.characteristicsListNumber = [];
  }

  // Other === START

  url_server_img: string = `http://${environment.HOST}${environment.PORT}/`; // Link to server folder

  loaderSelect: boolean = true; // Loader block Select
  loaderProduct: boolean = true; // Loader block Product

  // Other === END

  /* Sidebar */

  characteristicsListNumber: number[][] = []; // Characteristics List

  categoryListNumber: number[][] = []; // Category List

  categoryList: CategoryProduct[] = []; // All Category, import from category-name.service.ts

  optionsProduct: options[][] = [];

  listFilter: ActiveFilter[][] = [];

  filterSearch(checked: boolean, category: number[], idx: number) {
    // console.log(this.categoryList);
    // if (checked === true) {
    //   this.listFilter[idx].active = true; // true >> will be added to the request list
    //   console.log(this.listFilter);
    //   let categoryQuery = ""; // Список фільтрів які будуть в запиті.
    //   this.listFilter.forEach((element) => {
    //     if (element.active === true) {
    //       if (categoryQuery.length === 0) {
    //         categoryQuery = `${element.category.join("")}`;
    //       } else {
    //         categoryQuery = `${categoryQuery},${element.category.join("")}`;
    //       }
    //     }
    //   });
    //   // Reques with new query params
    //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //   // this.router.onSameUrlNavigation = "reload";
    //   this.router.navigate([`search`], {
    //     queryParams: {
    //       search_text: this.titleSearch,
    //       category: categoryQuery,
    //     },
    //   });
    // } else if (checked === false) {
    //   this.listFilter[idx].active = false; // false >> will NOT be added to the request list
    //   let categoryQuery = "";
    //   this.listFilter.forEach((element) => {
    //     if (element.active === true) {
    //       if (categoryQuery.length === 0) {
    //         categoryQuery = `${element.category.join("")}`;
    //       } else {
    //         categoryQuery = `${categoryQuery},${element.category.join("")}`;
    //       }
    //     }
    //   });
    //   // Reques with new query params
    //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //   this.router.navigate([`search`], {
    //     queryParams: {
    //       search_text: this.titleSearch,
    //       category: categoryQuery ? categoryQuery : null,
    //     },
    //   });
    // }
  }

  /* Sidebar */

  /* Body */

  listProduct: Product[] = []; // List Product

  /* Body */
}
