import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/CartSlice";
import menuItemsReducer from "../slice/MenuSlice";
import selectedItemReducer from "../slice/SelectedSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    menuItems: menuItemsReducer,
    selectedItem: selectedItemReducer,
  },
});

export default store;
