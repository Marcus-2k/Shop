import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { ProductComments } from "src/app/shared/interface/interfaces";

@Component({
  selector: "app-card-comments",
  templateUrl: "./card-comments.component.html",
  styleUrls: ["./card-comments.component.scss"],
})
export class CardCommentsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("Start ngOnInit Card-Comments");

    this.route.data.subscribe(
      (responce: Data) => {
        // console.log(responce["productComments"]);
        this.productComments = responce["productComments"];

        this.loader = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loader: boolean = true;

  productComments?: ProductComments;
}
