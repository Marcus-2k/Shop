import { createReducer, on } from "@ngrx/store";
import {
  initialStateProductNew,
  ProductNewActions,
  ProductNewState,
} from "./product-new.action";

export const ProductNewReducer = createReducer(
  initialStateProductNew,

  on(ProductNewActions.initialState, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));

    stateClone.dataProduct = {
      titleData: {
        name_original: "",
        name_present: "",
      },
      priceData: {
        price_original: null,
        price_present: null,
        action_original: false,
        action_present: false,
        actionPrice_original: null,
        actionPrice_present: null,
      },
      statusData: {
        counter_original: null,
        counter_present: null,
        status_original: null,
        status_present: null,
      },
      categoryData: {
        categoryNumber_original: null,
        categoryNumber_present: null,
        categoryName_original: null,
        categoryName_present: null,
        categorySelected: false,
        categoryError: null,
      },
      characteristicsData: {
        characteristicsName: null,
        characteristics_original: null,
        characteristics_present: null,
      },
      keywordsData: {
        keywords_original: "",
        keywords_present: "",
      },
      descriptionData: {
        description_original: "",
        description_present: "",
      },
    };

    return stateClone;
  }),

  on(ProductNewActions.updateName, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));

    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.titleData.name_present = props.nameValue;
    }

    return stateClone;
  }),

  on(ProductNewActions.updatePrice, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));

    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.priceData.price_present = props.priceValue;
    }

    return stateClone;
  }),
  on(ProductNewActions.updateAction, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));

    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.priceData.action_present = props.actionValue;
    }

    return stateClone;
  }),
  on(ProductNewActions.updateActionPrice, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));

    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.priceData.actionPrice_present =
        props.actionPriceValue;
    }

    return stateClone;
  }),

  on(ProductNewActions.updateStatusStore, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));

    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.statusData.status_present = props.statusValue;
    }

    return stateClone;
  }),
  on(ProductNewActions.updateCounterStore, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));

    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.statusData.counter_present = props.counterValue;
      stateClone.dataProduct.statusData.status_present = null;
    }

    return stateClone;
  }),

  on(ProductNewActions.updateCategory, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));

    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.categoryData.categoryNumber_present =
        props.categoryNumberValue;
      stateClone.dataProduct.categoryData.categoryName_present =
        props.categoryNameValue;
      stateClone.dataProduct.categoryData.categorySelected =
        props.categorySelected;
      stateClone.dataProduct.categoryData.categoryError = props.categoryError;
    }

    return stateClone;
  }),

  on(ProductNewActions.getCharacteristicsData, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));

    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.characteristicsData.characteristicsName =
        props.characteristics;
    }

    return stateClone;
  }),

  on(ProductNewActions.resetCharacteristics, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));
    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.characteristicsData.characteristics_present = null;
      stateClone.dataProduct.characteristicsData.characteristicsName = null;
    }

    return stateClone;
  }),

  on(ProductNewActions.updateCharacteristics, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));

    console.log("reducer", props.type);
    console.log("prods - data = ", props);

    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.characteristicsData.characteristics_present =
        props.characteristicsValue;
    }

    return stateClone;
  }),

  on(ProductNewActions.updateKeywords, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));

    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.keywordsData.keywords_present =
        props.keywordsValue;
    }

    return stateClone;
  }),

  on(ProductNewActions.updateDescription, (state, props) => {
    const stateClone: ProductNewState = JSON.parse(JSON.stringify(state));

    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.descriptionData.description_present =
        props.descriptionValue;
    }

    return stateClone;
  })
);
