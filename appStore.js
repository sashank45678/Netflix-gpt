import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import langReducer from "./langslice"
const appStore = configureStore({
  reducer: { user: userReducer, movies: moviesReducer, gpt: gptReducer ,langstore:langReducer},
});
export default appStore;
