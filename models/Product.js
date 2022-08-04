const mongoose = require("mongoose");
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
  options: {
    type: [Number],
    required: true,
  },
  optionsToString: {
    type: [[String]],
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

productSchema.index({ name: "text" });

module.exports = mongoose.model("product", productSchema);
