import { Component, OnInit } from "@angular/core";
import { ProductComments } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-card-comments",
  templateUrl: "./card-comments.component.html",
  styleUrls: ["./card-comments.component.scss"],
})
export class CardCommentsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Comments");
  }

  loader: boolean = true;

  productComments?: ProductComments;
}
