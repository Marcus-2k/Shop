import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductQuestions } from "../interface/interfaces";
import { RequestCardService } from "../service/server/request-card.service";

@Injectable({
  providedIn: "root",
})
export class CardQuestionsResolver implements Resolve<ProductQuestions> {
  constructor(private requestCard: RequestCardService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<ProductQuestions>
    | Promise<ProductQuestions>
    | ProductQuestions {
    console.log("Start Card-Questions Resolver");

    const id = state.url.split("/")[2];

    return this.requestCard.getByIdCardQuestions(id);
  }
}
