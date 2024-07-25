export interface ColorProps {
    background: string;
    drawerBackground: string;
    titleColor: string;
    drawerActiveTintColor: string;
    logo: string;
    blurColor: string[];
    commentInput: string;
    commentDateColor: string;
    danger: string;
    cardBottom: string;
    commentContainer: string;
    sendInputContainer: string;
    modalBackground: string;
    modalContent: string;
    
  }
  export const Colors: ColorProps = {
    drawerBackground: 'white',
    background: '#E5E5E5',
    titleColor: 'black',
    drawerActiveTintColor:'#e91e63',
    logo: 'red',
    blurColor: ['transparent','gray','gray'],
    commentInput: 'black',
    commentDateColor: 'gray',
    danger: 'red',
    cardBottom: 'gray',
    commentContainer: '#b7b9bd',
    sendInputContainer: 'gray',
    modalBackground: 'rgba(0, 0, 0, 0.5)',
    modalContent: 'white'

  };
  export const DarkColors: ColorProps = {
    background: 'black',
    drawerBackground: '#17181a',
    titleColor: 'white',
    drawerActiveTintColor:'#e91e63',
    logo: 'red',
    blurColor: ['transparent','black','black'],
    commentInput: 'white',
    commentDateColor: 'gray',
    danger: 'red',
    cardBottom: '#17181a',
    commentContainer: '#17181a',
    sendInputContainer: 'black',
    modalBackground: 'rgba(0, 0, 0, 0.5)',
    modalContent: '#17181a'
  };
  const themes = {
    light: {...Colors},
    dark: {...DarkColors},
  };

  
  export const getThemeColor = (
    theme: 'light' | 'dark' = 'light',
  ) => {
    const themeMode = themes[theme];
    return themeMode;
  };
  