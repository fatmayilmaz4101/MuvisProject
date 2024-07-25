import { MovieType } from "../../utilities/Types";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../ActionTypes";

export const addToFavorites = (movie: MovieType) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movieId: string) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});
