import { Component, DoCheck, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/server/auth.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class AccountComponent implements OnInit, DoCheck {
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Account");

    // this.router.navigate(["/account/user"]);
  }

  ngDoCheck(): void {
    if (this.router.url === "/account") {
      this.router.navigate(["/account/user"]);
    }
  }

  logout() {
    this.auth.logout().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
