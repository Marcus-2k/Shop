import { Component, Input, OnInit } from "@angular/core";

import { InputData_Category } from "src/app/shared/interface/pages/product-new/interfaces";

import { OpenDialogService } from "src/app/shared/service/open-dialog.service";

import { Store } from "@ngrx/store";
import { ProductNewActions } from "src/app/store/product-new/product-new.action";

@Component({
  selector: "app-product-new-category",
  templateUrl: "./product-new-category.component.html",
  styleUrls: ["./product-new-category.component.scss"],
})
export class ProductNewCategoryComponent implements OnInit {
  constructor(private openDialog: OpenDialogService, private store$: Store) {}

  @Input() InputData_Category: InputData_Category | undefined;
  @Input() update: boolean = false; // Default value = false

  ngOnInit(): void {}

  openCatalog() {
    console.log("Catalog Open");

    this.openDialog.openProductNewCatlogWindow().subscribe((data) => {
      console.log("Catalog Close");
      console.log("Вибрана категорія >>> ", data);

      if (this.InputData_Category) {
        if (data) {
          this.InputData_Category.categoryNumber = data.categoryListNumber;
          this.InputData_Category.categoryName = data.categoryListName;

          this.InputData_Category.categorySelected = true;
          this.InputData_Category.categoryError = false;

          this.updateCategoryStore();
        } else {
          this.InputData_Category.categoryNumber = null;
          this.InputData_Category.categoryName = null;

          this.InputData_Category.categorySelected = false;
          this.InputData_Category.categoryError = true;

          this.updateCategoryStore();
        }
      }
    });
  }

  updateCategoryStore() {
    if (this.InputData_Category) {
      this.store$.dispatch(
        ProductNewActions.updateCategory({
          categoryNumberValue: this.InputData_Category.categoryNumber,
          categoryNameValue: this.InputData_Category.categoryName,
          categorySelected: this.InputData_Category.categorySelected,
          categoryError: this.InputData_Category.categoryError,
        })
      );

      if (this.InputData_Category.categoryNumber) {
        this.store$.dispatch(
          ProductNewActions.getCharacteristics({
            categoryNumber: this.InputData_Category.categoryNumber,
          })
        );

        this.store$.dispatch(ProductNewActions.resetCharacteristics());
      }
    }
  }
}
