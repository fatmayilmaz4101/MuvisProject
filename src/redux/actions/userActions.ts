import { Alert } from "react-native";
import { AppDispatch } from "../store";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, UPDATE_REQUEST, UPDATE_SUCCESS } from "../types";
export interface UserProfileModel {
        id?: string,
        firstName: string,
        lastName: string,
        userName: string,
        password: string,
        phone: number,
}
export interface UserLoginModel {
  userName: string,
  password: string,
}

export const loginRequest = () => ({ 
    type: LOGIN_REQUEST 
});
export const loginSuccess = (user: UserLoginModel) => ({ 
    type: LOGIN_SUCCESS, payload: user 
});
export const logout = () => ({ 
    type: LOGOUT 
});
export const updateRequest = () => ({
    type: UPDATE_REQUEST
});
export const updateSuccess = (user : UserProfileModel) => ({
    type: UPDATE_SUCCESS, payload: user
});

export const loginUser = (requestUser: UserLoginModel) => {
    return async (dispatch: AppDispatch) => {
      dispatch(loginRequest());
      try {
        const response = await fetch("http://192.168.1.66:4000/users");
        const text = await response.text();
        const users = JSON.parse(text);
        const user = users.find((u: UserLoginModel) => u.userName === requestUser.userName && u.password === requestUser.password);
        if (user) {
          dispatch({ type: LOGIN_SUCCESS, payload: user });
          dispatch({ type: UPDATE_SUCCESS, payload: user });
        } else {
          Alert.alert('Hata', 'Kullanıcı bulunamadı')
          dispatch({ type: LOGIN_FAILURE, payload: true });
        }
      } catch (error: any) {
        console.log('Catch Error(loginUser): ', error);
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
      }
    };
  };

  export const updateProfile = (requestUser : UserProfileModel, userId : string) => async (dispatch : AppDispatch) => {
    dispatch(updateRequest());
    try {
      const response = await fetch(`http://192.168.1.66:4000/users/${userId}`, {
        method: 'PATCH', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestUser),
      });
      const updatedProfile = await response.json();
      dispatch({type: UPDATE_SUCCESS, payload: updatedProfile});
    } catch (error) {
      console.log("Catch Error(updateProfile): ",error)
    }
  };
