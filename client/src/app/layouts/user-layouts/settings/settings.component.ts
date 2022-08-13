import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const titleCollection = document.getElementsByTagName("title");
    const title = Array.from(titleCollection);
    title[0].innerText = "Налаштування";
  }
}
