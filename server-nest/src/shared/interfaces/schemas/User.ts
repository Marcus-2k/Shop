import { Document } from "mongoose";

export interface User extends Document {
  avatar: string | null;
  name: string;
  lastName: string | null;
  email: string;
  birthday: Date | null;
  country: string | null;
  password: string;
  history__view: string[];
  favorite: string[];
  shoppingCart: string[];
}
