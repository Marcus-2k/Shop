import { Component, OnInit } from "@angular/core";
import { CategoryProduct } from "src/app/shared/interface/interfaces";
import { CategoryProductService } from "src/app/shared/service/category-product.service";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"],
})
export class CatalogComponent implements OnInit {
  constructor(private categoryName: CategoryProductService) {}

  ngOnInit(): void {
    this.category = this.categoryName.categoryList;
  }

  category: CategoryProduct[] = [];

  activeCategory: number = 0;

  editActiveCategory(idx: number) {
    this.activeCategory = idx;
  }
}
