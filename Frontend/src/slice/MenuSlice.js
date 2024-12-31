import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [], 
  isLoading: false, 
  error: null, 
};

const menuItemsSlice = createSlice({
  name: "menuItems",
  initialState,
  reducers: {
    
    setMenuItems(state, action) {
      state.items = action.payload;
    },
    
    addMenuItem(state, action) {
      state.items.push(action.payload);
    },
    
    removeMenuItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    
    updateMenuItem(state, action) {
      const { id, updatedData } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex >= 0) {
        state.items[itemIndex] = { ...state.items[itemIndex], ...updatedData };
      }
    },
    
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  setMenuItems,
  addMenuItem,
  removeMenuItem,
  updateMenuItem,
  setLoading,
  setError,
} = menuItemsSlice.actions;

export default menuItemsSlice.reducer;
