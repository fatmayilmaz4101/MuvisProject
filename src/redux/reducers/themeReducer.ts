import { TOGGLE_THEME } from "../ActionTypes";

export interface ThemeState {
  theme: 'light' | 'dark';
}
const initialState: ThemeState = {
  theme: 'light',
};
const themeReducer = (
  state = initialState,
  action: {type: string; payload?: any},
): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {...state, theme: action.payload};
    default:
      return state;
  }
};

export default themeReducer;
