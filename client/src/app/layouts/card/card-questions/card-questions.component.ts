import { Component, OnInit } from "@angular/core";
import { ProductQuestions } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-card-questions",
  templateUrl: "./card-questions.component.html",
  styleUrls: ["./card-questions.component.scss"],
})
export class CardQuestionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Questions");
  }

  loader: boolean = true;

  productQuestions?: ProductQuestions;
}
