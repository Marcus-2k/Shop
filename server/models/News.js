import mongoose from "mongoose";
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  imageSrc: {
    type: String,
    required: true,
  },
  // startDate: {
  //   type: Date,
  //   required: true,
  // },
  // endDate: {
  //   type: Date,
  //   required: true,
  // },
  // user: {
  //   ref: "users",
  //   type: Schema.Types.ObjectId,
  // },
});

export default mongoose.model("news", newsSchema);
