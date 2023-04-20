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

import { Redirect } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private renameTitle: RenameTitleService,
    private showMessage: OpenSnackBarService,
    public dialogRef: MatDialogRef<RegisterComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Register");

    if (this.auth.isAuthenticated()) {
      this.closeRegisterWindow({
        redirectTo: undefined,
        error: "user_registered",
        success: undefined,
      });
    }

    this.formRegister = new UntypedFormGroup({
      name: new UntypedFormControl(null, [
        Validators.required,
        Validators.pattern("^[a-zA-Z]+$"),
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
      email: new UntypedFormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(16),
      ]),
      password: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ]),
    });

    this.renameTitle.renameTitleSite("Реєстрація");
  }

  formRegister: UntypedFormGroup | undefined;

  openLoginWindow() {
    this.closeRegisterWindow({
      redirectTo: "login",
      error: undefined,
      success: undefined,
    });
  }

  closeRegisterWindow(config: Redirect | null) {
    if (config) {
      this.dialogRef.close(config);
    } else {
      this.dialogRef.close();
    }
  }

  onSubmit() {
    if (this.formRegister) {
      this.formRegister.disable();

      this.auth.register(this.formRegister.value).subscribe({
        next: (response) => {
          console.log(response);
          this.closeRegisterWindow({
            redirectTo: undefined,
            error: undefined,
            success: "registered",
          });
        },
        error: (error) => {
          console.log(error);

          this.showMessage.open(error.error.message, "ОК");
          if (this.formRegister) {
            this.formRegister.enable();
          }
        },
        complete: () => {},
      });
    }
  }
}
