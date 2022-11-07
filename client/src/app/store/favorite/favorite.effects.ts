import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FavoriteActions } from "../favorite/favorite.action";

import { mergeMap, map } from "rxjs";

import { RequestUserService } from "../../shared/service/server/request-user.service";
import { Favorite } from "../../shared/interface/interfaces";

@Injectable()
export class FavoriteEffects {
  constructor(
    private actions$: Actions,
    private requestUser: RequestUserService
  ) {}

  getFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoriteActions.getFavorite),
      mergeMap(() =>
        this.requestUser.getFavorite().pipe(
          map((favorite: Favorite) => {
            return FavoriteActions.getFavoriteSuccess(favorite);
          })
        )
      )
    )
  );
  addFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoriteActions.addFavorite),
      mergeMap((action) =>
        this.requestUser.addFavorite(action.id).pipe(
          map((favorite: Favorite) => {
            return FavoriteActions.upFavorite(favorite);
          })
        )
      )
    )
  );
  removeFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoriteActions.removeFavorite),
      mergeMap((action) =>
        this.requestUser.removeFavorite(action.id).pipe(
          map((favorite: Favorite) => {
            return FavoriteActions.upFavorite(favorite);
          })
        )
      )
    )
  );
}
