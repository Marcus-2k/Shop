import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { Options } from "src/app/shared/interface/interfaces";
import { ProductCharacteristics } from "src/app/shared/interface/interfaces";
import { CategoryProductService } from "src/app/shared/service/category-product.service";

@Component({
  selector: "app-card-characteristics",
  templateUrl: "./card-characteristics.component.html",
  styleUrls: ["./card-characteristics.component.scss"],
})
export class CardCharacteristicsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private catagoryName: CategoryProductService
  ) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Characteristics");

    this.route.data.subscribe(
      (responce: Data) => {
        console.log(responce["productCharacteristics"]);
        this.productCharacteristics = responce["productCharacteristics"];

        this.loader = false;
        this.category = responce["productCharacteristics"].category;
        this.characteristics =
          responce["productCharacteristics"].characteristics;

        this.characteristicsName =
          this.catagoryName.categoryList[this.category[0]].nameListCategory[
            this.category[1]
          ].subNameListCategory[this.category[2]].characteristics;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loader: boolean = true;

  productCharacteristics?: ProductCharacteristics;

  category: number[] = [];
  characteristics: number[] = [];

  characteristicsName: Options[] = [];
}
