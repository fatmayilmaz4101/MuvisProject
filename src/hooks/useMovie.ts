import {useQuery} from '@tanstack/react-query';
import {MovieType} from '../types';
import {getMovies} from '../sevices/movieService';

export const useMovies = () => {
  return useQuery<MovieType[]>({
    queryKey: ['movie'],
    queryFn: getMovies,
    staleTime: 300000,
    refetchOnReconnect: true,
  });
};
