import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductCharacteristics } from "../interface/interfaces";
import { RequestCardService } from "../service/server/request-card.service";

@Injectable({
  providedIn: "root",
})
export class CardCharacteristicsResolver
  implements Resolve<ProductCharacteristics>
{
  constructor(private requestCard: RequestCardService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<ProductCharacteristics>
    | Promise<ProductCharacteristics>
    | ProductCharacteristics {
    console.log("Start Card-Characteristics Resolver");

    const id = state.url.split("/")[2];

    return this.requestCard.getByIdCardCharacteristics(id);
  }
}
