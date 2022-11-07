import { Component, OnInit } from "@angular/core";
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ShoppingCart } from "src/app/shared/interface/interfaces";
import { UserDataService } from "src/app/shared/service/user-data.service";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { FavoriteActions } from "src/app/store/favorite/favorite.action";
import { Store } from "@ngrx/store";

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
    private renameTitle: RenameTitleService,
    private store$: Store,
    private userData: UserDataService
  ) {}

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(["/account"], {
        queryParams: {
          login: true,
        },
      });
    }

    this.form = new UntypedFormGroup({
      email: new UntypedFormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl(null, [
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

    this.renameTitle.renameTitleSite("Вхід");
  }

  form: UntypedFormGroup = new UntypedFormGroup({});

  closePopuap() {
    this.renameTitle.renameTitleSite("Інтернет-магазин");
    this.router.navigate(["/"]);
  }

  onSubmit() {
    this.form.disable();
    this.auth.login(this.form.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/account/user"]);
        this.initAfterLogin();
      },
      (e) => {
        console.log(e);
        if (e.error.message) {
          this.showNotice.message(e.error.message);
        }
        this.form.enable();
      }
    );
  }

  initAfterLogin() {
    // Get favorite user
    this.store$.dispatch(FavoriteActions.getFavorite());

    // Get shopping cart user
    this.requestUser.getShoppingCart().subscribe(
      (responce: ShoppingCart) => {
        this.userData.shoppingCartListUser = responce.shoppingCart;
        this.userData.shoppingCartNumber.next(responce.shoppingCart.length);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
