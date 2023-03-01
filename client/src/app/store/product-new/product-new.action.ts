import { createAction, props } from "@ngrx/store";

export namespace ProductNewActions {
  export const initialState = createAction("[ProductNew] initialState");
  export const updateName = createAction(
    "updateName",
    props<{
      nameValue: string;
    }>()
  );
}

export interface ProductNewState {
  dataProduct: {
    titleData: {
      name_original: string;
      name_present: string;
    };
  } | null;
}

export const initialStateProductNew: ProductNewState = {
  dataProduct: null,
};
