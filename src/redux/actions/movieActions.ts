import {AppDispatch} from '../store';
import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from '../types';

export interface MovieType {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export const fetchMovies = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({type: FETCH_MOVIES_REQUEST});
    setTimeout(async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/photos',
        );
        const movies = (await response.json()) as MovieType[];
        dispatch({type: FETCH_MOVIES_SUCCESS, payload: movies});
      } catch (error: any) {
        dispatch({type: FETCH_MOVIES_FAILURE, payload: error.message});
      }
    }, 1000);
  };
};
