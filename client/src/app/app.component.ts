import { Component, OnInit } from "@angular/core";

import { AuthService } from "./shared/service/server/auth.service";
import { RequestCheckingService } from "./shared/service/server/request-checking.service";
import { OpenSnackBarService } from "./shared/service/open-snack-bar.service";

import { environment } from "src/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private checkingServer: RequestCheckingService,
    private showNotice: OpenSnackBarService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit App");

    const potentialToken = localStorage.getItem("auth-token");
    this.auth.setToken(potentialToken);
    if (potentialToken !== null) {
      // the user is authorized in the system
      console.log("The user is authorized in the system");
      this.auth.checking().subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);

          if (error.status === 500 || error.status === 0) {
            this.connectingServer = false;
            this.loader = false;
          }
        },
        complete: () => {
          this.loader = false;
        },
      });
    } else {
      // the user is not authorized in the system
      console.log("The user is NOT authorized in the system");
      this.checkingServer.checkingStatusServer().subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);

          if (error.status === 500 || error.status === 0) {
            this.connectingServer = false;
            this.loader = false;
          }
        },
        complete: () => {
          this.loader = false;
        },
      });
    }

    const firstOpenSite = localStorage.getItem("first-open-site");

    if (firstOpenSite === null) {
      localStorage.setItem("first-open-site", "true");
      this.showNotice.open("Перший вхід на сайт", undefined);

      if (environment.HISTORY_SEARCH_START) {
        localStorage.setItem(
          "history-search",
          environment.HISTORY_SEARCH_START
        );
      }
      if (environment.HISTORY_VIEW_START) {
        localStorage.setItem("history-view", environment.HISTORY_VIEW_START);
      }
    } else if (firstOpenSite === "true") {
      localStorage.setItem("first-open-site", "false");
    }
  }

  loader: boolean = true;
  connectingServer: boolean = true;
}
