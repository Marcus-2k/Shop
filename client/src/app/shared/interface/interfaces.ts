import { Params } from "@angular/router";
import { Widget_Breadcrumbs } from "./card/card.interfaces";

// Auth START ==========================================================================================
export interface UserRegister {
  name: string;
  email: string;
  password: string;
}
export interface UserLogin {
  email: string;
  password: string;
}
export interface Redirect {
  redirectTo: "login" | "register" | undefined;
  error: "user_authorized" | "user_registered" | undefined;
  success: "authorized" | "registered" | undefined;
}
// Auth END ============================================================================================
// Seller START ========================================================================================
export interface Seller {
  name: string;
  avatar: string;
  _id: string;
}
// Seller END ==========================================================================================
// Product START =======================================================================================
export interface Product {
  imageSrc: string[];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  counter: number;
  category: number[];
  characteristics: number[];
  status: 0 | 1 | 2 | 3;
  keywords: string[];
  description: string;
  comments: [];
  questions: [];
  user: string;
  _id: string;
}

export interface ProductInfo {
  imageSrc: string[];
  description: string;
}
export interface ProductCharacteristics {
  characteristics: number[];
  characteristicsName: Options[];
}
export interface ProductComments {
  comments: [];
}
export interface ProductQuestions {
  questions: [];
}
export interface ProductPhoto {
  imageSrc: string[];
}
export interface ProductAccessories {
  accessories: [];
}
export interface ProductSearch {
  imageSrc: [string, string];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  category: number[];
  characteristics: number[];
  user: string;
  _id: string;
}
export interface ProductUpdate {
  imageSrc: string[];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  counter: number;
  category: number[];
  categoryName: string[];
  characteristics: number[][];
  characteristicsName: Options[];
  status: 0 | 1 | 2 | 3;
  keywords: string[];
  description: string;
  _id: string;
}
// Product END =========================================================================================
// User START ==========================================================================================
export interface User_Account {
  avatar: string | null;
  name: string;
  lastName: string | null;
  email: string;
  birthday: Date | null;
  country: string | null;
  _id: string;
}

export interface Favorite {
  favorite: string[];
}
export interface ShoppingCart {
  shoppingCart: string[];
}

export interface Wish {
  imageSrc: [string, string];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  status: 0 | 1 | 2 | 3;
  _id: string;
}
export interface WishChecked {
  checked: boolean;
  _id: string;
}

export interface Order {
  stepper: OrderStepper;
  info: {
    seller: string;
    merchant: string;
  };
  product: {
    info: OrderProduct;
  };
  contacts: {
    info: OrderContacts;
  };
  shipping: {
    info: OrderShipping;
    selectTypeShipping: 0 | 1 | 2 | null;
    selectTypeShippingText: string | null;
  };
  payment: {
    info: OrderPayment;
    selectTypePayment: 0 | 1 | 2 | 3 | 4 | 5 | null;
    selectTypePaymentText: string | null;
  };
  valid: OrderValid;
}
export interface OrderStepper {
  selectedIndex: number;
  completedProduct: boolean;
  completedContacts: boolean;
  completedShipping: boolean;
  completedPayment: boolean;
}
export interface OrderProduct {
  product_id: string[];
  counter: number[];
  totalPrice: number;
  totalActionPrice: number;
  totalCounterProduct: number;
}
export interface OrderContacts {
  name: string | null;
  email: string | null;
  tel: string | null;
}
export interface OrderShipping {
  addressesPresent: string | null;
  addressesMainDescription: string | null;
  addressesWarehousesDescription: string | null;
}
export interface OrderPayment {}
export interface OrderValid {
  validProduct: boolean;
  validContacts: boolean;
  validShipping: boolean;
  validPayment: boolean;
}
export interface DataAside {
  totalCounterProduct: number;
  totalPrice: number;
  totalActionPrice: number;
}

export interface MyOrder {
  info: {
    seller: string;
    sellerName: string;
    merchant: string;
    dateOfCreation: Date;
    dateOfDispatch: Date | null;
    orderID: string;
    status: number;
  };
  product: {
    info: MyOrderProduct;
  };
  contacts: {
    info: MyOrderContacts;
  };
  shipping: {
    info: MyOrderShipping;
    selectTypeShipping: 0 | 1 | 2;
    selectTypeShippingText: string;
  };
  payment: {
    info: MyOrderPayment;
    selectTypePayment: 0 | 1 | 2 | 3 | 4 | 5;
    selectTypePaymentText: string;
  };
}
export interface MyOrderProduct {
  counter: number[];
  totalPrice: number;
  totalActionPrice: number;
  totalCounterProduct: number;
}
export interface MyOrderContacts {
  name: string;
  email: string;
  tel: string;
}
export interface MyOrderShipping {
  addressesPresent: string;
  addressesMainDescription: string;
  addressesWarehousesDescription: string;
}
export interface MyOrderPayment {}

// User END ============================================================================================
// ProductCart START ===================================================================================
export interface ProductCard_ShoppingCart {
  imageSrc: [string];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  counter: number;
  status: 0 | 1 | 2 | 3;
  user: string;
  _id: string;
}
// ProductCart END =====================================================================================
// News START ==========================================================================================
export interface News {
  imageSrc: string[];
  _id: string;
}
// News END ============================================================================================
// Category START ======================================================================================
export interface CategoryProduct {
  nameCategory: string;
  nameCategoryImg: string;
  navigate_link: string;
  nameListCategory: {
    subNameCategory: string;
    navigate_link: string;
    permissionUse: boolean;
    subNameListCategory:
      | {
          titleSubNameListCategory: string;
          permissionUse: boolean;
          navigate_link: string;
          queryParams: Params | undefined;
        }[]
      | undefined;
  }[];
}
export interface CategoryProduct_Characteristics {
  nameCategory: string;
  nameListCategory: {
    subNameCategory: string;
    characteristics: Options[] | any; // Options[] | undefined
    subNameListCategory: any; // { titleSubNameListCategory: string; characteristics: Options[]; } | undefined
  }[];
}
export interface Options {
  name: string; // example Operating System
  query_name: string;
  htmlElement: "select"; // html tag
  select: string[]; // field for option select
  multiple: boolean;
}

export interface CategoryHome {
  nameCategory: string;
  nameCategoryImg: string;
}
// Category END ========================================================================================
// Page Search START ===================================================================================
export interface FoundData {
  product: Product[];
  filters: Filter[];

  widget_auto_portal: WidgetAutoPortal[] | undefined;
  widget_section_id: WidgetSectionId[] | undefined;
  widget_breadcrumbs: Widget_Breadcrumbs | undefined;

  number_of_product: number;
  currentPage: number;
  maxPage: number;
  limit: number;
}

export interface WidgetAutoPortal {
  titleSubNameListCategory: string;
  navigate_link: string;
  navigate_image: string;
}
export interface WidgetSectionId {
  subNameCategory: string;
  navigate_link: string;
  subNameListCategory:
    | {
        titleSubNameListCategory: string;
        navigate_link: string;
      }[]
    | undefined;
}

export interface Filter {
  title: string;
  query_name: string;
  show: boolean;
  checkboxList: Checkbox[];
}
export interface Checkbox {
  name: string;
  counter: number;
  active: boolean;
}
// Page Search END =====================================================================================
// EventEmitter START ==================================================================================
export interface EventEmitterCounter {
  id: string;
  counter: number;
}
export interface EventEmitterRemove {
  id: string;
}
// EventEmitter END ====================================================================================
// Dialog window START =================================================================================
export interface DialogSearchSettlementsOpen {
  addressesPresent: string;
  addressesMainDescription: string;
}
export interface DialogSearchSettlementsClose {
  addressesPresent: string;
  addressesMainDescription: string;
}
export interface DialogGetWarehousesOpen {
  addressesMainDescription: string;
}
export interface DialogGetWarehousesClose {
  addressesWarehousesDescription: string;
}
// Dialog window END ===================================================================================
// Nova Poshta START ===================================================================================
export interface SearchSettlementsNP {
  data: {
    Addresses: {
      AddressDeliveryAllowed: boolean;
      Area: string;
      DeliveryCity: string;
      MainDescription: string;
      ParentRegionCode: string;
      ParentRegionTypes: string;
      Present: string;
      Ref: string;
      Region: string;
      RegionTypes: string;
      RegionTypesCode: string;
      SettlementTypeCode: string;
      StreetsAvailability: boolean;
      Warehouses: number;
    }[];
    TotalCount: number;
  }[];
  errorCodes: any[];
  errors: any[];
  info: any[];
  infoCodes: any[];
  messageCodes: any[];
  success: boolean;
  warningCodes: any[];
  warnings: any[];
}
export interface GetWarehousesNP {
  data: {
    BicycleParking: string;
    CanGetMoneyTransfer: string;
    CategoryOfWarehouse: string;
    CityDescription: string;
    CityDescriptionRu: string;
    CityRef: string;
    Delivery: {
      Monday: string;
      Tuesday: string;
      Wednesday: string;
      Thursday: string;
      Friday: string;
      Saturday: string;
      Sunday: string;
    };
    DenyToSelect: string;
    Description: string;
    DescriptionRu: string;
    Direct: string;
    DistrictCode: string;
    GeneratorEnabled: string;
    InternationalShipping: string;
    Latitude: string;
    Longitude: string;
    MaxDeclaredCost: string;
    Number: string;
    OnlyReceivingParcel: string;
    POSTerminal: string;
    PaymentAccess: string;
    Phone: string;
    PlaceMaxWeightAllowed: string;
    PostFinance: string;
    PostMachineType: string;
    PostalCodeUA: string;
    ReceivingLimitationsOnDimensions: {
      Height: number;
      Length: number;
      Width: number;
    };
    Reception: {
      Monday: string;
      Tuesday: string;
      Wednesday: string;
      Thursday: string;
      Friday: string;
      Saturday: string;
      Sunday: string;
    };
    Ref: string;
    RegionCity: string;
    Schedule: {
      Monday: string;
      Tuesday: string;
      Wednesday: string;
      Thursday: string;
      Friday: string;
      Saturday: string;
      Sunday: string;
    };
    SelfServiceWorkplacesCount: string;
    SendingLimitationsOnDimensions: {
      Height: number;
      Length: number;
      Width: number;
    };
    SettlementAreaDescription: string;
    SettlementDescription: string;
    SettlementRef: string;
    SettlementRegionsDescription: string;
    SettlementTypeDescription: string;
    SettlementTypeDescriptionRu: string;
    ShortAddress: string;
    ShortAddressRu: string;
    SiteKey: string;
    TotalMaxWeightAllowed: string;
    TypeOfWarehouse: string;
    WarehouseForAgent: string;
    WarehouseIndex: string;
    WarehouseStatus: string;
    WarehouseStatusDate: string;
    WorkInMobileAwis: string;
  }[];
  errorCodes: any[];
  errors: any[];
  info: {
    totalCount: number;
  };
  infoCodes: any[];
  messageCodes: any[];
  success: boolean;
  warningCodes: any[];
  warnings: any[];
}
// Nova Poshta END =====================================================================================
export interface LinkNavigate {
  name: string;
  link: string;
}
