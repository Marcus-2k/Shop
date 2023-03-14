import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";

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
  constructor(private showMessage: OpenSnackBarService) {}

  @Input() InputData_Photo: InputData_Photo | undefined;
  @Input() update: boolean = false; // Default value = false

  ngOnInit(): void {
    if (this.InputData_Photo) {
      for (let idx = 0; idx < this.InputData_Photo.maxCounterFile; idx++) {
        this.images.push(undefined);
        this.imagePreview.push(undefined);
      }
    }
  }

  photo_original: string[] | undefined;

  @ViewChild("inputFile") inputFile?: ElementRef;

  url_server_folder: string = environment.URL_SERVER_FOLDER;

  images: (File | undefined)[] = [];
  imagePreview: (ArrayBuffer | string | undefined | null)[] = [];

  errorImagesDownload: boolean = false;
  imagesValidation: boolean = false;
  numberPhoto: number = 0;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.imagePreview, event.previousIndex, event.currentIndex);
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }

  triggerClick() {
    this.inputFile?.nativeElement.click();
  } // Click button "Download photo"

  onFileUpload(event: any) {
    if (this.InputData_Photo) {
      const fileList: File[] = Array.from(event.target.files);

      for (const file of fileList) {
        if (this.images.indexOf(undefined) >= 0) {
          const placeholderImages = this.images.indexOf(undefined);
          this.images[placeholderImages] = file;

          const reader = new FileReader();
          reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target) {
              const fileContent = e.target.result;

              const placeholderIdx = this.imagePreview.indexOf(undefined);
              this.imagePreview[placeholderIdx] = fileContent;

              this.numberPhoto++;
            }
          };

          reader.readAsDataURL(file);
        } else {
          this.showMessage.open("Ліміт фото перевищено", undefined);
        }
      }
    }
  }

  deletePhoto() {
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
    }
  }

  deletePhotoByIdx(id: number) {
    this.images.splice(id, 1);
    this.imagePreview.splice(id, 1);

    this.images.push(undefined);
    this.imagePreview.push(undefined);

    this.numberPhoto--;
  }
}
