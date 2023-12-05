import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/LoginSlice";
import TodoSlice from "./slices/TodoSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    todos: TodoSlice.reducer,
  },
});
export default store;
