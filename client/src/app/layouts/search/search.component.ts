import {
  Component,
  DoCheck,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Product } from 'src/app/shared/interface/interfaces';
import { CategoryNameService } from 'src/app/shared/service/category-name.service';
import { RequestSearchService } from 'src/app/shared/service/request-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, DoCheck, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private searchService: RequestSearchService,
    private catagoryName: CategoryNameService
  ) {}

  // Params for req
  reqSearch: string = '';

  async ngOnInit() {
    this.route.queryParams.subscribe((queryParam: any) => {
      this.reqSearch = queryParam['search_text'];
    });

    // this.searchService.getBySearch(this.reqSearch);
    await this.searchService.getBySearch(this.reqSearch).subscribe(
      (res) => {
        this.listProduct = res.resProduct;
        this.listNumberCategory = res.resCategory;

        this.loaderProduct = false;
        this.loaderSelect = false;
      },
      (e) => {
        console.log(e);
      }
    );
    this.listCategory = this.catagoryName.categoryList;
    // console.log(this.listCategory);
  }

  ngDoCheck(): void {}

  ngOnDestroy(): void {
    // this.productS.productList = [];
  }

  // Develope Mode === START
  UrlServer: string = 'http://localhost:5000/';
  // Develope Mode === END

  // Loader Component
  loaderProduct: boolean = true;
  loaderSelect: boolean = true;

  /* Sidebar */

  listNumberCategory = []; // Category List

  listCategory: Category[] = []; // All Category

  filterSearch(checked: boolean, input: HTMLInputElement, category: object) {
    console.log(checked);
    console.log(input);
    const title = this.reqSearch;
    const categoryId = category;
    console.log(title);
    console.log(categoryId);

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

  listProduct: Product[] = []; // Product List

  /* Body */
}
