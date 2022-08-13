import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { Product, ProductInfo } from "src/app/shared/interface/interfaces";
import { RequestCardService } from "src/app/shared/service/server/request-card.service";

@Injectable({ providedIn: "root" })
export class CardInfoResolver implements Resolve<ProductInfo> {
  constructor(private requestCard: RequestCardService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductInfo> | Promise<ProductInfo> | ProductInfo {
    return this.requestCard.getByIdCardInfo(route.params["id"]);
  }
}
