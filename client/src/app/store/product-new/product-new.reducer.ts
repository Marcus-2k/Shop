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

    if (props.data) {
      stateClone.dataProduct = {
        titleData: {
          name_original: props.data.name,
          name_present: props.data.name,
        },
        priceData: {
          price_original: props.data.price,
          price_present: props.data.price,
          action_original: props.data.action,
          action_present: props.data.action,
          actionPrice_original: props.data.actionPrice,
          actionPrice_present: props.data.actionPrice,
        },
        statusData: {
          counter_original: props.data.counter,
          counter_present: props.data.counter,
          status_original: props.data.status,
          status_present: props.data.status,
        },
        categoryData: {
          categoryNumber_original: props.data.category,
          categoryNumber_present: props.data.category,
          categoryName_original: props.data.categoryName,
          categoryName_present: props.data.categoryName,
          categorySelected: true,
          categoryError: false,
        },
        characteristicsData: {
          characteristicsName: props.data.characteristicsName,
          characteristics_original: props.data.characteristics,
          characteristics_present: props.data.characteristics,
        },
        keywordsData: {
          keywords_original: props.data.keywords.join(" "),
          keywords_present: props.data.keywords.join(" "),
        },
        descriptionData: {
          description_original: props.data.description,
          description_present: props.data.description,
        },
      };
    } else {
      stateClone.dataProduct = {
        titleData: {
          name_original: null,
          name_present: null,
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
          description_original: null,
          description_present: null,
        },
      };
    }

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
