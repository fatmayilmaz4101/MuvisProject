import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/favoriteActions';
import { MovieType } from "../../types";


export interface FavoritesState{
    favorites: MovieType[];
    loading: boolean,
    error: string | null;
}
const initialState : FavoritesState = {
  favorites: [],
  loading: false,
  error: null
};

const favoriteReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FROM_FAVORITES:
      return { ...state, favorites: state.favorites.filter((movie) => movie.id !== action.payload) };
    default:
      return state;
  }
};

export default favoriteReducer;
