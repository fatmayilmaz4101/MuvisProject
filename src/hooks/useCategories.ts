import {useQuery} from '@tanstack/react-query';
import {CategoryType} from '@utilities/Types';
import {getCategories} from '@services/CategoryService';

export const UseCategories = () => {
  return useQuery<CategoryType[]>({
    queryKey: ['category'],
    queryFn: getCategories,
    staleTime: 300000,
    refetchOnReconnect: true,
  });
};
