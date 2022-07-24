import { Component, DoCheck, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, DoCheck {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.potentialToken = localStorage.getItem("auth-token");
  }

  // Щоб показувати відповідні іконки, (вхід / акаунт, вподобані, корзина)
  potentialToken = localStorage.getItem("auth-token");

  // FormGroup
  form: FormGroup = new FormGroup({
    search: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  getBySearch(title: string) {
    this.router.navigate([`search`], {
      queryParams: {
        search_text: title,
      },
    });
  }
}
