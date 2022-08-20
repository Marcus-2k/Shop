import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-description",
  templateUrl: "./card-description.component.html",
  styleUrls: ["./card-description.component.scss"],
})
export class CardDescriptionComponent implements OnInit {
  constructor() {}

  @Input() description?: string;

  ngOnInit(): void {}
}
