import {UserType} from '@utilities/Types';
import apiClient from './ApiClient';

export const getUsers = async (): Promise<UserType[]> => {
  const response = await apiClient.get('/users');
  return response.data;
};
export const createUser = async (
  newUser: Omit<UserType, 'id'>,
): Promise<UserType[]> => {
  const response = await apiClient.post('/users', newUser);
  return response.data;
};
export const getUserById = async (userId: string): Promise<UserType | null> => {
  const users = await getUsers();
  return users.find(user => user.id == userId) || null;
};
