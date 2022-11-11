import { Component, DoCheck, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class AccountComponent implements OnInit, DoCheck {
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private showNotice: ShowNoticeService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Account");

    // this.router.navigate(["/account/user"]);
    this.route.queryParams.subscribe((params: Params) => {
      if (params["login"]) {
        this.showNotice.message("Ви вже авторизовані в системі.");
      } else if (params["registered"]) {
        this.showNotice.message(
          "Щоб створити новий акаунт, потрібно завершити сесію."
        );
      }
    });
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
      (e) => {
        console.log(e);
      }
    );
  }
}
