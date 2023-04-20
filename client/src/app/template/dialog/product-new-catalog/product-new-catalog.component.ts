import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { DialogData_ProductNewCatalog } from "src/app/shared/interface/dialog/dialog.interfaces";
import { CATEGORY } from "src/app/shared/interface/interfaces";

import { RequestCategoryService } from "src/app/shared/service/server/request-category.service";

@Component({
  selector: "app-product-new-catalog",
  templateUrl: "./product-new-catalog.component.html",
  styleUrls: ["./product-new-catalog.component.scss"],
})
export class ProductNewCatalogComponent implements OnInit {
  constructor(
    private requestCategory: RequestCategoryService,
    public dialogRef: MatDialogRef<
      ProductNewCatalogComponent,
      DialogData_ProductNewCatalog | undefined
    >,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData_ProductNewCatalog | undefined
  ) {}

  ngOnInit(): void {
    this.requestCategory.getCategory().subscribe({
      next: (data) => {
        this.categoryList = data;
      },
      error: (error) => {},
      complete: () => {},
    });
  }

  categoryList: CATEGORY[] = [];

  oneIndex: number = -1;
  twoIndex: number = -1;
  threeIndex: number = -1;

  oneCategory: boolean = false; // Show block for select category "1" lvl
  twoCategory: boolean = false; // Show block for select category "2" lvl
  threeCategory: boolean = false; // Show block for select category "3" lvl

  categoryNumber: number[] = [];

  selectCategoryFirst(index: number) {
    this.oneIndex = index;
    this.oneCategory = true;
    this.twoCategory = true;
  }

  // Edit the selected lvl 1 category
  editOneCategory(index: number) {
    this.oneIndex = index;
    this.twoIndex = -1;
    this.threeIndex = -1;
    this.threeCategory = false;
  }
  // Edit the selected lvl 2 category
  editTwoCategory(index: number) {
    this.twoIndex = index;
    this.threeIndex = -1;
    this.threeCategory = true;
  }
  // Edit the selected lvl 3 category
  editThreeCategory(index: number) {
    this.threeIndex = index;
  }

  selectThisCategory() {
    this.categoryNumber = [];
    let categoryListName: string[] = [];

    this.categoryNumber.push(this.oneIndex);
    categoryListName.push(this.categoryList[this.oneIndex].nameCategory);

    this.categoryNumber.push(this.twoIndex);
    categoryListName.push(
      this.categoryList[this.oneIndex].nameListCategory[this.twoIndex]
        .subNameCategory
    );

    if (this.threeIndex !== -1) {
      this.categoryNumber.push(this.threeIndex);
      categoryListName.push(
        this.categoryList[this.oneIndex].nameListCategory[this.twoIndex]
          .subNameListCategory[this.threeIndex].titleSubNameListCategory
      );
    }

    this.dialogRef.close({
      categoryListName,
      categoryListNumber: this.categoryNumber,
    });
  } // Create "categoryNumber" >>> [ 1, 0, 3 ] || [ 1, 2 ]
}
