import { createAction, props } from "@ngrx/store";

export namespace ProductNewActions {
  export const initialState = createAction("[ProductNew] initialState");

  export const updateName = createAction(
    "updateName",
    props<{
      nameValue: string;
    }>()
  );

  export const updatePrice = createAction(
    "updatePrice",
    props<{
      priceValue: number;
    }>()
  );

  export const updateAction = createAction(
    "updateAction",
    props<{
      actionValue: boolean;
    }>()
  );
  export const updateActionPrice = createAction(
    "updateActionPrice",
    props<{
      actionPriceValue: number;
    }>()
  );
}

export interface ProductNewState {
  dataProduct: {
    titleData: {
      name_original: string;
      name_present: string;
    };
    priceData: {
      price_original: number | null;
      price_present: number | null;
      action_original: boolean;
      action_present: boolean;
      actionPrice_original: number | null;
      actionPrice_present: number | null;
    };
  } | null;
}

export const initialStateProductNew: ProductNewState = {
  dataProduct: null,
};
