import {
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import {
  CategoryProduct,
  Options,
  Product,
} from "src/app/shared/interface/interfaces";
import { CategoryProductService } from "src/app/shared/service/category-product.service";
import { NameQueryService } from "src/app/shared/service/name-query.service";
import { RequestProductService } from "src/app/shared/service/server/request-product.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

@Component({
  selector: "app-product-new",
  templateUrl: "./product-new.component.html",
  styleUrls: ["./product-new.component.scss"],
})
export class ProductNewComponent implements OnInit, DoCheck {
  constructor(
    private showNotice: ShowNoticeService,
    private requestProduct: RequestProductService,
    private categoryName: CategoryProductService,
    private route: ActivatedRoute,
    private nameOptions: NameQueryService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit product-new");
    this.categoryList = this.categoryName.categoryList;
    this.route.queryParams.subscribe((queryParam: any) => {
      this.reqParams = queryParam["id"];
      if (this.reqParams) {
        this.update = true;
      } else {
        this.update = false;
      }
    });
    //
    this.originalName = this.nameOptions.originalName;
    this.nameQueryParams = this.nameOptions.nameForServer;
    //

    if (this.update) {
      if (this.reqParams) {
        this.requestProduct.getByIdforUpdate(this.reqParams).subscribe(
          (res) => {
            this.updateProduct = res;
            this.updateOnInit();
          },
          (e) => {
            console.log(e);
          }
        );
      }
    }
    //
  }

  ngDoCheck(): void {}

  // Update product START ====
  update: boolean = false; // Режим update true/false
  reqParams: string | undefined = undefined;
  updateProduct: Product | undefined = undefined;

  updateOnInit() {
    if (this.updateProduct) {
      // Присвоєння name, price, keyWords, description
      this.nameProduct = this.updateProduct.name;
      this.priceProduct = this.updateProduct.price;
      // Присвоєння категорії
      this.categorySelected = true;
      this.categoryNumber = this.updateProduct.category;
      this.oneIndex = this.updateProduct.category[0];
      this.twoIndex = this.updateProduct.category[1];
      if (this.updateProduct.category.length > 2) {
        this.threeIndex = this.updateProduct.category[2];
      }
      // Присвоєння опису товару
      this.description = this.updateProduct.description;
      // Присвоєння ключових слів товару
      if (this.updateProduct.keyWords) {
        this.stringKeysWords = this.updateProduct.keyWords.join(" ");
        this.keyWordsInput(this.updateProduct.keyWords.join(" "));
      }
    }
  }

  // Update product END ====

  @ViewChild("inputFile") inputFile?: ElementRef;
  @ViewChild("inputTitle") inputTitle?: ElementRef;
  @ViewChild("inputPrice") inputPrice?: ElementRef;
  @ViewChild("inputKeyWords") inputKeyWords?: ElementRef;
  @ViewChild("selectParams") selectParams?: ElementRef;

  body = document.getElementById("body");

  // File Start ====
  validImages = false; // Якщо фото не завантажено, але було нажато кнопку завантажити, для вивидення помилки"потрібно вибрати фото"
  images?: File; // Download image product
  imagePreview: any; // Picture of the product on the site

  triggerClick() {
    this.inputFile?.nativeElement.click();
    this.validImages = true;
  } // Коли нажато на кнопку "Завантажити фото"

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.images = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
      this.validImages = false;
    };

    reader.readAsDataURL(file);
  }
  // File END ====

  // Name Start ====
  nameProduct: string = "";
  // Name END ====

  // Price Start ====
  priceProduct?: number;
  // Price END ====

  // Popuap Select Category START ====
  categoryList: CategoryProduct[] = []; // Category List

  oneIndex: number = -1; // Перша цифра категорії для categoryList
  twoIndex: number = -1; // Друга цифра категорії для categoryList
  threeIndex: number = -1; // Третя цифра категорії для categoryList, не є обов'язковою, категорія може бути двоцифровою.

  oneCategory: boolean = false; // Відображає блок для вибору категорії першого рівня.
  twoCategory: boolean = false; // Відображає блок для вибору категорії другого рівня.
  threeCategory: boolean = false; // Відображає блок для вибору категорії третього рівня.

  categoryNumber: number[] = []; // Перша цифра - це номер обєкта в масиві categoryList, друга цифра це номер массива в середені списку під першою цифрою...

  categoryErrorShow: boolean = false; // True в тому випадку якщо категорія не вибрана, і при умові що було відкрите вікно вибору.

  selectCategoryPopuapStart(index: number) {
    this.oneIndex = index;
    this.oneCategory = true;
    this.twoCategory = true;
  }

  // Reselect category
  editOneCategory(index: number) {
    this.oneIndex = index;
    this.twoIndex = -1;
    this.threeIndex = -1;
    this.threeCategory = false;
  }
  // Select and reselect for sub category
  editTwoCategory(index: number) {
    this.twoIndex = index;
    this.threeIndex = -1;
    this.threeCategory = true;
  }
  // Select and reselect for sub list category
  editThreeCategory(index: number) {
    this.threeIndex = index;
  }

  buttonSelectThisCategory() {
    this.body?.classList.remove("active"); // For body style overflow: auto;
    this.createCategoryNumber();
    this.getOptionsFromService();
    this.popuapOnOff = false; // Close popuap
    this.categoryErrorShow = false;
    this.categorySelected = true; // Відобразить вибрані категорії в form вибір категорії
  }

  resetCategoryBlockAndIndex() {
    // Зкидання вибраних категорій
    this.oneIndex = -1;
    this.twoIndex = -1;
    this.threeIndex = -1;

    // Закриття блоків для вибірки категорії
    this.oneCategory = false;
    this.twoCategory = false;
    this.threeCategory = false;

    this.categoryNumber.splice(0, 2);
    this.categoryNumber[0] = -1;

    this.categoryErrorShow = true;

    this.resetOptions();
  } // Зкидання категорії, відкритих рівнів категорій, та номеру категорії.

  createCategoryNumber() {
    this.categoryNumber[0] = this.oneIndex;
    this.categoryNumber.push(this.twoIndex);
    if (this.threeIndex !== -1) {
      this.categoryNumber.push(this.threeIndex);
    }
  } // Для categoryNumber задати номер.

  popuapOnOff: boolean = false; // Popuap On/Off
  categorySelected: boolean = false; // Category in form visibility

  popuapOpen() {
    this.popuapOnOff = true; // Open Popuap
    this.body?.classList.add("active"); // For body style overflow: hidden;
    this.categorySelected = false;
    this.resetCategoryBlockAndIndex(); // Reset
    this.categoryErrorShow = false;
  } // Select category window, open popuap

  popuapClose(idx: number) {
    if (idx === 0) {
      this.popuapOnOff = false; // Close Popuap

      this.body?.classList.remove("active"); // For body style overflow: auto;

      this.resetCategoryBlockAndIndex();
    }
  } // Close popuap
  // Popuap Select Category END ====

  // Options START ====
  characteristics: Options[] = [];

  selectCollection: HTMLCollection =
    document.getElementsByClassName("select__params");

  getOptionsFromService() {
    this.characteristics =
      this.categoryName.categoryList[this.categoryNumber[0]].nameListCategory[
        this.categoryNumber[1]
      ].subNameListCategory[this.categoryNumber[2]].options;

    console.log(this.characteristics);
  } // Отримуємо характеристики для опису товара за його категорією
  resetOptions() {
    this.characteristics = [];
  } // Видалення характеристик
  // Options END ====

  // queryParams START ====
  queryParams: Params = {};
  originalName: string[] = [];
  nameQueryParams: string[] = [];
  // queryParams END ====

  // Key Words START ====
  keyWords: string[] = []; // Ключові слова.
  stringKeysWords = ""; // Ключові слова в одному рядку. Для відправки на сервер.
  lengthKeyWords: number = 0; // Кількість символів ключових слів.
  checkKeyWords: boolean = false; // Для блока видалення не правильних ключових слів.

  keyWordsInput(value: string) {
    this.keyWords = value.replace(/ +/g, " ").trim().split(" ");
    this.lengthKeyWords = value.replace(/\s+/g, "").length;
    if (this.keyWords[0] === "") {
      this.keyWords = [];
    }

    for (let index = 0; index < this.keyWords.length; index++) {
      if (
        this.keyWords[index].length <= 1 ||
        this.keyWords[index].length > 10
      ) {
        this.checkKeyWords = true;
        break;
      }
      this.checkKeyWords = false;
    } // Перевірка чи всі ключові слова введено корректно
  } // При введені тексту в "Ключові слова"

  deleteKeyWords() {
    for (let index = 0; index < this.keyWords.length; index++) {
      if (
        this.keyWords[index].length <= 1 ||
        this.keyWords[index].length > 10
      ) {
        this.keyWords.splice(index, 1);
        index--;
      }
    }
  }
  // Key Words END ====

  // Description Start ====
  description: string = ""; // Description
  minLengthDescription: number = 60;
  maxnLengthDescription: number = 5000;
  // Description END ====

  // Create product Start ====
  createProduct() {
    console.log("Кнопка Створити");
    console.log(this.queryParams);

    let selectParamsArray = Array.prototype.slice.call(this.selectCollection);
    let optionsNumber: number[] = [];

    let optionsToString: string[] = [];

    selectParamsArray.forEach((element: HTMLSelectElement, idx) => {
      optionsNumber.push(Number(element.value));

      let indexName = this.originalName.indexOf(this.characteristics[idx].name);
      console.log(indexName);

      let nameQueryParams = this.nameQueryParams[indexName];
      console.log(nameQueryParams);

      this.queryParams[nameQueryParams] =
        this.characteristics[idx].select[Number(element.value)];

      optionsToString.push(
        this.characteristics[idx].select[Number(element.value)]
      );
    }); // Записуємо номера вибраних параметрів в масив
    let params = Object.entries(this.queryParams);
    params = params.flat(1);

    console.log(this.queryParams);
    // console.log(params);
    console.log(optionsToString);

    for (let idx = 0; idx < optionsNumber.length; idx++) {
      if (optionsNumber[idx] <= -1) {
        this.showNotice.message("Не всі параметри заповненні правильно");
        optionsNumber = [];
        break;
      }
    } // Якщо в масиві один з параметрів -1 то значить якийсь параметр був не вибраний

    for (let index = 0; index < this.keyWords.length; index++) {
      if (
        this.keyWords[index].length <= 1 ||
        this.keyWords[index].length > 10
      ) {
        this.showNotice.message(
          "В ключових словах, є слова в яких кількість символів меньше двох (2), або більше десяти (10)."
        );
        this.checkKeyWords = true;
        break;
      }
      this.checkKeyWords = false;
    } // Перевірка чи всі ключові слова введено правильно

    let action = 0;

    if (
      this.images &&
      this.nameProduct.length > 5 &&
      this.priceProduct &&
      !this.checkKeyWords &&
      this.lengthKeyWords <= 200 &&
      this.description.length >= 60 &&
      this.description.length <= 5000 &&
      this.characteristics.length === optionsNumber.length
    ) {
      console.log("Create FormData");

      const formData = new FormData();

      formData.append("image", this.images, this.images.name); // Add photo product
      formData.append("name", this.nameProduct); // Add name product
      formData.append("price", String(this.priceProduct)); // Add price product (type string)
      formData.append("category", this.categoryNumber.join(" ")); // Add category (type string)
      formData.append("options", optionsNumber.join(" ")); // Add option (type string)
      formData.append("optionsToString", optionsToString.join(","));
      formData.append("queryParams", params.join(","));
      formData.append("keyWords", this.keyWords.join(" ")); // Add key word (tpy string)
      formData.append("description", this.description); // Add description (type string)
      formData.append("action", action.toString()); // Add action (type string)

      console.log("Send FormData");
      // this.optionsToString = [];
      this.requestProduct.createProduct(formData).subscribe(
        (res) => {
          this.showNotice.message("Товар створено успішно.");
        },
        (e) => {
          // console.log(e);
          this.showNotice.message(e.message);
        }
      ); //Відправили на сервер
    } else {
      this.showNotice.message("Товар не було створено, дані заповнено невірно");
      // this.optionsToString = [];
    }
  }

  upProduct() {
    console.log("Кнопка Зберегти");

    for (let index = 0; index < this.keyWords.length; index++) {
      console.log("Старт циклу");
      if (
        this.keyWords[index].length <= 1 ||
        this.keyWords[index].length > 10
      ) {
        this.showNotice.message(
          "В ключових словах, є слова в яких кількість символів меньше двох (2), або більше десяти (10)."
        );
        this.checkKeyWords = true;
        break;
      }
      this.checkKeyWords = false;
    } // Перевірка чи всі ключові слова введено корректно

    if (
      this.update &&
      this.updateProduct &&
      this.nameProduct.length > 5 &&
      this.priceProduct &&
      !this.checkKeyWords &&
      this.lengthKeyWords <= 200 &&
      this.description.length >= 60 &&
      this.description.length <= 5000
    ) {
      console.log("Створили FromData");

      const formData = new FormData();
      if (this.images) {
        formData.append("image", this.images, this.images.name); // Add photo product
      }

      formData.append("name", this.nameProduct); // Add name product
      formData.append("price", String(this.priceProduct)); // Add price product
      formData.append("category", this.categoryNumber.join(" ")); // Add category number
      formData.append("keyWords", this.keyWords.join(" ")); // Add key word (string format)
      formData.append("description", this.description); // Add description (string format)

      console.log("Відправили FromData");

      const id = this.updateProduct._id;
      this.requestProduct.updateById(formData, id).subscribe(
        (res) => {
          this.showNotice.message("Товар збережено успішно.");
        },
        (e) => {
          console.log(e);
          this.showNotice.message(
            "Товар не було змінено, дані заповнено не коректно"
          );
        }
      ); //Відправили на сервер
    } else {
      this.showNotice.message(
        "Товар не було збережено, дані заповнено не коректно"
      );
    }
  }
  // Create product END ====
}
