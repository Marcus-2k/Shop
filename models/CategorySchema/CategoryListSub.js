const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoryListSubSchema = new Schema({});

module.exports = mongoose.model("categoryListSub", categoryListSubSchema);
