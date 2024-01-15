import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./todos/todoslice";
import quoteSlice from "./quotes/quoteSlice";

const store = configureStore({
  reducer: {
    todos: todoslice,
    quotes: quoteSlice,
  },
});

export default store;
