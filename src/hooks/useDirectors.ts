import {useQuery} from '@tanstack/react-query';
import {DirectorType} from '@utilities/Types';
import {getDirectors} from '@services/DirectorService';

export const UseDirector = () => {
  return useQuery<DirectorType[]>({
    queryKey: ['director'],
    queryFn: getDirectors,
    staleTime: 300000,
    refetchOnReconnect: true,
  });
};
