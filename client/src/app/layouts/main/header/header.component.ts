import { Component, DoCheck } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/service/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements DoCheck {
  // constructor(private router: Router, private auth: AuthService) {}
  constructor(private router: Router, private auth: AuthService) {}

  ngDoCheck(): void {
    this.potentialToken = localStorage.getItem("auth-token");
  }

  // Щоб показувати відповідні іконки, (login / exit, account, like, basket)
  potentialToken = localStorage.getItem("auth-token");

  search(title: string) {
    this.router.navigate([`search`], {
      queryParams: {
        search_text: title,
      },
    });
  } // search title >> redirect >> /search

  logout() {
    this.auth.logout().subscribe(
      (res) => {
        console.log(res.message);
        this.auth.setToken(null); // Delete token client
        localStorage.clear(); // Delete token localStorage
      },
      (e) => {
        console.log(e);
      }
    );
  } // logout site
}
