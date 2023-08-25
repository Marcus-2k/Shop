import { Schema, SchemaTypes } from "mongoose";

export const ProductSchema: Schema = new Schema({
  imageSrc: {
    type: SchemaTypes.Array,
    required: true,
  },
  name: {
    type: SchemaTypes.String,
    required: true,
  },
  price: {
    type: SchemaTypes.Number,
    required: true,
  },
  actionPrice: {
    type: SchemaTypes.Mixed, // Number | null
    required: false,
    validate: {
      validator: function (value: number | null) {
        if (value === null) {
          return true;
        }

        if (isNaN(value) === false && value >= 0) {
          return true;
        }

        return false;
      },
    },
  },
  counter: {
    type: SchemaTypes.Number,
    required: true,
  },
  status: {
    type: SchemaTypes.Number, // 0 = 'В наявності', 1 = 'Очікується постачання', 2 = 'Немає в наявності', 3 = 'Закінчується'
    required: true,
  },
  category: {
    type: SchemaTypes.String,
    required: true,
  },
  categoryName: {
    type: SchemaTypes.Array,
    required: true,
  },
  characteristics: {
    type: SchemaTypes.Array, // [ [0], [8], [21, 3, 4] ]
    required: true,
  },
  characteristicsName: {
    type: Object, // { body_material: ["Метал", "Пластик", "Скло"], cpu_mp: ["Qualcomm Snapdragon"] ...}
    required: true,
  },
  keywords: {
    type: SchemaTypes.Array,
    require: true,
    default: [],
  },
  description: {
    type: SchemaTypes.String,
    required: true,
  },
  comments: {
    type: SchemaTypes.Array,
    required: true,
    default: [],
  },
  questions: {
    type: SchemaTypes.Array,
    required: true,
    default: [],
  },
  accessories: {
    type: SchemaTypes.Array,
    required: true,
    default: [],
  },
  user: {
    ref: "users",
    type: Schema.Types.ObjectId,
    require: true,
  },
});

ProductSchema.index({ name: "text" });
