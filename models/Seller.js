const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("sellers", sellerSchema);
