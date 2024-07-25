import {DirectorType} from '../utilities/Types';
import apiClient from './ApiClient';

export const getDirectors = async (): Promise<DirectorType[]> => {
  const response = await apiClient.get('/directors');
  return response.data;
};
