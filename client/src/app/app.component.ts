import { Component, OnInit } from "@angular/core";

import { AuthService } from "./shared/service/server/auth.service";
import { RequestCheckingService } from "./shared/service/server/request-checking.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private checkingServer: RequestCheckingService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit App");

    const potentialToken = localStorage.getItem("auth-token");
    this.auth.setToken(potentialToken);
    // the user is authorized in the system
    console.log("The user is authorized in the system");
    if (potentialToken !== null) {
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
  }

  loader: boolean = true;
  connectingServer: boolean = true;
}
