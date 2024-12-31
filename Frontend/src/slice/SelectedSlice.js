import { createSlice } from "@reduxjs/toolkit";

const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState: null,
  reducers: {
    setSelectedItem: (state, action) => action.payload,
    clearSelectedItem: () => null,
  },
});

export const { setSelectedItem, clearSelectedItem } = selectedItemSlice.actions;
export default selectedItemSlice.reducer;
