import { Component, Input, OnInit } from "@angular/core";
import { Seller } from "src/app/shared/interface/interfaces";
import { RequestSellerService } from "src/app/shared/service/server/request-seller.service";

@Component({
  selector: "app-card-sidebar-seller",
  templateUrl: "./card-sidebar-seller.component.html",
  styleUrls: ["./card-sidebar-seller.component.scss"],
})
export class CardSidebarSellerComponent implements OnInit {
  constructor(private requestSeller: RequestSellerService) {}

  @Input() idSeller?: string;

  ngOnInit(): void {
    if (this.idSeller) {
      this.requestSeller.getSellerById(this.idSeller).subscribe(
        (responce: Seller) => {
          // console.log(responce)
          this.seller = responce;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  url_server_folder: string = "http://localhost:5000/";

  seller?: Seller;
}
