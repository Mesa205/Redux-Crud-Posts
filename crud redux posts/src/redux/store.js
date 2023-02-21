import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice.js";
import modalPostReducer from "./modalPostSlice"

export const store = configureStore({
  reducer: { postStore: postReducer, modalStore: modalPostReducer },
});
