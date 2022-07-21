const mongoose = require("mongoose");
const { array } = require("../middleware/upload");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: [Number],
    required: true,
  },
  keyWords: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Boolean,
    required: true,
  },
  user: {
    ref: "users",
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("product", productSchema);
