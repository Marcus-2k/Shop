import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductPhoto } from "../interface/interfaces";
import { RequestCardService } from "../service/server/request-card.service";

@Injectable({
  providedIn: "root",
})
export class CardPhotoResolver implements Resolve<ProductPhoto> {
  constructor(private requestCard: RequestCardService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductPhoto> | Promise<ProductPhoto> | ProductPhoto {
    console.log("Start Card-Photo Resolver");

    const id = state.url.split("/")[2];

    return this.requestCard.getByIdCardPhoto(id);
  }
}
