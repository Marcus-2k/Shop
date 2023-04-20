import { Component, OnInit } from "@angular/core";
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { AuthService } from "src/app/shared/service/server/auth.service";
import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { OpenSnackBarService } from "src/app/shared/service/open-snack-bar.service";

import { Store } from "@ngrx/store";
import { FavoriteActions } from "src/app/store/favorite/favorite.action";
import { ShoppingCartActions } from "src/app/store/cart/cart.action";
import { Redirect } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private renameTitle: RenameTitleService,
    private showMessage: OpenSnackBarService,
    private store$: Store,
    public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.closeLoginWindow({
        redirectTo: undefined,
        error: "user_authorized",
        success: undefined,
      });
    }

    this.formLogin = new UntypedFormGroup({
      email: new UntypedFormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.renameTitle.renameTitleSite("Вхід");
  }

  formLogin: UntypedFormGroup | undefined;

  openRegisterWindow() {
    this.closeLoginWindow({
      redirectTo: "register",
      error: undefined,
      success: undefined,
    });
  }

  closeLoginWindow(config: Redirect | null) {
    if (config) {
      this.dialogRef.close(config);
    } else {
      this.dialogRef.close();
    }
  }

  onSubmit() {
    if (this.formLogin) {
      this.formLogin.disable();

      this.auth.login(this.formLogin.value).subscribe({
        next: (response) => {
          console.log(response);

          this.initAfterLogin();
          this.closeLoginWindow({
            redirectTo: undefined,
            error: undefined,
            success: "authorized",
          });
        },
        error: (error) => {
          console.log(error);
          this.showMessage.open(error.error.message, "ОК");

          if (this.formLogin) {
            this.formLogin.enable();
          }
        },
        complete: () => {},
      });
    }
  }

  initAfterLogin() {
    // Get favorite user
    this.store$.dispatch(FavoriteActions.getFavorite());

    // Get shopping cart user
    this.store$.dispatch(ShoppingCartActions.getShoppingCart());
  }
}
