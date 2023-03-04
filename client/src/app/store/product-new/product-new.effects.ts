import { Injectable } from "@angular/core";

import { mergeMap, map, catchError } from "rxjs";

import { ProductNewActions } from "./product-new.action";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { RequestCatalogService } from "src/app/shared/service/server/request-catalog.service";

@Injectable()
export class ProductNewEffects {
  constructor(
    private actions$: Actions,
    private requestCatalog: RequestCatalogService
  ) {}

  getCharacteristics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductNewActions.getCharacteristics),
      mergeMap((actionData) => {
        return this.requestCatalog
          .getCharacteristics(actionData.categoryNumber)
          .pipe(
            map((data) => {
              return ProductNewActions.getCharacteristicsData({
                characteristics: data,
              });
            })
            // catchError((error) => {})
          );
      })
    )
  );
}
