import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product, ProductDelete } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-product-card-user",
  templateUrl: "./product-card-user.component.html",
  styleUrls: ["./product-card-user.component.scss"],
})
export class ProductCardUserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Start ngOnInit Product-Card");

    if (this.productItem) {
      this.images = this.productItem?.imageSrc;
    }
  }

  @Input() productItem?: Product;
  @Output() transferDeleteProduct = new EventEmitter();

  url_server_folder: string = "http://localhost:5000/";

  images: string[] = []; // two images product

  hoverEnter(imageLogo: HTMLImageElement, imageSubLogo: HTMLImageElement) {
    imageLogo.classList.add("display-none");
    imageLogo.classList.remove("display-block");

    imageSubLogo.classList.add("display-block");
    imageSubLogo.classList.remove("display-none");
  }

  hoverLeave(imageLogo: HTMLImageElement, imageSubLogo: HTMLImageElement) {
    imageLogo.classList.add("display-block");
    imageLogo.classList.remove("display-none");

    imageSubLogo.classList.add("display-none");
    imageSubLogo.classList.remove("display-block");
  }

  deleteProduct() {
    if (this.productItem?._id) {
      const deleteItem: ProductDelete = {
        _id: this.productItem._id,
      };
      this.transferDeleteProduct.emit(deleteItem);
    }
  }
}
