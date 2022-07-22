const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  _id_user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

module.exports = mongoose.model("token", tokenSchema);
