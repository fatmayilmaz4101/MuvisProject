import { MovieType } from "./movieActions";

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
  
export const addToFavorites = (movie:MovieType) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movieId:number) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});
