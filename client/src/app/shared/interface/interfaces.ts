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
  keyWords?: [string]; // no required
  description: string;
  action: boolean;
  _id?: string; // server
  user?: string; // server
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
  name: string; // example name uniqueCategory
  params: string[];
}

export interface FilterParamsBlock {
  name: string; // example name uniqueCategory
  inputActive: ActiveFilter[];
}

export interface ActiveFilter {
  name: string;
  counter: number;
  active: boolean;
}
