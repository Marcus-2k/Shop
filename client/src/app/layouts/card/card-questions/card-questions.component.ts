import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { ProductQuestions } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-card-questions",
  templateUrl: "./card-questions.component.html",
  styleUrls: ["./card-questions.component.scss"],
})
export class CardQuestionsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-questions");

    this.route.data.subscribe(
      (responce: Data) => {
        // console.log(responce["productQuestions"]);
        this.productQuestions = responce["productQuestions"];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  productQuestions?: ProductQuestions;
}
