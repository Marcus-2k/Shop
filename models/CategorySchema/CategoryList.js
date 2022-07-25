const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoryListSchema = new Schema({});

module.exports = mongoose.model("categoryList", categoryListSchema);
