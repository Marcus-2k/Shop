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

export interface ActiveCategory {
  category: number[];
  active: boolean;
}

// Category Product
export interface CategorSubList {
  titleSubNameListCategory: string;
}
export interface CategorList {
  subNameCategory: string;
  subNameListCategory: CategorSubList[];
}
export interface CategoryProduct {
  nameCategory: string;
  nameListCategory: CategorList[];
}
//
