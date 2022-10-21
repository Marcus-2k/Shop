import { Component, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/server/auth.service";
import { ShowNoticeService } from "src/app/shared/service/show-notice.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private showNotice: ShowNoticeService
  ) {}

  form: UntypedFormGroup = new UntypedFormGroup({});

  ngOnInit(): void {
    console.log("Start ngOnInit Register");

    if (this.auth.isAuthenticated()) {
      this.router.navigate(["/account"], {
        queryParams: {
          registered: true,
        },
      });
    }

    this.form = new UntypedFormGroup({
      name: new UntypedFormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*"),
        Validators.minLength(4),
      ]),
      email: new UntypedFormControl(null, [Validators.required, Validators.email]),
      password: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  closePopuap() {
    this.router.navigate(["/"]);
  }

  onSubmit() {
    this.form.disable();

    this.auth.register(this.form.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/account/user"]);
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
}
