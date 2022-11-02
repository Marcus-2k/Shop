import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { Options } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-card-characteristics",
  templateUrl: "./card-characteristics.component.html",
  styleUrls: ["./card-characteristics.component.scss"],
})
export class CardCharacteristicsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Characteristics");

    this.route.data.subscribe(
      (response: Data) => {
        console.log(response["productCharacteristics"]);

        this.characteristics =
        response["productCharacteristics"].characteristics;
        this.characteristicsName =
        response["productCharacteristics"].characteristicsName;

        this.loader = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loader: boolean = true;

  characteristics: number[][] = [];
  characteristicsName: Options[] = [];
}
