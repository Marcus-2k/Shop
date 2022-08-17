import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductInfo } from "src/app/shared/interface/interfaces";
import { RequestCardService } from "src/app/shared/service/server/request-card.service";

@Injectable({ providedIn: "root" })
export class CardInfoResolver implements Resolve<ProductInfo> {
  constructor(private requestCard: RequestCardService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductInfo> | Promise<ProductInfo> | ProductInfo {
    console.log("Start Card-Info Resolver");

    const id = state.url.split("/")[2];

    return this.requestCard.getByIdCardInfo(id);
  }
}
