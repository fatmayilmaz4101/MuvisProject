import moviesReducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "./reducers/userReducer";

const store = configureStore({
    reducer: {
      movies: moviesReducer,
      user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false, immutableCheck: false}).concat(thunk)
  });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export default store