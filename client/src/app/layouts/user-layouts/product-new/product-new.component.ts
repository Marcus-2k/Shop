import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { InputData } from "src/app/shared/interface/pages/product-new/interfaces";

import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestProductService } from "src/app/shared/service/server/request-product.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import {
  ProductNewActions,
  ProductNewState,
} from "src/app/store/product-new/product-new.action";
import { ProductNewSelector } from "src/app/store/product-new/product-new.selector";

@Component({
  selector: "app-product-new",
  templateUrl: "./product-new.component.html",
  styleUrls: ["./product-new.component.scss"],
})
export class ProductNewComponent implements OnInit, OnDestroy {
  constructor(
    private showNotice: ShowNoticeService,
    private requestProduct: RequestProductService,
    private route: ActivatedRoute,
    private router: Router,
    private store$: Store,
    private renameTitle: RenameTitleService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Product-New");

    this.route.params.subscribe((params: Params) => {
      const id: string = params["id"];

      if (params["id"]) {
        this.renameTitle.renameTitleSite("Змінення товару");

        this.update = true;

        this.requestProduct.getByIdProduct(id).subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {},
        });
      } else {
        this.renameTitle.renameTitleSite("Створення товару");
        this.store$.dispatch(ProductNewActions.initialState());

        this.productNewStore$ = this.store$
          .select(ProductNewSelector.getProductNew)
          .subscribe((data) => {
            this.updateInputData(data);
          });
      }
    });
  }
  ngOnDestroy(): void {
    if (this.productNewStore$) {
      this.productNewStore$.unsubscribe();
    }
  }

  test() {
    console.log("======================================");
    console.log("======================================");
  }

  // Common variables START ========================================================================================================================
  InputData: InputData = {
    photoData: {
      maxCounterFile: 8,
    },
    titleData: {
      name: "",
      minLengthName: 12,
      maxLengthName: 50,
    },
    priceData: {
      price: null,
      action: false,
      actionPrice: null,
      actionProcent: null,
      minActionProcent: -5,
    },
    statusData: {
      counter: null,
      status: null,
    },
    categoryData: {
      categoryNumber: null,
      categoryName: null,
      categorySelected: false,
      categoryError: null,
    },
    characteristicsData: {
      categoryNumber: undefined,
      characteristicsNumber: undefined,
    },
    keywordsData: {
      keywords: "",
      minLengthKeywords: undefined, // temporarily not used
      maxLengthKeywords: 200,

      minLengthWord: 2,
      maxLengthWord: 10,
    },
    descriptionData: {
      description: "",
      minLengthDescription: 60,
      maxLengthDescription: 5000,
    },

    appearance: "outline",
  };

  update: boolean = false; // Mode update true/false

  productNewStore$: Subscription | undefined;

  updateInputData(data: ProductNewState) {
    console.log("START updateInputData");

    if (data.dataProduct) {
      // Name
      this.InputData.titleData.name = data.dataProduct.titleData.name_present;

      // Price
      this.InputData.priceData.price = data.dataProduct.priceData.price_present;
      this.InputData.priceData.action =
        data.dataProduct.priceData.action_present;
      this.InputData.priceData.actionPrice =
        data.dataProduct.priceData.actionPrice_present;

      // Status
      this.InputData.statusData.counter =
        data.dataProduct.statusData.counter_present;
      this.InputData.statusData.status =
        data.dataProduct.statusData.status_present;

      // Category
      this.InputData.categoryData.categoryNumber =
        data.dataProduct.categoryData.categoryNumber_present;
      this.InputData.categoryData.categoryName =
        data.dataProduct.categoryData.categoryName_present;
      this.InputData.categoryData.categorySelected =
        data.dataProduct.categoryData.categorySelected;
      this.InputData.categoryData.categoryError =
        data.dataProduct.categoryData.categoryError;

      // Description
      this.InputData.descriptionData.description =
        data.dataProduct.descriptionData.description_present;
    }

    console.log("END updateInputData");
  }

  // Common variables END ==========================================================================================================================
  // Create/Up Start ===============================================================================================================================
  // createProduct() {
  //   console.log("Button Create");

  //   if (
  //     this.imagesValidation &&
  //     this.nameProduct.length >= this.minLengthNameProduct &&
  //     ((this.action && this.actionProcent < this.minActionProcent) ||
  //       this.action === false) &&
  //     this.counterProduct >= 0 &&
  //     this.validityCharacteristics &&
  //     (this.statusNumber === 0 ||
  //       this.statusNumber === 1 ||
  //       this.statusNumber === 2 ||
  //       this.statusNumber === 3) &&
  //     this.validityKeywords &&
  //     this.lengthKeywords <= this.maxLengthKeywords &&
  //     this.description.length > this.minLengthDescription &&
  //     this.description.length < this.maxLengthDescription
  //   ) {
  //     console.log("Create FormData");

  //     const formData = new FormData();

  //     const imagesArray = Array.from(this.images);
  //     imagesArray.forEach((img, idx) => {
  //       if (img) {
  //         formData.append(`image-${idx}`, img, img.name); // Add photo product
  //       }
  //       console.log(`image-${idx}`);
  //       console.log(formData.get(`image-${idx}`));
  //     });

  //     formData.append("name", this.nameProduct); // Телефон Samsung S21 Ulta
  //     formData.append("price", String(this.priceProduct)); // Add 4500 >>> "4500"

  //     if (this.action === true) {
  //       formData.append("action", "1"); // "1" >>> true
  //       formData.append("actionPrice", this.actionPrice.toString()); // 4050 >>> "4050"
  //     } else if (this.action === false) {
  //       formData.append("action", "0"); // "0" >>> false
  //     }

  //     formData.append("counter", this.counterProduct.toString()); // 5 >>> "5"
  //     formData.append("category", this.categoryNumber.join(" ")); //  [ 5, 0, 8 ] >>> "5 0 8"
  //     formData.append("characteristics", this.characteristicsNumber.join("-")); // [ [4], [1], [2], [13, 10, 9] ] >>> "4-1-2-13,10,9"
  //     formData.append("status", this.statusNumber.toString()); // 0 >>> "0"
  //     formData.append("keywords", this.keywordsArray.join(" ")); // ['hi', 'hello', 'no', 'cool', 'descript'] >>> 'hi hello no cool descript'
  //     formData.append("description", this.description); // Екран 14" IPS (1920x1080) Full HD, матовий / Intel Core i3-1115G4

  //     console.log("Send FormData");

  //     this.requestProduct.createProduct(formData).subscribe(
  //       (res) => {
  //         this.showNotice.message("Товар створено успішно.");
  //         this.afterCreateUpdateProduct();
  //       },
  //       (e) => {
  //         console.log(e);
  //         this.showNotice.message("Помилка на серверові.");
  //       }
  //     );
  //   } else {
  //     this.showNotice.message(
  //       "Товар не було створено, дані заповнено невірно."
  //     );
  //   }
  // }

  // upProduct() {
  //   console.log("Button Save");

  //   if (this.up_Product) {
  //     console.log("Create FormData");
  //     const formData = new FormData();

  //     if (this.imagesValidation) {
  //       const imagesArray = Array.from(this.images);
  //       imagesArray.forEach((img, idx) => {
  //         if (img) {
  //           formData.append(`image-${idx}`, img, img.name); // Add photo product
  //         }
  //         console.log(`image-${idx}`);
  //         console.log(formData.get(`image-${idx}`));
  //       });
  //     }
  //     if (this.up_Product.name !== this.nameProduct) {
  //       formData.append("name", this.nameProduct); // Телефон Samsung S21 Ulta
  //     }
  //     if (this.up_Product.price !== this.priceProduct) {
  //       formData.append("price", String(this.priceProduct)); // Add 4500 >>> "4500"
  //     }
  //     if (this.action !== this.up_Product.action) {
  //       if (this.action === false) {
  //         formData.append("action", "0"); // 0 == false
  //       } else if (
  //         this.action === true &&
  //         this.actionProcent < this.minActionProcent
  //       ) {
  //         formData.append("action", "1"); // 1 == true
  //         formData.append("actionPrice", this.actionPrice.toString()); // 4050 >>> "4050"
  //       }
  //     } else if (this.up_Product.actionPrice !== this.actionPrice) {
  //       formData.append("actionPrice", this.actionPrice.toString()); // 4050 >>> "4050"
  //     }
  //     if (this.up_Product.counter !== this.counterProduct) {
  //       formData.append("counter", this.counterProduct.toString()); // 5 >>> "5"
  //     }
  //     if (
  //       this.validityCharacteristics === true &&
  //       this.up_validityCharacteristics === false &&
  //       this.up_newCharacteristics === true
  //     ) {
  //       formData.append(
  //         "characteristics",
  //         this.characteristicsNumber.join("-")
  //       ); // [ [4], [1], [2], [13, 10, 9] ] >>> "4-1-2-13,10,9"
  //     } else if (
  //       this.validityCharacteristics === true &&
  //       this.up_validityCharacteristics === false &&
  //       this.up_newCharacteristics === false
  //     ) {
  //       formData.append("category", this.categoryNumber.join(" ")); //  [ 5, 0, 8 ] >>> "5 0 8"
  //       formData.append(
  //         "characteristics",
  //         this.characteristicsNumber.join("-")
  //       ); // [ [4], [1], [2], [13, 10, 9] ] >>> "4-1-2-13,10,9"
  //     }
  //     if (this.up_Product.status !== this.statusNumber) {
  //       formData.append("status", this.statusNumber.toString()); // 0 >>> "0"
  //     }
  //     if (!this.up_validityKeywords) {
  //       formData.append("keywords", this.keywordsArray.join(" ")); // ['hi', 'hello', 'no', 'cool', 'descript'] >>> 'hi hello no cool descript'
  //     }
  //     if (this.up_Product.description !== this.description) {
  //       formData.append("description", this.description); // Екран 14" IPS (1920x1080) Full HD, матовий / Intel Core i3-1115G4
  //     }

  //     console.log("Send FormData");

  //     this.requestProduct.updateById(formData, this.up_Product._id).subscribe(
  //       (response) => {
  //         this.showNotice.message("Товар успішно змінено.");
  //         this.afterCreateUpdateProduct();
  //       },
  //       (error) => {
  //         console.log(error);
  //         this.showNotice.message(
  //           "Товар не було змінено, дані заповнено не коректно"
  //         );
  //       }
  //     );
  //   } else {
  //     this.showNotice.message(
  //       "Товар не було збережено, дані заповнено не коректно"
  //     );
  //   }
  // }

  afterCreateUpdateProduct() {
    this.router.navigate(["/account/product"]);
  }
  // Create/Up END =================================================================================================================================
}
