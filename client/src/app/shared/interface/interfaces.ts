import { Params } from "@angular/router";
// Auth ==========================================
export interface UserRegister {
  name: string;
  email: string;
  password: string;
}
export interface UserLogin {
  email: string;
  password: string;
}
// Auth ==========================================

// Seller ========================================
export interface Seller {
  name: string;
  logo: string;
  _id: string;
}
// Seller ========================================

// Product =======================================
export interface Product {
  imageSrc: string[];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  counter: number;
  category: number[];
  options: number[];
  optionsToString: string[];
  queryParams: Params;
  status: 0 | 1 | 2 | 3;
  seller: string;
  keyWords?: string[];
  description: string;
  comments: [];
  questions: [];
  user?: string; // server
  _id?: string; // server
  __v?: string; //server
}
export interface ProductInfo {
  imageSrc: string[];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  counter: number;
  category: number[];
  options: number[];
  // optionsToString: string[];
  // queryParams: Params;
  status: 0 | 1 | 2 | 3;
  seller: string;
  keyWords?: string[];
  description: string;
  // comments: [];
  // questions: [];
  user?: string; // server
  _id?: string; // server
  __v?: string; //server
}
export interface ProductCharacteristics {
  category: number[];
  options: number[];
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
export interface ProductAccessories {}
// Product =======================================

// User
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
  imageSrc: string[];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  // counter: number;
  // category: number[];
  // options: number[];
  // optionsToString: string[];
  // queryParams: Params;
  status: 0 | 1 | 2 | 3;
  // seller: string;
  // keyWords?: string[];
  // description: string;
  // comments: [];
  // questions: [];
  // user?: string; // server
  _id: string; // server
  // __v?: string; //server
}
export interface WishChecked {
  checked: boolean;
  _id: string; // server
}

export interface ShoppingCart {
  imageSrc: string[];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  counter: number;
  // category: number[];
  // options: number[];
  // optionsToString: string[];
  // queryParams: Params;
  status: 0 | 1 | 2 | 3;
  seller: string;
  // keyWords?: string[];
  // description: string;
  // comments: [];
  // questions: [];
  // user?: string; // server
  _id: string; // server
  // __v?: string; //server
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

// User

// Category ==================================
export interface CategoryProduct {
  nameCategory: string;
  nameListCategory: CategorList[];
}
export interface CategorList {
  subNameCategory: string;
  subNameListCategory: CategorSubList[];
}
export interface CategorSubList {
  titleSubNameListCategory: string | undefined;
  options: Options[];
}
export interface Options {
  name: string; // example Operating System
  htmlElement: "select"; // html tag
  select: string[]; // field for option select
}
// Category ==================================

export interface FilterNameParams {
  name: string;
  params: string[];
}

export interface ActiveFilterBlock {
  name: string;
  inputActive: ActiveFilter[];
}

export interface ActiveFilter {
  name: string;
  counter: number;
  active: boolean;
}

export interface QueryParams {
  name: string;
  query: string[];
}

// ============================
export interface LinkNavigate {
  name: string;
  link: string;
}
