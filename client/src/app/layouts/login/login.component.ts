import { Component, OnInit } from "@angular/core";
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { Store } from "@ngrx/store";
import { FavoriteActions } from "src/app/store/favorite/favorite.action";
import { ShoppingCartActions } from "src/app/store/cart/cart.action";

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
    private renameTitle: RenameTitleService,
    private store$: Store
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
      (response) => {
        console.log(response);

        this.router.navigate(["/account/user"]);
        this.initAfterLogin();
      },
      (error) => {
        console.log(error);
        if (error.error.message) {
          this.showNotice.message(error.error.message);
        }
        this.form.enable();
      }
    );
  }

  initAfterLogin() {
    // Get favorite user
    this.store$.dispatch(FavoriteActions.getFavorite());

    // Get shopping cart user
    this.store$.dispatch(ShoppingCartActions.getShoppingCart());
  }
}
