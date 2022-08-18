import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { ProductPhoto } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-card-photo",
  templateUrl: "./card-photo.component.html",
  styleUrls: ["./card-photo.component.scss"],
})
export class CardPhotoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Photo");

    this.route.data.subscribe(
      (responce: Data) => {
        // console.log(responce["productPhoto"]);
        this.productPhoto = responce["productPhoto"];

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
