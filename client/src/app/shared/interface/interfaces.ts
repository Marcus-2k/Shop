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
export interface ProductCard {
  imageSrc: string[];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  counter: number;
  status: 0 | 1 | 2 | 3;
  description: string;
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
export interface ProductDelete {
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
  characteristics: number[];
  status: 0 | 1 | 2 | 3;
  keywords: string[];
  description: string;
  _id: string;
}
// Product END =========================================================================================
// User START ==========================================================================================
export interface User {
  avatar: string | null | ArrayBuffer;
  name: string;
  lastName: string;
  email: string;
  birthday: string;
  country: string;
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

export interface ShoppingCartList {
  imageSrc: [string];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  counter: number;
  status: 0 | 1 | 2 | 3;
  _id: string;
}
export interface Order {
  _id: string;
  counter: number;
  merchant: string;
}
export interface OrderEvent {
  _id: string;
  counter: number;
}
export interface DeleteCart {
  _id: string;
}
// User END ============================================================================================
// News START ==========================================================================================
export interface News {
  imageSrc: string[];
  _id: string;
}
// News END ============================================================================================
// Category START ======================================================================================
export interface CategoryProduct {
  nameCategory: string;
  nameListCategory: {
    subNameCategory: string;
    subNameListCategory: {
      titleSubNameListCategory: string | undefined;
    }[];
  }[];
}
export interface CategoryProduct_Characteristics {
  nameCategory: string;
  nameListCategory: {
    subNameCategory: string;
    subNameListCategory: {
      titleSubNameListCategory: string | undefined;
      characteristics: Options[];
    }[];
  }[];
}
export interface Options {
  name: string; // example Operating System
  query_name: string;
  htmlElement: "select"; // html tag
  select: string[]; // field for option select
}
// Category END ========================================================================================
// PAge Search START ===================================================================================
export interface FilterNameParams {
  name: string;
  params: string[];
}
export interface ActiveFilterBlock {
  name: string;
  inputActive: ActiveFilter[];
  blockActive: boolean;
}
export interface ActiveFilter {
  name: string;
  query_name: string;
  counter: number;
  active: boolean;
}
// PAge Search END =====================================================================================

export interface LinkNavigate {
  name: string;
  link: string;
}
