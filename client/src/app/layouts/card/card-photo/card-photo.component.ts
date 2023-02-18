import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { ProductPhoto } from "src/app/shared/interface/interfaces";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-card-photo",
  templateUrl: "./card-photo.component.html",
  styleUrls: ["./card-photo.component.scss"],
})
export class CardPhotoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Photo");

    this.route.data.subscribe((data: Data) => {
      // console.log(data["productPhoto"]);
      this.productPhoto = data["productPhoto"];

      this.loader = false;
    });
  }

  url_server_folder: string = environment.URL_SERVER_FOLDER;

  loader: boolean = true;

  productPhoto?: ProductPhoto;
}
