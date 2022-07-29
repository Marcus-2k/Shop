import { Component, OnInit } from "@angular/core";
import { AuthService } from "./shared/service/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    console.log("Start ngOnInit APP");
    const potentialToken = localStorage.getItem("auth-token");
    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);
    }

    // this.auth.getTest().subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (e) => {
    //     console.log(e);
    //   }
    // );
  }
}
