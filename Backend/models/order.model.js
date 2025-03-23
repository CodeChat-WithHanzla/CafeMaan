import { Schema, model } from "mongoose";
const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    menuId: {
      type: Schema.Types.ObjectId,
      ref: "Menu",
      required: true
    },
    DealHeading: {
      type: String,
      required: true
    },
    DealText: {
      type: String,
      required: true
    },
    Price: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    selectedDrink: {
      type: String
    },
    quantity: {
      type: Number,
      default: 1
    },
    selectedAddOns: {
      name: { type: String },
      price: { type: Number },
      default: []
    },
    selectedDrinkSize: {
      type: String
    },
    isPaymentCompleted: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Cancelled"],
      default: "Pending"
    }
  },
  { timestamps: true }
);
const Order = model("Order", OrderSchema);
export default Order;
