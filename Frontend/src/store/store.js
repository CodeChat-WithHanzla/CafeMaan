import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import cartReducer from "../slice/CartSlice";
import menuItemsReducer from "../slice/MenuSlice";
import selectedItemReducer from "../slice/SelectedSlice";
import paidCartReducer from "../slice/PaidCartSlice";
import userReducer from "../slice/UserSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  menuItems: menuItemsReducer,
  selectedItem: selectedItemReducer,
  paidCart: paidCartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
