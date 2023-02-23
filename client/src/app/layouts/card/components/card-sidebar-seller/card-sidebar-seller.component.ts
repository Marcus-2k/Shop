import { Component, Input, OnInit } from "@angular/core";
import { Seller } from "src/app/shared/interface/interfaces";
import { RequestSellerService } from "src/app/shared/service/server/request-seller.service";
import { environment } from "src/environments/environment";

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
      this.requestSeller.getByIdSeller(this.idSeller).subscribe(
        (response) => {
          console.log(response);
          this.seller = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  url_server_folder: string = environment.URL_SERVER_FOLDER;

  seller?: Seller;
}
