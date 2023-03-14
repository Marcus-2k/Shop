import { createAction, props } from "@ngrx/store";

import { Options, ProductUpdate } from "src/app/shared/interface/interfaces";

export namespace ProductNewActions {
  export const initialState = createAction(
    "[ProductNew] initialState",
    props<{ data: ProductUpdate | null }>()
  );

  export const updateName = createAction(
    "updateName",
    props<{
      nameValue: string | null;
    }>()
  );

  export const updatePrice = createAction(
    "updatePrice",
    props<{
      priceValue: number | null;
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
      actionPriceValue: number | null;
    }>()
  );

  export const updateStatusStore = createAction(
    "updateStatusStore",
    props<{
      statusValue: 0 | 1 | 2 | 3 | null;
    }>()
  );
  export const updateCounterStore = createAction(
    "updateCounterStore",
    props<{
      counterValue: number | null;
    }>()
  );

  export const updateCategory = createAction(
    "updateCategoryStore",
    props<{
      categoryNumberValue: number[] | null;
      categoryNameValue: string[] | null;
      categorySelected: boolean;
      categoryError: boolean | null;
    }>()
  );

  export const getCharacteristics = createAction(
    "getCharacteristics",
    props<{
      categoryNumber: number[];
    }>()
  );
  export const getCharacteristicsData = createAction(
    "getCharacteristicsData",
    props<{ characteristics: Options[] }>()
  );

  export const resetCharacteristics = createAction("resetCharacteristics");

  export const updateCharacteristics = createAction(
    "updateCharacteristics",
    props<{
      characteristicsValue: number[][];
    }>()
  );

  export const updateKeywords = createAction(
    "updateKeywords",
    props<{
      keywordsValue: string;
    }>()
  );

  export const updateDescription = createAction(
    "updateDescription",
    props<{
      descriptionValue: string | null;
    }>()
  );
}

export interface ProductNewState {
  dataProduct: {
    titleData: {
      name_original: string | null;
      name_present: string | null;
    };
    priceData: {
      price_original: number | null;
      price_present: number | null;
      action_original: boolean;
      action_present: boolean;
      actionPrice_original: number | null;
      actionPrice_present: number | null;
    };
    statusData: {
      counter_original: number | null;
      counter_present: number | null;
      status_original: 0 | 1 | 2 | 3 | null;
      status_present: 0 | 1 | 2 | 3 | null;
    };
    categoryData: {
      categoryNumber_original: number[] | null;
      categoryNumber_present: number[] | null;
      categoryName_original: string[] | null;
      categoryName_present: string[] | null;

      categorySelected: boolean;
      categoryError: boolean | null;
    };
    characteristicsData: {
      characteristicsName: Options[] | null;

      characteristics_original: number[][] | null;
      characteristics_present: number[][] | null;
    };
    keywordsData: {
      keywords_original: string;
      keywords_present: string;
    };
    descriptionData: {
      description_original: string | null;
      description_present: string | null;
    };
  } | null;
}

export const initialStateProductNew: ProductNewState = {
  dataProduct: null,
};
