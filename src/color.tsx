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
    commentContainer: string,
    sendInputContainer: string,

    primary: string;
    primaryTextColor: string;
    lighterBlack: string;
    secondaryTextColor: string;
    inActiveUnderlineTextInputColor: string;
    tertiaryTextColor: string;
    whiteColor: string;
    lightPrimaryColor: string;
    favouriteButtonColor: string;
    addPhotoButtonColor: string;
    ratingIconColor: string;
    disabledButtonColor: string;
    onboardingInactiveIconColor: string;
    tabBarTextColor: string;
    tabColor: string;
    gradientColor: string;
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

    primaryTextColor: '#000000',
    lighterBlack: '#FFFFFF',
    secondaryTextColor: '#FFFFFF',
    tertiaryTextColor: '#FFFFFF',
    gradientColor: '#61D2C4',
    tabColor: '#FFFFFF',
    ratingIconColor: '#FFCD00',
    primary: '#2DDA93',
    disabledButtonColor: '#AAAAAA',
    onboardingInactiveIconColor: '#DBDBDB',
    inActiveUnderlineTextInputColor: '#A7A7A7',
    lightPrimaryColor: '#61D2C4',
    tabBarTextColor: '#D2D2D2',
    whiteColor: '#FFFFFF',
    favouriteButtonColor: '#FF6262',
    addPhotoButtonColor: '#48A2F5',
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

    primaryTextColor: '#FFFFFF',
    tertiaryTextColor: '#1E1E1E',
    secondaryTextColor: '#F5F5F5',
    lighterBlack: '#777777',
    tabColor: '#FFFFFF',
    ratingIconColor: '#FFCD00',
    primary: '#2DDA93',
    disabledButtonColor: '#AAAAAA',
    lightPrimaryColor: '#61D2C4',
    gradientColor: '#1B1C1E',
    onboardingInactiveIconColor: '#DBDBDB',
    inActiveUnderlineTextInputColor: '#A7A7A7',
    tabBarTextColor: '#D2D2D2',
    whiteColor: '#FFFFFF',
    favouriteButtonColor: '#FF6262',
    addPhotoButtonColor: '#48A2F5',
  };
  const themes = {
    light: {...Colors},
    dark: {...DarkColors},
  };

  
  export const getThemeColor = (
    theme: 'light' | 'dark' = 'light',
    useSystemTheme?: 'light' | 'dark',
  ) => {
    const themeMode = themes[theme];
    return themeMode;
  };
  