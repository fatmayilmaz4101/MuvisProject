import { TOGGLE_THEME } from "../ActionTypes";

export interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
  payload: 'light' | 'dark';
}
export const toggleTheme = (theme: 'light' | 'dark' ): ToggleThemeAction => ({
  type: TOGGLE_THEME,
  payload: theme,
});
