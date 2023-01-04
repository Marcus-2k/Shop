import { Component, OnInit } from "@angular/core";

import { AuthService } from "./shared/service/server/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    console.log("Start ngOnInit App");

    const potentialToken = localStorage.getItem("auth-token");
    this.auth.setToken(potentialToken);

    if (potentialToken !== null) {
      this.auth.checking().subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);

          if (error.status === 500) {
            this.connectingServer = false;
            this.loader = false;
          }
        },
        complete: () => {
          this.loader = false;
        },
      });
    } else {
      this.loader = false;
    }
  }

  loader: boolean = true;
  connectingServer: boolean = true;
}
