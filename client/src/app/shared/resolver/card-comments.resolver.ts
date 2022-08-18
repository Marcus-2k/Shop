import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductComments } from "src/app/shared/interface/interfaces";
import { RequestCardService } from "src/app/shared/service/server/request-card.service";

@Injectable({
  providedIn: "root",
})
export class CardCommentsResolver implements Resolve<ProductComments> {
  constructor(private requestCard: RequestCardService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductComments> | Promise<ProductComments> | ProductComments {
    console.log("Start Card-Comments Resolver");

    const id = state.url.split("/")[2];

    return this.requestCard.getByIdCardComments(id);
  }
}
