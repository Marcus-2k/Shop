import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { OtherDataService } from "src/app/shared/service/other-data.service";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private showNotice: ShowNoticeService,
    private requestUser: RequestUserService,
    private otherData: OtherDataService
  ) {}

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(["/account"], {
        queryParams: {
          login: true,
        },
      });
    }

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.route.queryParams.subscribe((params: Params) => {
      if (params["registered"]) {
        /* User registered */
        this.showNotice.message(
          "Ви зареєструвалися в системі, тепер можете увійти."
        );
      } else if (params["sessionFail"]) {
        this.showNotice.message("Потрібно авторизуватися.");
      }
    });
  }

  form: FormGroup = new FormGroup({});

  closePopuap() {
    this.router.navigate(["/"]);
  }

  onSubmit() {
    this.form.disable();
    this.auth.login(this.form.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/account"]);
        this.initAfterLogin();
      },
      (e) => {
        console.log(e);
        this.form.enable();
      }
    );
  }

  initAfterLogin() {
    // Get favorite user
    this.requestUser.getWishList().subscribe(
      (responce) => {
        this.otherData.favoriteNumber = responce.length;
      },
      (error) => {
        console.log(error);
      }
    );
    // Get shopping cart user
    this.requestUser.getShoppingCartList().subscribe(
      (responce) => {
        this.otherData.shoppingCartNumber = responce.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
