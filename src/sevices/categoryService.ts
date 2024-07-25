import {CategoryType} from '../utilities/Types';
import apiClient from './ApiClient';

export const getCategories = async (): Promise<CategoryType[]> => {
  const response = await apiClient.get('/categories');
  return response.data;
};
