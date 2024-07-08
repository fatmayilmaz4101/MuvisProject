import {useQuery} from '@tanstack/react-query';
import {CategoryType} from '../types';
import {getCategories} from '../sevices/categoryService';

export const useCategories = () => {
  return useQuery<CategoryType[]>({
    queryKey: ['category'],
    queryFn: getCategories,
    staleTime: 300000,
    refetchOnReconnect: true,
  });
};
