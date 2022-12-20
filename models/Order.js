const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  info: {
    seller: {
      ref: "users",
      type: Schema.Types.ObjectId,
      required: true,
    },
    merchant: {
      ref: "users",
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  product: {
    info: {
      product_id: {
        ref: "product",
        type: [Schema.Types.ObjectId],
        required: true,
      },
      counter: [Number],
      totalPrice: Number,
      totalActionPrice: Number,
      totalCounterProduct: Number,
    },
  },
  contacts: {
    info: {
      name: String,
      email: String,
      tel: String,
    },
  },
  shipping: {
    info: {
      addressesPresent: String,
      addressesMainDescription: String,
      addressesWarehousesDescription: String,
    },
    selectTypeShipping: Number,
  },
  payment: {
    info: {},
    selectTypePayment: Number,
  },
});

module.exports = mongoose.model("order", orderSchema);
