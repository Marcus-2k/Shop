import { Component, OnInit } from "@angular/core";
import { AuthService } from "./shared/service/auth.service";
import { CategoryNameService } from "./shared/service/category-name.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const potentialToken = localStorage.getItem("auth-token");
    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);
    }
    // this.auth.category().subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (e) => {
    //     console.log(e);
    //   }
    // );
  }
}
