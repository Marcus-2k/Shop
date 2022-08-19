import { Component, OnInit } from "@angular/core";
import { AuthService } from "./shared/service/server/auth.service";
import { RenameTitleService } from "./shared/service/rename-title.service";
import { RequestUserService } from "./shared/service/server/request-user.service";
import { OtherDataService } from "./shared/service/other-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private requestUser: RequestUserService,
    private otherData: OtherDataService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit APP");
    const potentialToken = localStorage.getItem("auth-token");

    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);
      this.requestUser.getFavorite().subscribe(
        (responce: { favorite: string[] }) => {
          console.log(responce);
          this.otherData.favoriteListUser = responce.favorite;
        },
        (error) => {
          console.log(error);
        }
      );
    }

    // this.renameTitle.renameTitleSite("Інтернет-Магазин");
  }
}
