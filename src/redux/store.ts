import {thunk} from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import userReducer from './reducers/userReducer';
import moviesReducer from './reducers/movieReducer';
import favoriteReducer from './reducers/favoriteReducer';
import themeReducer from './reducers/themeReducer';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

//movies ve user TanStack Query'ye çevrildi.

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,

    movies: moviesReducer,
    user: userReducer,
    favori: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const persistor = persistStore(store);

export default store;
