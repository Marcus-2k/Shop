export interface UserRegister {
  name: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

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
  action: boolean;
  _id?: string; // server
  user?: string; // server
}

export interface User {
  avatar: string | null | ArrayBuffer;
  name: string;
  lastName: string;
  email: string;
  birthday: string;
  country: string;
}

export interface userResponse {
  _id: string | null;
  avatar: string;
  name: string | null;
  lastName: string | null;
  email: string | null;
  birthday: string | null;
  country: number;
}

export interface oldUserResponse {
  avatar: string;
  name: string | null;
  lastName: string | null;
  birthday: string | null;
  country: number;
}

// ==================================
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

// ==================================
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
