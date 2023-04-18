import mongoose from "mongoose";
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
    dateOfCreation: {
      type: Date,
      required: true,
    },
    dateOfDispatch: {
      type: Date,
      default: null,
    },
    orderID: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
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
    selectTypeShippingText: String,
  },
  payment: {
    info: {},
    selectTypePayment: Number,
    selectTypePaymentText: String,
  },
});

export default mongoose.model("order", orderSchema);
