import { Schema, model } from "mongoose";

const menuSchema = new Schema({
  DealHeading: {
    type: String,
    required: true,
  },
  DealText: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Menu = model("Menu", menuSchema);

export default Menu;