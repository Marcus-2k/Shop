const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const category = {
//   nameCategory: "Ноутбуки та комп'ютери",
//   nameListCategory: [
//     {
//       subNameCategory: "Планшети",
//       subNameListCategory: [
//         { titleSubNameListCategory: "....................." },
//         { titleSubNameListCategory: "....................." },
//         { titleSubNameListCategory: "....................." },
//       ],
//     },
//      ...
//   ],
// };

const categorySchema = new Schema({
  category: {
    type: [Object],
  },
});

module.exports = mongoose.model("category", categorySchema);
