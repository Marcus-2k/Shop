const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  imageSrc: {
    type: Array, // [ 'product.jpg', 'product.jpg', 'product.jpg' ]
    required: true,
  },
  name: {
    type: String, // Samsung S21 32ГБ
    required: true,
  },
  price: {
    type: Number, // 30000
    required: true,
  },
  action: {
    type: Boolean, // true / false
    required: true,
  },
  actionPrice: {
    type: Number, // action === true >>> 27000 | action === false >>> -1
    required: false,
  },
  counter: {
    type: Number, // 15
    required: true,
  },
  category: {
    type: Array, // [ 1, 2, 9 ]
    required: true,
  },
  characteristics: {
    type: Array, // [ 0, 0, 9, 13, 4, 8, 21 ]
    required: true,
  },
  status: {
    type: Number, // 0 = 'В наявності', 1 = 'Очікується постачання', 2 = 'Немає в наявності', 3 = 'Закінчується',
    required: true,
  },
  keywords: {
    type: Array, // [ 'phone', 'телефон', 'samsung']
  },
  description: {
    type: String,
    required: true, // ....
  },
  comments: {
    type: Array,
    required: true, // ....
  },
  questions: {
    type: Array,
    required: true, // ....
  },
  user: {
    ref: "users",
    type: Schema.Types.ObjectId,
  },
});

productSchema.index({ name: "text" });

module.exports = mongoose.model("product", productSchema);
