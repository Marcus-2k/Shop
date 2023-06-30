import { Schema } from "mongoose";

export const NewsSchema = new Schema({
  imageSrc: {
    type: String,
    required: true,
  },
});
