import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductCard } from "src/app/shared/interface/interfaces";
import { RequestCardService } from "src/app/shared/service/server/request-card.service";

@Injectable({ providedIn: "root" })
export class CardResolver implements Resolve<ProductCard> {
  constructor(private requestCard: RequestCardService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductCard> | Promise<ProductCard> | ProductCard {
    console.log("Start Card Resolver");

    return this.requestCard.getByIdCard(route.params["id"]);
  }
}
