import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {UserType} from '@utilities/Types';
import {createUser, getUsers} from '@services/UserService';

export const useUser = () => {
  const queryClient = useQueryClient();
  const userQuery = useQuery<UserType[]>({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 300000,
    refetchOnReconnect: true,
  });
  const addUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']});
    },
  });

  return {
    ...userQuery,
    addUser: addUserMutation.mutate,
  };
};
