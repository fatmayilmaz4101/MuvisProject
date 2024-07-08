import {thunk} from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import userReducer from './reducers/userReducer';
import moviesReducer from './reducers/movieReducer';
import favoriteReducer from './reducers/favoriteReducer';

//movies ve user TanStack Query'ye çevrildi.
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    user: userReducer,
    favori: favoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(thunk),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default store;
