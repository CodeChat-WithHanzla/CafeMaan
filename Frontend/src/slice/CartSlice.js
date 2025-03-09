import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const {
        id,
        DealHeading,
        DealText,
        Price,
        imageUrl,
        rating,
        category,
        selectedDrink,
        quantity,
        selectedAddOns,
        selectedDrinkSize
      } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({
          id,
          DealHeading,
          DealText,
          Price,
          imageUrl,
          rating,
          category,
          selectedDrink,
          selectedDrinkSize,
          quantity,
          selectedAddOns
        });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: () => {
      return [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
