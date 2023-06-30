import { Schema } from "mongoose";

export const TokenSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  refreshToken: {
    type: String,
    required: true,
  },
});
