import { MovieType } from "../actions/movieActions";
import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "../types";

export interface MoviesState {
    movies: MovieType[];
    loading: boolean;
    error: string | null;
  }

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null
};

const moviesReducer = (state = initialState, action: { type: string; payload?: any }): MoviesState => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload as MovieType[] }; 
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
