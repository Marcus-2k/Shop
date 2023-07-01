import { Document } from "mongoose";

export interface News extends Document {
  imageSrc: string;
}
