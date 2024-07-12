import {UserProfileModel} from '../actions/userActions';
import {UserLoginModel} from '../actions/userActions';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from '../types';

export interface UserState {
  login: UserLoginModel;
  profile: UserProfileModel;
  error: boolean;
  isLoggedIn: boolean; 
}
const initialState: UserState = {
  login: {userName: '', password: ''},
  profile: {
    id: '',
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    phone: 0,
  },
  error: false,
  isLoggedIn: false, // Başlangıçta giriş yapılmamış
};

const userReducer = (
  state = initialState,
  action: {type: string; payload?: any},
): UserState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state};
    case UPDATE_REQUEST:
      return {...state};
    case LOGIN_SUCCESS:
      return {...state, login: action.payload, isLoggedIn: true};
    case UPDATE_SUCCESS:
      return {...state, profile: action.payload};
    case LOGIN_FAILURE:
      return {...state, error: action.payload};
    case LOGOUT:
      return {...initialState, login: initialState.login, isLoggedIn: false};
    default:
      return state;
  }
};

export default userReducer;
