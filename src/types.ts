import {Dispatch, ReactNode, SetStateAction} from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface MovieType {
  id: string;
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
  phone: string;
}
export interface CategoryType {
  id: number;
  name: string;
  src: string;
  movies: MovieType[];
}
export interface CommentType {
  id: string;
  movieId: string;
  username: string;
  content: string;
  date: string;
}
export interface DirectorType {
  id: string;
  name: string;
  src: string;
  movies: MovieType[];
}
export interface UserFormInput {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  phone: string;
}
export interface LoginFormInput {
  userName: string;
  password: string;
}
export interface CustomAvatarProps {
  size?: number;
  source: ImageSourcePropType;
  borderColor?: string;
  borderWidth?: number;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}
export interface BottomSheetProps {
  children: ReactNode;
  snapPoints: string[];
}

export interface BottomSheetRef {
  present: () => void;
  close: () => void;
}
export interface CustomButtonProps {
  title: string;
  onPress: () => void;
}
export interface LoadingComponentProps {
  isLoading: boolean;
  text: string;
}
export interface CustomTextInputProps {
  onBlur: () => void;
  onChangeText: (text: string) => void; // onChangeText'in parametre aldığından emin olun
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  placeholderTextColor?: string;
}
export  interface CustomCarouselType{
  data: CarouselDataType[],
  handlePress: Function,
  layout:  "default" | "stack" | "tinder";
  loop: boolean
}
export interface CarouselDataType{
  src: string;
  name: string;
}
export interface CustomMaskInputType {
  value: string,
  onChangeText: Dispatch<SetStateAction<string>>,
  onBlur: any
}
export interface CustomToolTipType{
  content: React.ReactElement,
  children: React.ReactNode,
  style: StyleProp<ViewStyle>
  onPress: (event: GestureResponderEvent) => void
} 
