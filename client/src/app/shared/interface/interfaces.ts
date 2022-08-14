export interface UserRegister {
  name: string;
  email: string;
  password: string;
}
export interface UserLogin {
  email: string;
  password: string;
}
// Product =======================================
export interface Product {
  name: string;
  imageSrc: string;
  price: number;
  category: number[];
  options: number[];
  optionsToString: string[];
  queryParams: {};
  keyWords?: [string];
  description: string;
  action: Boolean;
  counter: Number;
  status: 0 | 1 | 2 | 3;
  _id?: string; // server
  user?: string; // server
  __v?: string | number; //server
}
export interface ProductInfo {
  name: string;
  imageSrc: string;
  price: number;
  category: number[];
  options: number[];
  optionsToString: string[];
  queryParams: {};
  keyWords?: [string];
  description: string;
  action: Boolean;
  counter: Number;
  status: 0 | 1 | 2 | 3;
  _id: string; // server
  user?: string; // server
}
export interface ProductCharacteristics {
  category: number[];
  options: number[];
  optionsToString: string[];
  queryParams: {};
}
export interface ProductComments {
  category: number[];
  options: number[];
  optionsToString: string[];
  queryParams: {};
}
export interface ProductQuestions {
  category: number[];
  options: number[];
  optionsToString: string[];
  queryParams: {};
}
export interface ProductPhoto {
  category: number[];
  options: number[];
  optionsToString: string[];
  queryParams: {};
}
export interface ProductAccessories {
  category: number[];
  options: number[];
  optionsToString: string[];
  queryParams: {};
}
// Product =======================================

export interface User {
  avatar: string | null | ArrayBuffer;
  name: string;
  lastName: string;
  email: string;
  birthday: string;
  country: string;
}

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
