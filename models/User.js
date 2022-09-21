const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  avatar: {
    type: String || undefined,
    default: undefined,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthday: {
    type: Date,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  history__view: {
    type: Array,
    required: true,
  },
  favorite: {
    type: Array,
    require: true,
  },
  shoppingCart: {
    type: Array,
    require: true,
  },
});

module.exports = mongoose.model("users", userSchema);
