import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductPhoto } from "src/app/shared/interface/interfaces";
import { RequestCardService } from "src/app/shared/service/server/request-card.service";

@Component({
  selector: "app-card-photo",
  templateUrl: "./card-photo.component.html",
  styleUrls: ["./card-photo.component.scss"],
})
export class CardPhotoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private requestCard: RequestCardService
  ) {}

  // @Input()
  id: string = "sdsdsds";

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Photo");

    this.id = window.location.pathname.split("/")[2];

    this.requestCard.getByIdCardPhoto(this.id).subscribe(
      (responce) => {
        console.log("responce");
        console.log(responce);

        this.productPhoto = responce;
        this.loader = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  url_server_folder: string = "http://localhost:5000/";

  loader: boolean = true;

  productPhoto?: ProductPhoto;
}
