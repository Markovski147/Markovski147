import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authLogin";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { HttpService } from "../axios";
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";

const persistConfig = {
  key: 'auth',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authSlice, cartSlice, orderSlice)

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    cart: cartSlice,
    order: orderSlice,
  },
  middleware: [thunk]
})

const { dispatch, getState } = store
export const persistor = persistStore(store, null, () => {
  HttpService.setStore(dispatch, getState)
})
