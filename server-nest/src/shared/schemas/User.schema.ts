import { Schema, SchemaTypes } from "mongoose";

export const UserSchema = new Schema({
  avatar: {
    type: SchemaTypes.Mixed, // String || null
    default: null,
    required: true,
  },
  name: {
    type: SchemaTypes.String,
    required: true,
  },
  lastName: {
    type: SchemaTypes.Mixed, // String || null
    default: null,
    required: false,
  },
  email: {
    type: SchemaTypes.String,
    required: true,
    unique: true,
  },
  birthday: {
    type: SchemaTypes.Date,
    default: null,
    required: false,
  },
  country: {
    type: String || null,
    default: null,
    required: false,
  },
  password: {
    type: SchemaTypes.String,
    required: true,
  },
  history__view: {
    type: [SchemaTypes.ObjectId],
    default: [],
    required: true,
  },
  favorite: {
    type: [SchemaTypes.ObjectId],
    default: [],
    require: true,
  },
  shoppingCart: {
    type: [SchemaTypes.ObjectId],
    default: [],
    require: true,
  },
});
