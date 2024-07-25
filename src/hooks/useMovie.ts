import {useQuery} from '@tanstack/react-query';
import {MovieType} from '@utilities/Types';
import {getMovies} from '@services/MovieService';

export const UseMovies = () => {
  return useQuery<MovieType[]>({
    queryKey: ['movie'],
    queryFn: getMovies,
    staleTime: 300000,
    refetchOnReconnect: true,
  });
};
