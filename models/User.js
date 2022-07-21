const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  avatar: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String | null,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthday: {
    type: String | null,
    required: false,
  },
  country: {
    type: String | null,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("users", userSchema);
