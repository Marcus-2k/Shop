import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

import { CHARACTERISTICS } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-card-characteristics",
  templateUrl: "./card-characteristics.component.html",
  styleUrls: ["./card-characteristics.component.scss"],
})
export class CardCharacteristicsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Characteristics");

    this.route.data.subscribe((data: Data) => {
      console.log(data["productCharacteristics"]);

      this.characteristics = data["productCharacteristics"].characteristics;
      this.characteristicsName =
        data["productCharacteristics"].characteristicsName;

      this.loader = false;
    });
  }

  loader: boolean = true;

  characteristics: number[][] = [];
  characteristicsName: CHARACTERISTICS[] = [];
}
