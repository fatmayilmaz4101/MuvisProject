import { UserProfileModel } from '../actions/userActions';
import { UserLoginModel } from '../actions/userActions';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, UPDATE_REQUEST, UPDATE_SUCCESS } from '../types';

export interface UserState {
  login: UserLoginModel;
  profile: UserProfileModel;
}
const initialState : UserState = {
  login: {userName: '',password: ''},
  profile: {
    id: -1,
    firstName: '', 
    lastName: '', 
    userName: '', 
    password: '', 
    phone: 0,    
}};

const userReducer = (state = initialState, action: { type: string; payload?: any }): UserState => {
  switch (action.type) {
      case LOGIN_REQUEST:
      case UPDATE_REQUEST:
          return { ...state };
      case LOGIN_SUCCESS:
          return { ...state, login: action.payload };
      case UPDATE_SUCCESS:
          return { ...state, profile: action.payload };
      case LOGOUT:
          return { ...initialState, login: initialState.login };
      default:
          return state;
  }
};

export default userReducer;
