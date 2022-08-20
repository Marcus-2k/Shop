import { Component, Input, OnInit } from "@angular/core";
import { Product, Seller } from "src/app/shared/interface/interfaces";
import { OtherDataService } from "src/app/shared/service/other-data.service";
import { RequestSellerService } from "src/app/shared/service/server/request-seller.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

@Component({
  selector: "app-card-big-sidebar",
  templateUrl: "./card-big-sidebar.component.html",
  styleUrls: ["./card-big-sidebar.component.scss"],
})
export class CardBigSidebarComponent implements OnInit {
  constructor(
    private requestSeller: RequestSellerService,
    private otherData: OtherDataService,
    private showNotice: ShowNoticeService,
    private requestUser: RequestUserService
  ) {}

  @Input() productSidebar?: Product;

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Big-Sidebar");
    if (this.productSidebar) {
      this.requestSeller.getSellerById(this.productSidebar?.seller).subscribe(
        (responce: Seller) => {
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
