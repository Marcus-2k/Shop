import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";

import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

import { InputData_Photo } from "src/app/shared/interface/pages/product-new/interfaces";

import { environment } from "src/environments/environment";

@Component({
  selector: "app-product-new-photo",
  templateUrl: "./product-new-photo.component.html",
  styleUrls: ["./product-new-photo.component.scss"],
})
export class ProductNewPhotoComponent implements OnInit {
  constructor() {}

  @Input() InputData_Photo: InputData_Photo | undefined;
  @Input() update: boolean = false; // Default value = false

  ngOnInit(): void {}

  original_imageSrc: string[] = [];

  @ViewChild("inputFile") inputFile?: ElementRef;

  url_server_folder: string = environment.URL_SERVER_FOLDER;

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
  imagePreview: any = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]; // Picture of the product on the site

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
    if (this.InputData_Photo) {
      this.images = [];
      this.url_server_folder = "";

      const fileList: File[] = Array.from(event.target.files);
      const fileCounter = event.target.files.length;
      const needCart = this.InputData_Photo.maxCounterFile - fileCounter;

      this.images = fileList;

      this.imagePreview = [];

      for (let index = 0; index < needCart; index++) {
        this.imagePreview.push(undefined);
      } // No select photo

      let idx: number = fileCounter - 1; // 5 >> 4 >> 3 | unshift()

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
  }

  deletePhoto() {
    if (this.InputData_Photo) {
      if (this.update && this.imagesValidation && this.original_imageSrc) {
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

        this.imagePreview = this.original_imageSrc;

        const needItem =
          this.InputData_Photo.maxCounterFile - this.original_imageSrc.length;
        for (let idx = 0; idx < needItem; idx++) {
          this.imagePreview.push(undefined);
        }

        this.imagesValidation = false;
        this.url_server_folder = environment.URL_SERVER_FOLDER;
      }
    }
  }
}
