const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String, // Samsung S21 32ГБ
    required: true,
  },
  imageSrc: {
    type: Array, // [ 'product.jpng', 'product.jpng', 'product.jpng' ]
    required: true,
  },
  price: {
    type: Number, // 30300
    required: true,
  },
  category: {
    type: Array, // [ 0, 0, 9 ]
    required: true,
  },
  options: {
    type: Array, // [ 0, 0, 9 ]
    required: true,
  },
  action: {
    type: Boolean, // true / false
    required: true,
  },
  actionPrice: {
    type: Number, // 29500
    required: false,
  },
  counter: {
    type: Number, // 15
    required: true,
  },
  optionsToString: {
    type: Array, // [ '32 ГБ', 'Білий', '2 роки' ]
    required: true,
  },
  queryParams: {
    type: Object, // {ram: '32 ГБ', color: 'Білий', guarantee: '2 роки' }
    required: true,
  },
  status: {
    type: Number, // 0 = 'В наявності', 1 = 'Очікується постачання', 2 = 'Немає в наявності', 3 = 'Закінчується',
    required: true,
  },
  seller: {
    type: String, // '_id'
    require: true,
  },
  keyWords: {
    type: Array, // [ 'phone', 'телефон', 'samsung']
  },
  description: {
    type: String,
    required: true, // ....
  },
  comments: {
    type: Array,
    required: true, /// ....
  },
  user: {
    ref: "users",
    type: Schema.Types.ObjectId,
  },
});

productSchema.index({ name: "text" });

module.exports = mongoose.model("product", productSchema);
