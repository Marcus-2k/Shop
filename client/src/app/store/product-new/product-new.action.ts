import { createAction, props } from "@ngrx/store";

export namespace ProductNewActions {
  export const updateDescription = createAction(
    "updateDescription",
    props<{
      descriptionValue: string;
    }>()
  );
}

export interface ProductNewState {
  dataProduct: {
    description: string;
  } | null;
}

export const initialStateProductNew: ProductNewState = {
  dataProduct: null,
};
