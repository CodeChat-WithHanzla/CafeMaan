import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  cartItems: [
    {
      menuId: {
        type: Schema.Types.ObjectId,
        ref: "Menu",
        required: true
      },
      selectedDrink: { type: String },
      quantity: { type: Number, default: 1 },
      selectedAddOns: [
        {
          name: { type: String },
          price: { type: Number }
        }
      ],
      selectedDrinkSize: { type: String }
    }
  ]
});
const Cart = model("Cart", cartSchema);
export default Cart;
