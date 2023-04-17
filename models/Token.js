import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

export default mongoose.model("token", tokenSchema);
