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

// Category List for component /account/product/new
export interface CategorListSub {
  titleSubNameListCategory: string;
}
export interface CategorList {
  subNameCategory: string;
  subNameListCategory: CategorListSub[];
}
export interface Category {
  nameCategory: string;
  nameListCategory: CategorList[];
}
//
