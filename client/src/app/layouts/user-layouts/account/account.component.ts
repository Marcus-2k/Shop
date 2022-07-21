import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ShowErrorService } from 'src/app/shared/service/show-error.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit, DoCheck {
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private showError: ShowErrorService
  ) {}

  ngOnInit(): void {
    this.router.navigate(['account/user']);
    this.route.queryParams.subscribe((params: Params) => {
      if (params['login']) {
        this.showError.toasts('Ви вже авторизовані в системі.');
      } else if (params['registered']) {
        this.showError.toasts(
          'Щоб створити новий акаунт, потрібно завершити сесію.'
        );
      }
    });
  }

  ngDoCheck(): void {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login'], {
        queryParams: {
          sessionFail: true,
        },
      });
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  //
}
