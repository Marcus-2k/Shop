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

export interface ActiveFilter {
  // category: number[];
  params: number[];
  active: boolean;
}

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
  options: options[];
  // options: optionsSelect | optionsInput;
  // options: {}
}

export interface options {
  name: string; // example Operating System
  htmlElement: "select";
  select: string[];
}

// export interface optionsInput {
//   name: string;
//   element: "input";
//   type: "text" | "number" | "date";
// }

// export interface optionsSelect {
//   name: string;
//   element: "select";
//   select: string[];
// }
