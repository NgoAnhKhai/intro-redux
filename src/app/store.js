import counterReducer from "../feature/counter/reducer";
import { configureStore } from "@reduxjs/toolkit";
import multiCounterReducer from "../feature/multiCounter/reducer";
const initialState = {};
const store = configureStore({
  reducer: {
    counter: counterReducer,
    multiCounter: multiCounterReducer,
  },
  initialState,
});
export default store;
