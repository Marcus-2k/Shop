import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  avatar: {
    type: String || null,
    default: null,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String || null,
    default: null,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthday: {
    type: Date || null,
    default: null,
    required: false,
  },
  country: {
    type: String || null,
    default: null,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  history__view: {
    type: [String],
    default: [],
    required: true,
  },
  favorite: {
    type: [String],
    default: [],
    require: true,
  },
  shoppingCart: {
    type: [String],
    default: [],
    require: true,
  },
});

export default mongoose.model("users", userSchema);
