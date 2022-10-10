import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
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

  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(["/account"], {
        queryParams: {
          registered: true,
        },
      });
    }

    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
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
