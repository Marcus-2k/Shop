import { Component, OnInit } from "@angular/core";
import { AuthService } from "./shared/service/server/auth.service";
import { RenameTitleService } from "./shared/service/rename-title.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    console.log("Start ngOnInit APP");
    const potentialToken = localStorage.getItem("auth-token");
    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);
    }

    // this.renameTitle.renameTitleSite("Інтернет-Магазин");
  }
}
