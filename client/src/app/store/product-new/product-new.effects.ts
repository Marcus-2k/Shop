import { Injectable } from "@angular/core";

import { mergeMap, map, catchError } from "rxjs";

import { ProductNewActions } from "./product-new.action";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { RequestCategoryService } from "src/app/shared/service/server/request-category.service";

@Injectable()
export class ProductNewEffects {
  constructor(
    private actions$: Actions,
    private requestCategory: RequestCategoryService
  ) {}

  getCharacteristics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductNewActions.getCharacteristics),
      mergeMap((actionData) => {
        return this.requestCategory
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
