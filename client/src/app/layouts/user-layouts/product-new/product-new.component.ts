import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { InputData } from "src/app/shared/interface/pages/product-new/interfaces";
import { HttpErrorResponse } from "@angular/common/http";

import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestProductService } from "src/app/shared/service/server/request-product.service";
import { OpenSnackBarService } from "src/app/shared/service/open-snack-bar.service";

import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import {
  ProductNewActions,
  ProductNewState,
} from "src/app/store/product-new/product-new.action";
import { UserProductActions } from "src/app/store/product/product.action";
import { ProductNewSelector } from "src/app/store/product-new/product-new.selector";

@Component({
  selector: "app-product-new",
  templateUrl: "./product-new.component.html",
  styleUrls: ["./product-new.component.scss"],
})
export class ProductNewComponent implements OnInit, OnDestroy {
  constructor(
    private showMessage: OpenSnackBarService,
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
            this.store$.dispatch(ProductNewActions.initialState({ data }));

            this.productNewStore$ = this.store$
              .select(ProductNewSelector.getProductNew)
              .subscribe((data) => {
                this.updateInputData(data);
                this.loader = false;
              });
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {},
        });
      } else {
        this.renameTitle.renameTitleSite("Створення товару");

        this.store$
          .select(ProductNewSelector.getProductNew)
          .subscribe((data) => {
            if (
              data.dataProduct === null ||
              data.dataProduct.infoData.update === true
            ) {
              this.store$.dispatch(
                ProductNewActions.initialState({ data: null })
              );
            }
          })
          .unsubscribe();

        this.productNewStore$ = this.store$
          .select(ProductNewSelector.getProductNew)
          .subscribe((data) => {
            this.updateInputData(data);
            this.loader = false;
          });
      }
    });
  }
  ngOnDestroy(): void {
    if (this.productNewStore$) {
      this.productNewStore$.unsubscribe();
    }
  }

  InputData: InputData = {
    photoData: {
      photo_preview: null,
      maxCounterFile: 8,
    },
    titleData: {
      name: null,
      minLengthName: 12,
      maxLengthName: 50,
    },
    priceData: {
      price: null,
      maxPrice: 10000000,
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
      characteristicsNumber: null,
      characteristicsName: null,
    },
    keywordsData: {
      keywords: "",
      minLengthKeywords: undefined, // temporarily not used
      maxLengthKeywords: 200,

      minLengthWord: 2,
      maxLengthWord: 10,
    },
    descriptionData: {
      description: null,
      minLengthDescription: 60,
      maxLengthDescription: 5000,
    },

    appearance: "outline",
  };

  loader: boolean = true;
  update: boolean = false; // Mode update true || false

  images: (File | string)[] = [];

  productNewStore$: Subscription | undefined;

  updateInputData(data: ProductNewState) {
    console.log("START updateInputData");

    if (data.dataProduct) {
      // Photo
      this.InputData.photoData.photo_preview =
        data.dataProduct.photoData.photo_preview;

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

      // Characteristics
      this.InputData.characteristicsData.characteristicsNumber =
        data.dataProduct.characteristicsData.characteristics_present;
      this.InputData.characteristicsData.characteristicsName =
        data.dataProduct.characteristicsData.characteristicsName;

      // Keywords
      this.InputData.keywordsData.keywords =
        data.dataProduct.keywordsData.keywords_present;

      // Description
      this.InputData.descriptionData.description =
        data.dataProduct.descriptionData.description_present;
    }

    console.log("END updateInputData");
  }

  getPhoto(event: (File | string | undefined)[]) {
    this.images = [];

    event.forEach((value) => {
      if (value) {
        this.images.push(value);
      }
    });
  }

  createProduct() {
    let productState: ProductNewState | undefined;

    this.store$
      .select(ProductNewSelector.getProductNew)
      .subscribe((data) => (productState = data))
      .unsubscribe();

    if (productState && productState.dataProduct) {
      let formData: FormData = new FormData();
      let validData: boolean = true;
      let messageError: string[] = [];
      let imageSrc: string[] = [];

      // Photo
      if (this.images.length > 0) {
        const separatorPhoto = "?";

        this.images.forEach((value: File | string, idx: number) => {
          if (idx <= this.InputData.photoData.maxCounterFile) {
            if (typeof value === "string") {
              imageSrc.push(value);
            } else {
              formData.append("image-" + idx, value, value.name);
            }

            console.log("image-" + idx, formData.get("image-" + idx));
          }
        });

        if (imageSrc.length > 0) {
          formData.append("imageSrc", imageSrc.join(separatorPhoto));
        }
      } else {
        validData = false;
        messageError.push("Фото");
      }

      // Name
      if (productState.dataProduct.titleData.name_present !== null) {
        if (
          productState.dataProduct.titleData.name_present.length >=
            this.InputData.titleData.minLengthName &&
          productState.dataProduct.titleData.name_present.length <=
            this.InputData.titleData.maxLengthName
        ) {
          formData.append(
            "name",
            productState.dataProduct.titleData.name_present
          );
        } else {
          validData = false;
          messageError.push("Назва");
        }
      } else {
        validData = false;
        messageError.push("Назва");
      }

      // Price & Discount
      if (productState.dataProduct.priceData.price_present) {
        if (
          productState.dataProduct.priceData.price_present > 0 &&
          productState.dataProduct.priceData.price_present <=
            this.InputData.priceData.maxPrice
        ) {
          formData.append(
            "price",
            productState.dataProduct.priceData.price_present.toString()
          );
        } else {
          validData = false;
          messageError.push("Ціна");
        }
      } else {
        validData = false;
        messageError.push("Ціна");
      }
      if (productState.dataProduct.priceData.action_present) {
        formData.append("action", "1");

        if (productState.dataProduct.priceData.actionPrice_present) {
          formData.append(
            "actionPrice",
            productState.dataProduct.priceData.actionPrice_present.toString()
          );
        } else {
          validData = false;
          messageError.push("Акційна ціна");
        }
      } else {
        formData.append("action", "0");
      }

      // Status & Counter
      if (productState.dataProduct.statusData.counter_present !== null) {
        if (productState.dataProduct.statusData.counter_present >= 0) {
          formData.append(
            "counter",
            String(productState.dataProduct.statusData.counter_present)
          );

          if (productState.dataProduct.statusData.status_present !== null) {
            if (
              productState.dataProduct.statusData.status_present >= 0 &&
              productState.dataProduct.statusData.status_present <= 3
            ) {
              formData.append(
                "status",
                productState.dataProduct.statusData.status_present.toString()
              );
            } else {
              validData = false;
              messageError.push("Статус");
            }
          } else {
            validData = false;
            messageError.push("Статус");
          }
        } else {
          validData = false;
          messageError.push("Кількість");
          messageError.push("Статус");
        }
      } else {
        validData = false;
        messageError.push("Кількість");
        messageError.push("Статус");
      }

      // Category & Characteristics
      if (
        productState.dataProduct.categoryData.categoryNumber_present !== null
      ) {
        formData.append(
          "category",
          productState.dataProduct.categoryData.categoryNumber_present.join(" ")
        );

        if (
          productState.dataProduct.characteristicsData
            .characteristics_present !== null
        ) {
          const characteristics =
            productState.dataProduct.characteristicsData
              .characteristics_present;

          for (let idx = 0; idx < characteristics.length; idx++) {
            if (
              characteristics[idx].length === 0 ||
              characteristics[idx].includes(-1)
            ) {
              validData = false;
              messageError.push("Характеристики");
              break;
            }
          }

          if (!messageError.includes("Характеристики")) {
            formData.append(
              "characteristics",
              productState.dataProduct.characteristicsData.characteristics_present.join(
                "-"
              )
            );
          }
        } else {
          validData = false;
          messageError.push("Характеристики");
        }
      } else {
        validData = false;
        messageError.push("Категорія");
        messageError.push("Характеристики");
      }

      // Keywords
      if (productState.dataProduct.keywordsData.keywords_present !== null) {
        if (productState.dataProduct.keywordsData.keywords_present.length > 0) {
          const keywords =
            productState.dataProduct.keywordsData.keywords_present.split(" ");

          for (let idx = 0; idx < keywords.length; idx++) {
            if (keywords[idx].length < 2 || keywords[idx].length > 10) {
              validData = false;
              messageError.push("Ключові слова");
              break;
            }
          }

          if (!messageError.includes("Ключові слова")) {
            formData.append(
              "keywords",
              productState.dataProduct.keywordsData.keywords_present
            );
          }
        }
      } else {
        validData = false;
        messageError.push("Ключові слова");
      }

      // Description
      if (
        productState.dataProduct.descriptionData.description_present !== null
      ) {
        if (
          productState.dataProduct.descriptionData.description_present.length >=
            this.InputData.descriptionData.minLengthDescription &&
          productState.dataProduct.descriptionData.description_present.length <=
            this.InputData.descriptionData.maxLengthDescription
        ) {
          formData.append(
            "description",
            productState.dataProduct.descriptionData.description_present
          );
        } else {
          validData = false;
          messageError.push("Опис");
        }
      } else {
        validData = false;
        messageError.push("Опис");
      }

      if (validData) {
        if (this.update && productState.dataProduct.infoData._id) {
          this.requestProduct
            .updateById(formData, productState.dataProduct.infoData._id)
            .subscribe({
              next: (data) => {
                console.log(data);
                this.showMessage.open(data.message, undefined);
                this.store$.dispatch(
                  UserProductActions.setUserProduct({ product_list: null })
                );

                this.router.navigate(["/account/product"]);
              },
              error: (
                response: HttpErrorResponse & { error: { message: string } }
              ) => {
                console.log(response);
                if (response.status === 400) {
                  this.showMessage.open(response.error.message, undefined);
                }
              },
              complete: () => {},
            });
        } else {
          this.requestProduct.createProduct(formData).subscribe({
            next: (data) => {
              console.log(data);
              this.showMessage.open(data.message, undefined);
              this.store$.dispatch(
                UserProductActions.setUserProduct({ product_list: null })
              );

              this.router.navigate(["/account/product"]);
            },
            error: (
              response: HttpErrorResponse & { error: { message: string } }
            ) => {
              console.log(response);
              if (response.status === 400) {
                this.showMessage.open(response.error.message, undefined);
              }
            },
            complete: () => {},
          });
        }
      } else {
        this.showMessage.open(
          "Не правильно введені наступні дані > " +
            `[ ${messageError.join(", ")} ]`,
          undefined
        );
      }
    } else {
      // !
    }
  }
}
