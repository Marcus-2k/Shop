import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/shared/interface/interfaces";
import { CategoryNameService } from "src/app/shared/service/category-name.service";
import { RequestProductService } from "src/app/shared/service/request-product.service";
import { ShowErrorService } from "src/app/shared/service/show-error.service";

@Component({
  selector: "app-product-new",
  templateUrl: "./product-new.component.html",
  styleUrls: ["./product-new.component.scss"],
})
export class ProductNewComponent
  implements OnInit, DoCheck, AfterContentInit, AfterViewInit
{
  constructor(
    private requestProduct: RequestProductService,
    private showError: ShowErrorService,
    private categoryName: CategoryNameService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoryList = this.categoryName.categoryList;
    this.route.queryParams.subscribe((queryParam: any) => {
      this.reqParams = queryParam["id"];
      if (this.reqParams) {
        this.update = true;
      } else {
        this.update = false;
      }
    });
    if (this.update) {
      if (this.reqParams) {
        this.requestProduct.getByIdforUpdate(this.reqParams).subscribe(
          (res) => {
            console.log(res);
            this.updateProduct = res;
            this.updateOnInit();
          },
          (e) => {
            console.log(e);
          }
        );
      }
    }
  }

  textareaClick: boolean = false;
  ngDoCheck(): void {}

  ngAfterContentInit(): void {}
  ngAfterViewInit(): void {
    // document.addEventListener('blur', function (event) {
    //   console.log('blur: ', event.target.id, document.activeElement.id)
    // }, true)
  }

  // Update product START ====
  update: boolean = false; // ProductNewComponent в якому стан
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
      // console.log(this.updateProduct.keyWords?.join(' '));
    }
  }

  // Update product END ====

  @ViewChild("inputFile") inputFile?: ElementRef;
  @ViewChild("inputTitle") inputTitle?: ElementRef;
  @ViewChild("inputPrice") inputPrice?: ElementRef;
  @ViewChild("inputKeyWords") inputKeyWords?: ElementRef;

  body = document.getElementById("body");

  formControlFile: boolean = false;
  formControlName: boolean = false;
  formControlPrice: boolean = false;
  formControlDescription: boolean = false;

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
  categoryList = [
    {
      nameCategory: "Допомога",
      nameListCategory: [
        {
          subNameCategory: "Потрібна допомога",
          subNameListCategory: [
            { titleSubNameListCategory: "Ліки та Гігієнічні засоби" },
            { titleSubNameListCategory: "Ліки та Гігієнічні засоби" },
          ],
        },
        {
          subNameCategory: "Пропоную допомогу",
          subNameListCategory: [
            { titleSubNameListCategory: "Ліки та Гігієнічні засоби" },
            { titleSubNameListCategory: "Ліки та Гігієнічні засоби" },
          ],
        },
      ],
    },
  ]; // Category List

  oneIndex: number = -1; // Перша цифра категорії для categoryList
  twoIndex: number = -1; // Друга цифра категорії для categoryList
  threeIndex: number = -1; // Третя цифра категорії для categoryList, не є обов'язковою, категорія може бути двоцифровою.

  oneCategory: boolean = false; // Відображає блок для вибору категорії першого рівня.
  twoCategory: boolean = false; // Відображає блок для вибору категорії другого рівня.
  threeCategory: boolean = false; // Відображає блок для вибору категорії третього рівня.

  categoryNumber: number[] = [-1]; // Перша цифра - це номер обєкта в масиві categoryList, друга цифра це номер массива в середені списку під першою цифрою...

  categoryErrorShow: boolean = false; // True в тому випадку якщо категорія не вибрана, і при умові що було відкрите вікно вибору.

  selectCategoryPopuapStart(index: number) {
    this.oneIndex = index;
    this.oneCategory = true;
    this.twoCategory = true;
  }

  // Reselect category
  editOneCategory(index: number) {
    this.oneIndex = index;
    this.threeCategory = false;
    this.twoIndex = -1;
    this.threeIndex = -1;
  }
  // Select and reselect for sub category
  editTwoCategory(index: number) {
    this.twoIndex = index;
    this.threeCategory = true;
    this.threeIndex = -1;
  }
  // Select and reselect for sub list category
  editThreeCategory(index: number) {
    this.threeIndex = index;
    this.categorySelected = true; // Відобразить вибрані категорії в form вибір категорії
    this.popuapOnOff = false; // Close popuap
    this.body?.classList.remove("active"); // For body style overflow: auto;
    this.createCategoryNumber();
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
  } // Зкидання категорії, відкритих рівнів категорій, та номеру категорії.

  createCategoryNumber() {
    this.categoryNumber[0] = this.oneIndex;
    this.categoryNumber.push(this.twoIndex);
    this.categoryNumber.push(this.threeIndex);
    this.categoryErrorShow = false;
  } // Для categoryNumber задасть номер.

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
  // Description END ====

  // Create product Start ====
  createProduct() {
    console.log("Кнопка Створити");
    for (let index = 0; index < this.keyWords.length; index++) {
      console.log("Старт циклу");
      if (
        this.keyWords[index].length <= 1 ||
        this.keyWords[index].length > 10
      ) {
        this.showError.toasts(
          "В ключових словах, є слова в яких кількість символів меньше двох (2), або більше десяти (10)."
        );
        this.checkKeyWords = true;
        break;
      }
      this.checkKeyWords = false;
    } // Перевірка чи всі ключові слова введено корректно

    if (
      this.images &&
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

      this.requestProduct.createProduct(formData).subscribe(
        (res) => {
          this.showError.toasts("Товар створено успішно.");
        },
        (e) => {
          console.log(e);
          this.showError.toasts(
            "Товар не було створено, дані заповнено не коректно"
          );
        }
      ); //Відправили на сервер
    } else {
      this.showError.toasts(
        "Товар не було створено, дані заповнено не коректно"
      );
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
        this.showError.toasts(
          "В ключових словах, є слова в яких кількість символів меньше двох (2), або більше десяти (10)."
        );
        this.checkKeyWords = true;
        break;
      }
      this.checkKeyWords = false;
    } // Перевірка чи всі ключові слова введено корректно

    // this.images &&
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
          this.showError.toasts("Товар збережено успішно.");
        },
        (e) => {
          console.log(e);
          this.showError.toasts(
            "Товар не було змінено, дані заповнено не коректно"
          );
        }
      ); //Відправили на сервер
    } else {
      this.showError.toasts(
        "Товар не було збережено, дані заповнено не коректно"
      );
    }
  } // Update product END ====
}
