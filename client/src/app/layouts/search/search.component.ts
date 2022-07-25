import {
  Component,
  DoCheck,
  ElementRef,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "express";
import { Category, Product } from "src/app/shared/interface/interfaces";
import { CategoryNameService } from "src/app/shared/service/category-name.service";
import { RequestSearchService } from "src/app/shared/service/request-search.service";
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
    private catagoryName: CategoryNameService
  ) {}

  titleSearch?: string; // Params for req

  async ngOnInit() {
    this.route.queryParams.subscribe((queryParam: Params) => {
      this.titleSearch = queryParam["search_text"];
    });
    if (this.titleSearch) {
      await this.searchService.search(this.titleSearch).subscribe(
        (res) => {
          console.log(res);
          this.listProduct = res;
          //
          this.loaderProduct = false;
          this.loaderSelect = false;
          //
          res.forEach((item: Product) => {
            this.categoryListNumber.push(item.category);
          });
          this.categoryList = this.catagoryName.categoryList;
        },
        (e) => {
          console.log(e);
        }
      );
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

  categoryList: Category[] = []; // All Category

  filterSearch(checked: boolean, input: HTMLInputElement, category: number[]) {
    console.log(checked);
    console.log(input);
    console.log(category);

    // this.router.

    // ([`search`], {
    //   queryParams: {
    //     search_text: 'sdsd',
    //   },
    // });

    // this.searchService.getByFilterSearch(title, categoryId).subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (e) => {
    //     console.log(e);
    //   }
    // );
  }

  /* Sidebar */

  /* Body */

  listProduct: Product[] = []; // List Product

  /* Body */
}
