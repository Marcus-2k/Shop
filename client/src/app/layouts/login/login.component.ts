import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ShowErrorService } from 'src/app/shared/service/show-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private showError: ShowErrorService
  ) {}

  // Form validation for login
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/account'], {
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
      if (params['registered']) {
        /* User registered */
        this.showError.toasts(
          'Ви зареєструвалися в системі, тепер можете увійти.'
        );
      } else if (params['sessionFail']) {
        this.showError.toasts('Потрібно авторизуватися.');
      }
    });
  }

  closePopuap() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.form.disable();
    this.auth.login(this.form.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/account']);
      },
      (e) => {
        console.log(e);
        this.form.enable();
      }
    );
  }
}
