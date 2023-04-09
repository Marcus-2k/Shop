import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { CATALOG } from "src/app/shared/interface/interfaces";

import { RequestCatalogService } from "src/app/shared/service/server/request-catalog.service";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"],
})
export class CatalogComponent implements OnInit, OnDestroy {
  constructor(
    private requestCatalog: RequestCatalogService,
    public dialogRef: MatDialogRef<CatalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {}

  ngOnInit(): void {
    this.requestCatalog.getCategory().subscribe(
      (response) => {
        console.log(response);
        this.category = response;

        if (this.windowWidth <= 1024) {
          this.activeCategory = -1;
        }

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

  category: CATALOG[] = [];
  activeCategory: number = 0;

  mouseEnterEditActiveCategory(idx: number) {
    this.activeCategory = idx;
  }
  clickEditActiveCategory(idx: number) {
    this.activeCategory = idx;
    this.activeBlockMobile = true;
  }

  // Media Adaptability START =============================================
  windowWidth: number = window.innerWidth;

  activeBlockMobile: boolean = false;

  returnToCategorySelection() {
    this.activeCategory = -1;
    this.activeBlockMobile = false;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  // Media Adaptability END =============================================
}
