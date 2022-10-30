import { Component, OnInit } from "@angular/core";
import { ProductAccessories } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-card-accessories",
  templateUrl: "./card-accessories.component.html",
  styleUrls: ["./card-accessories.component.scss"],
})
export class CardAccessoriesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Accessories");
  }

  loader: boolean = true;

  ProductAccessories?: ProductAccessories;
}
