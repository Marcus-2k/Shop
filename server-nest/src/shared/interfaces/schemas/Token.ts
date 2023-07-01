import { Document } from "mongoose";

export interface Token extends Document {
  user: string;
  refreshToken: string;
}
