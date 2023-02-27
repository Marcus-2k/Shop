import { Component, Input, OnInit } from "@angular/core";

import { InputData_Category } from "src/app/shared/interface/pages/product-new/interfaces";

import { OpenDialogService } from "src/app/shared/service/open-dialog.service";

@Component({
  selector: "app-product-new-category",
  templateUrl: "./product-new-category.component.html",
  styleUrls: ["./product-new-category.component.scss"],
})
export class ProductNewCategoryComponent implements OnInit {
  constructor(private openDialog: OpenDialogService) {}

  @Input() InputData_Category: InputData_Category | undefined;
  @Input() update: boolean = false; // Default value = false

  ngOnInit(): void {}

  categorySelected: boolean = false;
  categoryErrorShow: boolean = false;

  categoryListNumber: number[] = [];
  categoryListName: string[] = [];

  openCatalog() {
    console.log("Catalog Open");

    this.openDialog.openProductNewCatlogWindow().subscribe((data) => {
      console.log("Catalog Close");
      console.log("Вибрана категорія >>> ", data);

      if (data) {
        this.categoryListNumber = data.categoryListNumber;
        this.categoryListName = data.categoryListName;

        this.categorySelected = true;
        this.categoryErrorShow = false;
      } else {
        this.categoryListNumber = [];
        this.categoryListName = [];

        this.categorySelected = false;
        this.categoryErrorShow = true;
      }
    });
  }
}
