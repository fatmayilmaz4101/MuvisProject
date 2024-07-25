import {CommentType} from '../utilities/Types';
import apiClient from './ApiClient';

export const getComments = async (): Promise<CommentType[]> => {
  const response = await apiClient.get('/comments');
  return response.data;
};

export const sendComment = async (
  newComment: Omit<CommentType, 'id'>,
): Promise<CommentType[]> => {
  const response = await apiClient.post('/comments', newComment);
  return response.data;
};
