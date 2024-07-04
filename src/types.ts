import {ImageSourcePropType} from 'react-native';

export interface MovieType {
  id: number;
  src: string;
  name: string;
  category: string;
  director: string;
  summary: string;
}
export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  phone: number;
}
export interface CategoryType {
  id: number;
  name: string;
  src: string;
  movies: MovieType[];
}
export interface CommentType {
  id: number;
  movieId: number;
  username: string;
  content: string;
  date: Date;
}
