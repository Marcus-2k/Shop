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
  ActiveCategory,
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
            this.listProduct = res.product; // List Product
            //
            let activeCategoryInQuery: number[][] | string[] | number[] = [];

            if (this.categorySearch) {
              activeCategoryInQuery = this.categorySearch.split(",");

              activeCategoryInQuery.forEach((element, idx) => {
                activeCategoryInQuery[idx] = Number(element);
              });
            }
            //
            res.productCategory.forEach((element: number[] | any, idx) => {
              const filterOneCategory = { category: element, active: false };

              activeCategoryInQuery.forEach((item) => {
                let newElement = Number(element.join(""));
                if (newElement === item) {
                  filterOneCategory.active = true;
                }
              });
              this.listFilter.push(filterOneCategory);
              this.categoryListNumber.push(element);
            });
            //
            this.loaderProduct = false; // Loader Main
            this.loaderSelect = false; // Loader SideBar
            this.categoryList = this.catagoryName.categoryList; // List Category
            console.log(this.listFilter);
            //
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
    this.listProduct = [];
    this.categoryList = [];
    this.categoryListNumber = [];
  }

  // Other === START

  url_server_img: string = `http://${environment.HOST}${environment.PORT}/`; // Link to server folder

  loaderSelect: boolean = true; // Loader block Select
  loaderProduct: boolean = true; // Loader block Product

  // Other === END

  /* Sidebar */

  categoryListNumber: number[][] = []; // Category List

  categoryList: CategoryProduct[] = []; // All Category, import from category-name.service.ts

  // Server Request
  listFilter: ActiveCategory[] = [];

  filterSearch(checked: boolean, category: number[], idx: number) {
    if (checked === true) {
      this.listFilter[idx].active = true; // true >> will be added to the request list
      console.log(this.listFilter);

      let categoryQuery = ""; // Список фільтрів які будуть в запиті.
      this.listFilter.forEach((element) => {
        if (element.active === true) {
          if (categoryQuery.length === 0) {
            categoryQuery = `${element.category.join("")}`;
          } else {
            categoryQuery = `${categoryQuery},${element.category.join("")}`;
          }
        }
      });
      // Reques with new query params
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      // this.router.onSameUrlNavigation = "reload";
      this.router.navigate([`search`], {
        queryParams: {
          search_text: this.titleSearch,
          category: categoryQuery,
        },
      });
    } else if (checked === false) {
      this.listFilter[idx].active = false; // false >> will NOT be added to the request list

      let categoryQuery = "";
      this.listFilter.forEach((element) => {
        if (element.active === true) {
          if (categoryQuery.length === 0) {
            categoryQuery = `${element.category.join("")}`;
          } else {
            categoryQuery = `${categoryQuery},${element.category.join("")}`;
          }
        }
      });
      // Reques with new query params
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.navigate([`search`], {
        queryParams: {
          search_text: this.titleSearch,
          category: categoryQuery ? categoryQuery : null,
        },
      });
    }
  }

  /* Sidebar */

  /* Body */

  listProduct: Product[] = []; // List Product

  /* Body */
}
