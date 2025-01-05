import { createSlice } from "@reduxjs/toolkit";

const paidCartSlice = createSlice({
  name: "paidCart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const {
        id,
        quantity,
        DealHeading,
        DealText,
        Price,
        imageUrl,
        rating,
        category,
        selectedDrink,
        selectedAddOns,
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
          quantity,
          selectedAddOns,
        });
      }
    },

    addOne: (state, action) => {
      const itemToUpdate = state.find((item) => item.id === action.payload);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },

    addMore: (state, action) => {
      const itemsToAdd = action.payload.items;
      itemsToAdd.forEach((itemToAdd) => {
        const existingItem = state.find((item) => item.id === itemToAdd.id);

        if (existingItem) {
          existingItem.quantity += itemToAdd.quantity;
        } else {
          state.push(itemToAdd);
        }
      });
    },

    removeFromPaidCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    clearPaidCart: () => {
      return [];
    },
  },
});

export const { addItem, addOne, addMore, removeFromPaidCart, clearPaidCart } =
  paidCartSlice.actions;

export default paidCartSlice.reducer;
