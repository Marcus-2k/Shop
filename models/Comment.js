const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  star: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user_id: {
    ref: "users",
    type: Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("comments", commentSchema);
