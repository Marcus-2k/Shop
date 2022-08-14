const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
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
    type: [String],
    required: true,
  },
  queryParams: {
    type: Object,
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
  comments: {
    type: Array,
    required: true,
  },
  counter: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  seller: {
    // ref:'seller',
    type: Schema.Types.ObjectId,
    require: true,
  },
  user: {
    ref: "users",
    type: Schema.Types.ObjectId,
  },
});

productSchema.index({ name: "text" });

module.exports = mongoose.model("product", productSchema);
