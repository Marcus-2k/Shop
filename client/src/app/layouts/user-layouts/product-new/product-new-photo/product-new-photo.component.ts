import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";

import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

import { InputData_Photo } from "src/app/shared/interface/pages/product-new/interfaces";

import { OpenSnackBarService } from "src/app/shared/service/open-snack-bar.service";

import { environment } from "src/environments/environment";

@Component({
  selector: "app-product-new-photo",
  templateUrl: "./product-new-photo.component.html",
  styleUrls: ["./product-new-photo.component.scss"],
})
export class ProductNewPhotoComponent implements OnInit {
  public constructor(private showMessage: OpenSnackBarService) {}

  @Input() InputData_Photo: InputData_Photo | undefined;
  @Input() update: boolean = false; // Default value = false

  public ngOnInit(): void {
    console.log("Start ngOnInit Product-New-Photo");

    if (this.InputData_Photo) {
      if (this.InputData_Photo.photo_preview && this.update) {
        this.photo_original = [...this.InputData_Photo.photo_preview];
        this.imagePreview = [...this.InputData_Photo.photo_preview];

        for (
          let idx = 0;
          idx < this.InputData_Photo.photo_preview.length;
          idx++
        ) {
          this.images.push(this.InputData_Photo.photo_preview[idx]);
          this.numberPhoto++;
        }
      }

      for (let idx = 0; idx < this.InputData_Photo.maxCounterFile; idx++) {
        if (this.update) {
          if (this.imagePreview.length < this.InputData_Photo.maxCounterFile) {
            this.images.push(undefined);
            this.imagePreview.push(undefined);
          }
        } else {
          this.images.push(undefined);
          this.imagePreview.push(undefined);
        }
      }

      this.sendPhotosToParentComponent();
    }
  }

  photo_original: string[] | undefined;

  @ViewChild("inputFile") inputFile?: ElementRef;
  @Output() sendPhoto = new EventEmitter<(File | string | undefined)[]>();

  url_server_folder: string = environment.URL_SERVER_FOLDER;

  images: (File | string | undefined)[] = [];
  imagePreview: (ArrayBuffer | string | null | undefined)[] = [];
  acceptImage: string[] = ["image/jpeg", "image/png", "image/webp"];

  errorImagesDownload: boolean = false;
  imagesValidation: boolean = false;
  numberPhoto: number = 0;

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.imagePreview, event.previousIndex, event.currentIndex);
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
    this.sendPhotosToParentComponent();
  }

  public triggerClick() {
    if (this.images.indexOf(undefined) >= 0) {
      this.inputFile?.nativeElement.click();
    }
  } // Click button "Download photo"

  public async onFileUpload(event: any) {
    if (this.InputData_Photo) {
      const fileList: File[] = Array.from(event.target.files);

      for (const file of fileList) {
        if (this.acceptImage.includes(file.type)) {
          const image: HTMLImageElement = new Image();
          image.src = URL.createObjectURL(file);

          await new Promise((resolve, reject) => {
            image.onload = () => resolve(image);
            image.onerror = (error) => reject(error);
          });

          if (image.width < 300 || image.height < 300) {
            this.showMessage.open(
              "Мінімальний розмір файлів 300px x 300px",
              undefined
            );
            continue;
          }

          if (this.images.indexOf(undefined) >= 0) {
            const placeholderImages = this.images.indexOf(undefined);
            this.images[placeholderImages] = file;

            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
              if (e.target) {
                if (e.total > 3000000) {
                  this.showMessage.open("Файл не більше 3MB", undefined);
                } else {
                  const fileContent = e.target.result;

                  const placeholderIdx = this.imagePreview.indexOf(undefined);
                  this.imagePreview[placeholderIdx] = fileContent;

                  this.numberPhoto++;
                }
              }
            };

            reader.readAsDataURL(file);
          } else {
            this.showMessage.open("Ліміт фото перевищено", undefined);
          }
        } else {
          this.showMessage.open(
            "Дозволені типи фото " + `[ ${this.acceptImage.join(", ")} ]`,
            undefined
          );
        }
      }

      this.sendPhotosToParentComponent();
    }
  }

  public deletePhoto() {
    if (this.InputData_Photo) {
      this.images = [];

      if (this.photo_original) {
        this.imagePreview = this.photo_original;
      } else {
        this.imagePreview = [];
      }

      const placeholderAmount: number =
        this.InputData_Photo.maxCounterFile - this.imagePreview.length;
      for (let idx = 0; idx < placeholderAmount; idx++) {
        this.images.push(undefined);
        this.imagePreview.push(undefined);
      }

      this.url_server_folder = environment.URL_SERVER_FOLDER;

      this.numberPhoto = 0;
      this.sendPhotosToParentComponent();
    }
  }

  public deletePhotoByIdx(id: number) {
    this.images.splice(id, 1);
    this.imagePreview.splice(id, 1);

    this.images.push(undefined);
    this.imagePreview.push(undefined);

    this.numberPhoto--;
    this.sendPhotosToParentComponent();
  }

  public sendPhotosToParentComponent() {
    this.sendPhoto.emit(this.images);
  }

  public isString(idx: number): boolean {
    if (typeof this.images[idx] === "string") {
      return true;
    } else {
      return false;
    }
  }
}
