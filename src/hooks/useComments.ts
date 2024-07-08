import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {CommentType} from '../types';
import {getComments, sendComment} from '../sevices/commentService';

export const useComments = () => {
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
