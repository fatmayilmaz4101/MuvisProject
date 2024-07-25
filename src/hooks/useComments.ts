import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {CommentType} from '@utilities/Types';
import {getComments, sendComment} from '@services/CommentService';

export const UseComments = () => {
  const queryClient = useQueryClient();

  const commentsQuery = useQuery<CommentType[]>({
    queryKey: ['comments'],
    queryFn: getComments,
    staleTime: 300000,
    refetchOnReconnect: true,
  });
  const addCommentMutation = useMutation({
    mutationFn: sendComment,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['comments']});
    },
  });
  return {
    ...commentsQuery,
    addComment: addCommentMutation.mutate,
  };
};
