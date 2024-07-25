import {MovieType} from '@utilities/Types';
import apiClient from './ApiClient';

export const getMovies = async (): Promise<MovieType[]> => {
  const response = await apiClient.get('/movies');
  return response.data;
};
