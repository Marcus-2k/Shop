import { Component, OnInit, OnDestroy } from "@angular/core";
import { CategoryProduct } from "src/app/shared/interface/interfaces";
import { RequestCatalogService } from "src/app/shared/service/server/request-catalog.service";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"],
})
export class CatalogComponent implements OnInit, OnDestroy {
  constructor(private requestCatalog: RequestCatalogService) {}

  ngOnInit(): void {
    this.requestCatalog.getCategory().subscribe(
      (responce) => {
        console.log(responce);
        this.category = responce;

        this.loader = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnDestroy(): void {
    this.category = [];
  }

  loader: boolean = true;

  category: CategoryProduct[] = [];

  activeCategory: number = 0;

  editActiveCategory(idx: number) {
    this.activeCategory = idx;
  }
}
