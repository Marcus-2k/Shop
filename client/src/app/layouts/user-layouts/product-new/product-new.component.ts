import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Data, Router } from "@angular/router";
import {
  CategoryProduct_Characteristics,
  Options,
  ProductUpdate,
} from "src/app/shared/interface/interfaces";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestCatalogService } from "src/app/shared/service/server/request-catalog.service";
import { RequestProductService } from "src/app/shared/service/server/request-product.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";
import { environment } from "src/environments/environment";

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
    private renameTitle: RenameTitleService,
    private requestCatalog: RequestCatalogService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Product-New");

    this.route.params.subscribe((params: Data) => {
      const id: string = params["id"];

      if (params["id"]) {
        this.renameTitle.renameTitleSite("Змінення товару");

        this.update = true;

        this.requestProduct.getByIdProduct(id).subscribe(
          (responce) => {
            this.updateOnInit(responce);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        this.renameTitle.renameTitleSite("Створення товару");
      }
    });

    this.requestCatalog.getCategoryAndCharacteristics().subscribe(
      (responce) => {
        console.log(responce);
        this.categoryList = responce;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnDestroy(): void {
    this.categoryList = [];
  }
  test() {
    console.log("======================================");
    // console.log(this.imagesValidation);
    // console.log(this.images);
    // console.log(this.imagePreview);
    // console.log(this.validityCharacteristics);
    // console.log(this.up_validityCharacteristics);
    // console.log(this.up_newCharacteristics);
    console.log("======================================");
  }

  body = document.getElementById("body");
  // Update product START ==========================================================================================================================
  update: boolean = false; // Mode update true/false

  up_Product?: ProductUpdate;

  private HOST: string = environment.HOST;
  private PORT: string = environment.PORT;
  url_server_folder: string = `http://${this.HOST}${this.PORT}/`;

  updateOnInit(product: ProductUpdate) {
    if (this.update) {
      this.up_Product = product;

      // Image
      this.imagePreview = product.imageSrc;
      const needItem = this.maxCounterFile - product.imageSrc.length;
      for (let idx = 0; idx < needItem; idx++) {
        this.imagePreview.push(undefined);
      }

      // Name
      this.nameProduct = product.name;

      // Price
      this.priceProduct = product.price;

      // Action / Price
      this.action = product.action;
      if (product.action) {
        this.actionPrice = product.actionPrice;
        this.procentActionNumber();
      }

      // Counter
      this.counterProduct = product.counter;

      // Category
      this.oneIndex = product.category[0];
      this.twoIndex = product.category[1];
      this.threeIndex = product.category[2];
      this.createCategoryNumber();

      // Characteristics
      this.characteristicsNumber = Object.assign([], product.characteristics);

      this.up_newCharacteristics = true;
      this.up_validityCharacteristics = true;
      this.checkingValidityCharacteristics();

      // Status
      this.statusNumber = product.status;

      // Keywords
      this.keywords = product.keywords.join(" ");
      this.keyupInputKeywords(product.keywords.join(" "));

      // Description
      this.description = product.description;

      console.log(product);
    }
  }
  // Update product END ============================================================================================================================
  // File START ====================================================================================================================================
  @ViewChild("inputFile") inputFile?: ElementRef;

  errorImagesDownload: boolean = false; // if click button "Завантажити фото" but no select photo
  imagesValidation: boolean = false;

  images: File[] | undefined[] = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]; // Download image product
  imagePreview: any[] = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]; // Picture of the product on the site
  maxCounterFile: number = 8;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.imagePreview, event.previousIndex, event.currentIndex);
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }

  triggerClick() {
    this.inputFile?.nativeElement.click();

    this.errorImagesDownload = true;
    this.imagesValidation = false;
  } // Click button "Download photo"

  onFileUpload(event: any) {
    this.images = [];
    this.url_server_folder = "";

    const fileList: File[] = Array.from(event.target.files);
    const fileCounter = event.target.files.length;
    const needCart = this.maxCounterFile - fileCounter;

    this.images = fileList;

    this.imagePreview = [];

    for (let index = 0; index < needCart; index++) {
      this.imagePreview.push(undefined);
    } // No select photo

    let idx: number = fileCounter - 1; // 5 >> 4 >> 3 || unshift()

    for (const iterator of fileList) {
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview.unshift(reader.result);
      };
      reader.readAsDataURL(fileList[idx]);
      idx = idx - 1;
    }
    this.errorImagesDownload = false;
    this.imagesValidation = true;
  }

  deletePhoto() {
    if (this.update && this.imagesValidation && this.up_Product?.imageSrc) {
      this.images = [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ];

      this.imagePreview = this.up_Product?.imageSrc;

      const needItem = this.maxCounterFile - this.up_Product?.imageSrc.length;
      for (let idx = 0; idx < needItem; idx++) {
        this.imagePreview.push(undefined);
      }

      this.imagesValidation = false;
      this.url_server_folder = `http://${this.HOST}${this.PORT}/api`;
    }
  }
  // File END ======================================================================================================================================
  // Name START ====================================================================================================================================
  nameProduct: string = "";
  minLengthNameProduct = 5;
  // Name END ======================================================================================================================================
  // Price START ===================================================================================================================================
  priceProduct: number = 3300;
  // Price END =====================================================================================================================================
  // Action / Action-Price Start ===================================================================================================================
  action: boolean = false;
  actionPrice: number = 2970;

  actionProcent: number = -10;
  minActionProcent: number = -5;

  procentActionNumber() {
    let newAction: number =
      (100 * (this.actionPrice - this.priceProduct)) / this.priceProduct;
    let newActionFixed = newAction.toFixed(2);
    this.actionProcent = Number(newActionFixed);
  }
  // Action / Action-Price END =====================================================================================================================
  // Counter START =================================================================================================================================
  counterProduct: number = 10;
  // Counter END ===================================================================================================================================
  // Popuap Select Category START ==================================================================================================================
  categoryList: CategoryProduct_Characteristics[] = []; // Category List

  popuapShow: boolean = false; // Popuap On/Off
  categorySelected: boolean = false; // Show select option
  categoryErrorShow: boolean = false; // True в тому випадку якщо категорія не вибрана, і при умові що було відкрите вікно вибору.

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
    this.createCategoryNumber();

    this.popuapClose(false);
  }

  resetCategory() {
    // Reset index
    this.oneIndex = -1;
    this.twoIndex = -1;
    this.threeIndex = -1;

    // Reset block
    this.oneCategory = false;
    this.twoCategory = false;
    this.threeCategory = false;

    this.categoryErrorShow = false;
  }
  createCategoryNumber() {
    this.categoryNumber = [];

    this.categoryNumber.push(this.oneIndex);
    this.categoryNumber.push(this.twoIndex);
    if (this.threeIndex !== -1) {
      this.categoryNumber.push(this.threeIndex);
    }

    this.categorySelected = true;
    this.categoryErrorShow = false;

    if (this.update) {
      this.up_validityCharacteristics = false;
      this.up_newCharacteristics = false;
    }

    this.resetCharacteristics();
    this.getCharacteristics();
  } // Create "categoryNumber" >>> [ 1, 0, 3 ] || [ 1, 2 ]

  popuapOpen() {
    console.log("Popuap Open");

    this.popuapShow = true; // Open Popuap

    this.body?.classList.add("active"); // For body style overflow: hidden;

    // Index
    this.oneIndex = -1;
    this.twoIndex = -1;
    this.threeIndex = -1;
    // Block
    this.oneCategory = false;
    this.twoCategory = false;
    this.threeCategory = false;

    this.categorySelected = false;
  }
  popuapClose(errorSelected: boolean) {
    console.log("Popuap Close");

    if (errorSelected === true) {
      this.popuapShow = false; // Close Popuap

      this.body?.classList.remove("active"); // Delete class "active"

      this.categoryErrorShow = true;
    } else if (errorSelected === false) {
      this.popuapShow = false; // Close Popuap

      this.body?.classList.remove("active"); // Delete class "active"
      this.categoryErrorShow = false;
    }
  }
  // Popuap Select Category END ====================================================================================================================
  // Characteristics START =========================================================================================================================
  characteristics: Options[] = [];

  characteristicsNumber: number[] = [];

  selectCollection: HTMLCollection = document.getElementsByClassName(
    "characteristics-select"
  );

  validityCharacteristics: boolean = false; // if there is -1 >>> false
  up_validityCharacteristics: boolean = false; // this.characteristicsNumber === this.up_Product.characteristics | update mode
  up_newCharacteristics: boolean = false; // | update mode

  checkingValidityCharacteristics() {
    // if the array contains -1
    if (this.characteristicsNumber.indexOf(-1) >= 0) {
      this.validityCharacteristics = false;

      // if the array does not have -1
    } else if (this.characteristicsNumber.indexOf(-1) === -1) {
      this.validityCharacteristics = true;

      if (this.up_newCharacteristics === true) {
        let counterRepeat: number = 0;

        this.up_Product?.characteristics.forEach((item, idx) => {
          if (this.characteristicsNumber[idx] === item) {
            counterRepeat++;
          }
        });

        if (counterRepeat === this.up_Product?.characteristics.length) {
          this.up_validityCharacteristics = true;
        } else {
          this.up_validityCharacteristics = false;
        }
      }
    }
  }
  getCharacteristics() {
    this.characteristics =
      this.categoryList[this.categoryNumber[0]].nameListCategory[
        this.categoryNumber[1]
      ].subNameListCategory[this.categoryNumber[2]].characteristics;
    this.recordCharacteristicsInArray();
  }
  recordCharacteristicsInArray() {
    this.characteristics.forEach((element, idx) => {
      this.characteristicsNumber.push(-1);
    });

    this.checkingValidityCharacteristics();
  }
  resetCharacteristics() {
    this.characteristics = [];

    this.characteristicsNumber = [];
  }
  // Characteristics END ===========================================================================================================================
  // Status START ==================================================================================================================================
  statusNumber: number = -1;
  // Status END ====================================================================================================================================
  // Keywords START ================================================================================================================================
  keywordsArray: string[] = [];
  keywords: string = "";

  lengthKeywords: number = 0;
  validityKeywords: boolean = true;
  up_validityKeywords: boolean = true;

  minwordLength: number = 2;
  maxwordLength: number = 10;

  maxLengthKeywords: number = 200;

  keyupInputKeywords(value: string) {
    this.keywordsArray = value.replace(/ +/g, " ").trim().split(" ");
    this.lengthKeywords = value.replace(/\s+/g, "").length;

    if (this.keywordsArray[0].length === 0) {
      this.keywordsArray = [];
      this.validityKeywords = true;
    } else {
      this.checkingValidityKeywords();
    }
  }
  checkingValidityKeywords() {
    for (let index = 0; index < this.keywordsArray.length; index++) {
      if (
        this.keywordsArray[index].length < this.minwordLength ||
        this.keywordsArray[index].length > this.maxwordLength
      ) {
        this.validityKeywords = false;
        break;
      }
      this.validityKeywords = true;
    }
    if (this.update) {
      this.up_checheckingKeywords();
    }
  } // Checking of the all keywords inputted correct
  deleteErrorKeywords() {
    for (let index = 0; index < this.keywordsArray.length; index++) {
      if (
        this.keywordsArray[index].length < this.minwordLength ||
        this.keywordsArray[index].length > this.maxwordLength
      ) {
        this.keywordsArray.splice(index, 1);
        index--;
      }
    } // ['hi', 'hello', 'n', 'cool', 'description'] >> ['hi', 'hello', 'cool']

    this.validityKeywords = true;
    this.keywords = this.keywordsArray.join(" ");
  } // Delete all error keywords
  up_checheckingKeywords() {
    let counterRepeat: number = 0;

    this.up_Product?.keywords.forEach((word) => {
      if (this.keywordsArray.indexOf(word) >= 0) {
        counterRepeat++;
      }
    });

    if (counterRepeat === this.keywordsArray.length) {
      this.up_validityKeywords = true;
    } else {
      this.up_validityKeywords = false;
    }
  }
  // Keywords END ==================================================================================================================================
  // Description Start =============================================================================================================================
  description: string = "";
  minLengthDescription: number = 60;
  maxLengthDescription: number = 5000;
  // Description END ===============================================================================================================================
  // Create/Up Start ===============================================================================================================================
  createProduct() {
    console.log("Button Create");

    if (
      this.imagesValidation &&
      this.nameProduct.length >= this.minLengthNameProduct &&
      ((this.action && this.actionProcent < this.minActionProcent) ||
        this.action === false) &&
      this.counterProduct >= 0 &&
      this.validityCharacteristics &&
      (this.statusNumber === 0 ||
        this.statusNumber === 1 ||
        this.statusNumber === 2 ||
        this.statusNumber === 3) &&
      this.validityKeywords &&
      this.lengthKeywords <= this.maxLengthKeywords &&
      this.description.length > this.minLengthDescription &&
      this.description.length < this.maxLengthDescription
    ) {
      console.log("Create FormData");

      const formData = new FormData();

      const imagesArray = Array.from(this.images);
      imagesArray.forEach((img, idx) => {
        if (img) {
          formData.append(`image-${idx}`, img, img.name); // Add photo product
        }
        console.log(`image-${idx}`);
        console.log(formData.get(`image-${idx}`));
      });

      formData.append("name", this.nameProduct); // Телефон Samsung S21 Ulta
      formData.append("price", String(this.priceProduct)); // Add 4500 >>> "4500"

      if (this.action === true) {
        formData.append("action", "1"); // "1" >>> true
        formData.append("actionPrice", this.actionPrice.toString()); // 4050 >>> "4050"
      } else if (this.action === false) {
        formData.append("action", "0"); // "0" >>> false
      }

      formData.append("counter", this.counterProduct.toString()); // 5 >>> "5"
      formData.append("category", this.categoryNumber.join(" ")); //  [ 5, 0, 8 ] >>> "5 0 8"
      formData.append("characteristics", this.characteristicsNumber.join(" ")); // [ 4, 1, 2, 13, 0, 21 ] >>> "4 1 2 13 0 21"
      formData.append("status", this.statusNumber.toString()); // 0 >>> "0"
      formData.append("keywords", this.keywordsArray.join(" ")); // ['hi', 'hello', 'no', 'cool', 'descript'] >>> 'hi hello no cool descript'
      formData.append("description", this.description); // Екран 14" IPS (1920x1080) Full HD, матовий / Intel Core i3-1115G4

      console.log("Send FormData");

      this.requestProduct.createProduct(formData).subscribe(
        (res) => {
          this.showNotice.message("Товар створено успішно.");
          this.afterCreateUpdateProduct();
        },
        (e) => {
          console.log(e);
          this.showNotice.message("Помилка на серверові.");
        }
      );
    } else {
      this.showNotice.message(
        "Товар не було створено, дані заповнено невірно."
      );
    }
  }

  upProduct() {
    console.log("Button Save");

    if (this.up_Product) {
      console.log("Create FormData");
      const formData = new FormData();

      if (this.imagesValidation) {
        const imagesArray = Array.from(this.images);
        imagesArray.forEach((img, idx) => {
          if (img) {
            formData.append(`image-${idx}`, img, img.name); // Add photo product
          }
          console.log(`image-${idx}`);
          console.log(formData.get(`image-${idx}`));
        });
      }
      if (this.up_Product.name !== this.nameProduct) {
        formData.append("name", this.nameProduct); // Телефон Samsung S21 Ulta
      }
      if (this.up_Product.price !== this.priceProduct) {
        formData.append("price", String(this.priceProduct)); // Add 4500 >>> "4500"
      }
      if (this.action !== this.up_Product.action) {
        if (this.action === false) {
          formData.append("action", "0"); // 0 == false
        } else if (
          this.action === true &&
          this.actionProcent < this.minActionProcent
        ) {
          formData.append("action", "1"); // 1 == true
          formData.append("actionPrice", this.actionPrice.toString()); // 4050 >>> "4050"
        }
      } else if (this.up_Product.actionPrice !== this.actionPrice) {
        formData.append("actionPrice", this.actionPrice.toString()); // 4050 >>> "4050"
      }
      if (this.up_Product.counter !== this.counterProduct) {
        formData.append("counter", this.counterProduct.toString()); // 5 >>> "5"
      }
      if (
        this.validityCharacteristics === true &&
        this.up_validityCharacteristics === false &&
        this.up_newCharacteristics === true
      ) {
        formData.append(
          "characteristics",
          this.characteristicsNumber.join(" ")
        ); // [ 4, 1, 2, 13, 0, 21 ] >>> "4 1 2 13 0 21"
      } else if (
        this.validityCharacteristics === true &&
        this.up_validityCharacteristics === false &&
        this.up_newCharacteristics === false
      ) {
        formData.append("category", this.categoryNumber.join(" ")); //  [ 5, 0, 8 ] >>> "5 0 8"
        formData.append(
          "characteristics",
          this.characteristicsNumber.join(" ")
        ); // [ 4, 1, 2, 13, 0, 21 ] >>> "4 1 2 13 0 21"
      }
      if (this.up_Product.status !== this.statusNumber) {
        formData.append("status", this.statusNumber.toString()); // 0 >>> "0"
      }
      if (!this.up_validityKeywords) {
        formData.append("keywords", this.keywordsArray.join(" ")); // ['hi', 'hello', 'no', 'cool', 'descript'] >>> 'hi hello no cool descript'
      }
      if (this.up_Product.description !== this.description) {
        formData.append("description", this.description); // Екран 14" IPS (1920x1080) Full HD, матовий / Intel Core i3-1115G4
      }

      console.log("Send FormData");

      this.requestProduct.updateById(formData, this.up_Product._id).subscribe(
        (responce) => {
          this.showNotice.message("Товар успішно змінено.");
          this.afterCreateUpdateProduct();
        },
        (e) => {
          console.log(e);
          this.showNotice.message(
            "Товар не було змінено, дані заповнено не коректно"
          );
        }
      ); // Send to server
    } else {
      this.showNotice.message(
        "Товар не було збережено, дані заповнено не коректно"
      );
    }
  }

  afterCreateUpdateProduct() {
    this.router.navigate(["/account/product"]);
  }
  // Create/Up END =================================================================================================================================
}
