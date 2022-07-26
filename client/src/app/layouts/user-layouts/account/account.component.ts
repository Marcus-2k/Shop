import { Component, DoCheck, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/auth.service";
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
    this.router.navigate(["account/user"]);
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
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["/login"], {
        queryParams: {
          sessionFail: true,
        },
      });
    }
  }

  logout() {
    this.auth.logout().subscribe(
      (res) => {
        console.log(res.message);
        this.auth.setToken(null); // Delete token client
        localStorage.clear(); // Delete token localStorage
      },
      (e) => {
        console.log(e);
      }
    );
  } // logout
}
