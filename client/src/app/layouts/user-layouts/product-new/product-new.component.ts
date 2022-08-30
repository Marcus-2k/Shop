import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryProduct, Options } from "src/app/shared/interface/interfaces";
import { CategoryProductService } from "src/app/shared/service/category-product.service";

import { RequestProductService } from "src/app/shared/service/server/request-product.service";

import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

@Component({
  selector: "app-product-new",
  templateUrl: "./product-new.component.html",
  styleUrls: ["./product-new.component.scss"],
})
export class ProductNewComponent implements OnInit {
  constructor(
    private showNotice: ShowNoticeService,
    private requestProduct: RequestProductService,
    private categoryName: CategoryProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Product-New");

    this.categoryList = this.categoryName.categoryList;

    this.route.params.subscribe((value) => {
      // const id: string = Object.values(value)[0];
      // if (id) {
      //   this.renameTitle.renameTitleSite("Змінення товару");
      //   this.update = true;
      // } else {
      //   this.renameTitle.renameTitleSite("Створення товару");
      // }
    });
    //
    // this.requestSeller.getSeller().subscribe(
    //   (responce) => {
    //     // console.log(responce);

    //     const _id: string | null = localStorage.getItem("_id");

    //     // console.log(_id);

    //     // const mySeller: Seller = {
    //     //   name: "Від свого імені",
    //     //   logo: "",
    //     //   _id: "",
    //     // };

    //     // if (_id) {
    //     //   mySeller._id = _id;
    //     // } else {
    //     //   // re-direct page login
    //     // }

    //     // this.sellerList = responce;
    //     // this.sellerList.splice(0, 0, mySeller);
    //   },
    //   (error) => {
    //     this.showNotice.message(
    //       "Сталася помилка на серверові. Спробуйте пізніше."
    //     );
    //     console.log(error);
    //   }
    // );
    //
    // this.originalName = this.nameOptions.originalName;
    // this.nameQueryParams = this.nameOptions.nameForServer;
    //
  }

  // Update product START ====
  update: boolean = false; // Mode update true/false

  // valueId?: string;
  // updateProduct?: Product;
  // newUpdateProduct?: Product;

  updateOnInit() {
    // if (this.updateProduct) {
    //   console.log(this.updateProduct);
    //   // Присвоєння name, price, keyWords, description
    //   this.nameProduct = this.updateProduct.name;
    //   this.priceProduct = this.updateProduct.price;
    //   // Присвоєння категорії
    //   this.categorySelected = true;
    //   this.categoryNumber = this.updateProduct.category;
    //   this.oneIndex = this.updateProduct.category[0];
    //   this.twoIndex = this.updateProduct.category[1];
    //   if (this.updateProduct.category.length > 2) {
    //     this.threeIndex = this.updateProduct.category[2];
    //   }
    //   // Присвоєння опису товару
    //   this.description = this.updateProduct.description;
    //   // Присвоєння ключових слів товару
    //   // if (this.updateProduct.keyWords) {
    //   //   this.stringKeysWords = this.updateProduct.keyWords.join(" ");
    //   //   this.keyWordsInput(this.updateProduct.keyWords.join(" "));
    //   // }
    //   // Параметри товару
    //   this.optionForUpdate = this.updateProduct.options;
    //   if (this.categoryNumber.length === 2) {
    //     // this.characteristics = this.categoryName.categoryList[this.categoryNumber[0]].nameListCategory[this.categoryNumber[1]].options;
    //   } else if (this.categoryNumber.length === 3) {
    //     this.characteristics =
    //       this.categoryName.categoryList[
    //         this.categoryNumber[0]
    //       ].nameListCategory[this.categoryNumber[1]].subNameListCategory[
    //         this.categoryNumber[2]
    //       ].options;
    //   }
    //   this.characteristics.forEach((element, idx) => {
    //     this.characteristicsNumber.push(this.optionForUpdate[idx]);
    //   });
    //   // this.valueChangeSelect();
    // }
  }
  // Update product END ====
  test() {
    console.log("============================================================");
    // console.log(this.popuapShow);
    // console.log(this.categorySelected);
    // console.log(this.categoryErrorShow);
    console.log("Index");
    console.log(this.oneIndex);
    console.log(this.twoIndex);
    console.log(this.threeIndex);

    console.log("Block");
    console.log(this.oneCategory);
    console.log(this.twoCategory);
    console.log(this.threeCategory);
    console.log("Number");
    console.log(this.categoryNumber);
    // console.log(this.upNewParameters);
    console.log("============================================================");
    console.log(this.characteristics);
    console.log(this.characteristicsNumber);
    console.log(this.validityCharacteristics);

    console.log("============================================================");
  }

  body = document.getElementById("body");

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
  } // Click button "Завантажити фото"

  onFileUpload(event: any) {
    this.images = [];

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
  categoryList: CategoryProduct[] = []; // Category List

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

  validityCharacteristics: boolean = false;

  checkingValidityCharacteristics() {
    // console.log(this.characteristicsNumber);
    if (this.characteristicsNumber.indexOf(-1) >= 0) {
      this.validityCharacteristics = false;
    } else if (this.characteristicsNumber.indexOf(-1) === -1) {
      this.validityCharacteristics = true;
    }

    // // if the array contains -1
    // if (this.characteristicsNumber.indexOf(-1) >= 0) {
    //   this.validityCharacteristics = false;
    //   // if the array does not have -1
    // } else if (this.characteristicsNumber.indexOf(-1) === -1) {
    //   if (this.upNewParameters === true) {
    //     this.validityCharacteristics = true;
    //   } else {
    //     let counterCorrect = 0;
    //     this.updateProduct?.options.forEach((element, idx) => {
    //       if (this.characteristicsNumber[idx] === element) {
    //         counterCorrect++;
    //       }
    //     });
    //     if (counterCorrect === this.updateProduct?.options.length) {
    //       this.validityCharacteristics = false;
    //     } else {
    //       this.validityCharacteristics = true;
    //     }
    //   }
    // }
  }
  getCharacteristics() {
    this.characteristics =
      this.categoryName.categoryList[this.categoryNumber[0]].nameListCategory[
        this.categoryNumber[1]
      ].subNameListCategory[this.categoryNumber[2]].options;
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
  // KeyWords START ================================================================================================================================
  keyWordsArray: string[] = [];
  keyWords: string = "";

  lengthKeyWords: number = 0;
  validityKeyWords: boolean = true;

  minWordLength: number = 2;
  maxWordLength: number = 10;

  maxLengthKeyWords: number = 200;

  keyupInputKeyWords(value: string) {
    this.keyWordsArray = value.replace(/ +/g, " ").trim().split(" ");
    this.lengthKeyWords = value.replace(/\s+/g, "").length;

    if (this.keyWordsArray[0].length === 0) {
      this.keyWordsArray = [];
      this.validityKeyWords = true;
    } else {
      this.checkingValidityKeyWords();
    }
  }
  checkingValidityKeyWords() {
    for (let index = 0; index < this.keyWordsArray.length; index++) {
      if (
        this.keyWordsArray[index].length < this.minWordLength ||
        this.keyWordsArray[index].length > this.maxWordLength
      ) {
        this.validityKeyWords = false;
        break;
      }
      this.validityKeyWords = true;
    }
  } // Checking of the all keywords inputted correct
  deleteErrorKeyWords() {
    for (let index = 0; index < this.keyWordsArray.length; index++) {
      if (
        this.keyWordsArray[index].length < this.minWordLength ||
        this.keyWordsArray[index].length > this.maxWordLength
      ) {
        this.keyWordsArray.splice(index, 1);
        index--;
      }
    } // ['hi', 'hello', 'n', 'cool', 'description'] >> ['hi', 'hello', 'cool']

    this.validityKeyWords = true;
    this.keyWords = this.keyWordsArray.join(" ");
  } // Delete all error keywords
  // KeyWords END ==================================================================================================================================
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
      this.validityKeyWords &&
      this.lengthKeyWords <= this.maxLengthKeyWords &&
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

      formData.append("name", this.nameProduct);
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
      formData.append("keyWords", this.keyWordsArray.join(" ")); // ['hi', 'hello', 'no', 'cool', 'descript'] >>> 'hi hello no cool descript'
      formData.append("description", this.description); // Екран 14" IPS (1920x1080) Full HD, матовий / Intel Core i3-1115G4

      console.log("Send FormData");

      this.requestProduct.createProduct(formData).subscribe(
        (res) => {
          this.showNotice.message("Товар створено успішно.");
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
    // console.log("Button Save");
    // this.checkingKeyWords();
    // const optionsValidity: boolean = this.checkingOptions();
    // const optionsToString: string[] = this.createOptionToString();
    // if (
    //   // this.update &&
    //   // this.updateProduct &&
    //   // this.nameProduct.length > 5 &&
    //   // this.priceProduct &&
    //   // // !this.checkKeyWords &&
    //   // this.lengthKeyWords <= 200 &&
    //   // this.description.length >= 60 &&
    //   // this.description.length <= 5000 &&
    //   // optionsValidity
    // ) {
    //   console.log("Create FormData");
    //   const params: Params = this.createParams(optionsToString);
    //   const formData = new FormData();
    //   // if (this.images) {
    //   //   // formData.append("image", this.images, this.images.name); // Add photo product
    //   // }
    //   // if (this.nameProduct !== this.updateProduct.name) {
    //   //   formData.append("name", this.nameProduct); // Add name product
    //   // }
    //   // if (this.priceProduct !== this.updateProduct.price) {
    //   //   formData.append("price", String(this.priceProduct)); // Add price product (type string)
    //   // }
    //   // if (this.upNewParameters) {
    //   //   formData.append("category", this.categoryNumber.join(" ")); // Add category (type string)
    //   //   formData.append("options", this.optionsListNumber.join(" ")); // Add option (type string)
    //   //   formData.append("optionsToString", optionsToString.join(","));
    //   //   formData.append("queryParams", Object.entries(params).join(","));
    //   // } else if (this.updateSelectValidity) {
    //   //   formData.append("options", this.optionsListNumber.join(" ")); // Add option (type string)
    //   //   formData.append("optionsToString", optionsToString.join(","));
    //   //   formData.append("queryParams", Object.entries(params).join(","));
    //   // }
    //   // formData.append("keyWords", this.keyWords.join(" ")); // Add key word (tpy string)
    //   // if (this.description !== this.updateProduct.description) {
    //   //   formData.append("description", this.description); // Add description (type string)
    //   // }
    //   // if (Boolean(this.action) !== this.updateProduct.action) {
    //   //   formData.append("action", this.action.toString()); // Add action (type string)
    //   // }
    //   console.log("Send FormData");
    //   const id = this.updateProduct._id;
    //   this.requestProduct.updateById(formData, id).subscribe(
    //     (res) => {
    //       this.showNotice.message("Товар збережено успішно.");
    //     },
    //     (e) => {
    //       console.log(e);
    //       this.showNotice.message(
    //         "Товар не було змінено, дані заповнено не коректно"
    //       );
    //     }
    //   ); //Відправили на сервер
    // } else {
    //   this.showNotice.message(
    //     "Товар не було збережено, дані заповнено не коректно"
    //   );
    // }
  }
  // Create/Up END =================================================================================================================================
}
