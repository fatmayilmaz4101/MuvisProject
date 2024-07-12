import 'react-native-gesture-handler';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Switch, Text, TouchableOpacity, View} from 'react-native';
import Profile from '../../screens/Profile/Profile';
import MovieList from '../../screens/MovieList/MovieList';
import {styles} from './drawerNavigator.style';
import Stacks from '../StackNavigator/StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import FavoriteList from '../../screens/FavoriteList/FavoriteList';
import { toggleTheme } from '../../redux/actions/themeActions';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { getThemeColor } from '../../color';
import { Color } from '../../utilities/Color';

const Drawer = createDrawerNavigator();

export const LogoTitle = () => {
  const theme = useSelector((state:RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  return <Text style={[styles.logoStyle, {color: themeColors.danger}]}>MUVIS</Text>;
};
export const MenuIcon = () => {
  const theme = useSelector((state:RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);
  const navigation = useNavigation();
  return (
    <View style={styles.menuIcon}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Ionicons name="menu" size={24} color={themeColors.titleColor} />
      </TouchableOpacity>
    </View>
  );
};


function DrawerNavigator() {
  const dispatch = useAppDispatch();
  const theme = useSelector((state:RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  const toggleSwitch = async (value: boolean) => {
    if(value){
      dispatch(toggleTheme('dark'))
    } else{
      dispatch(toggleTheme('light'))
    }

  };

  function CustomDrawerContent(props: any) {
    return (
      <View style={{flex: 1, backgroundColor: themeColors.drawerBackground}}>
          <Switch
          trackColor={{false: Color.Dark, true: Color.Orange}}
          thumbColor={theme ? 'dark' : 'light'}
          onValueChange={toggleSwitch}
          value={theme === 'dark'}
        />
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={styles.contentContainer}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <DrawerItem
          label="Çıkış Yap"
          onPress={() => props.navigation.navigate('Login')}
          style={styles.logoutButton}
          labelStyle={{color: themeColors.titleColor}}
        />
      </View>
    );
  }
  
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: themeColors.background,
          borderBottomWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerLeft: () => <MenuIcon />,
        headerTitle: () => <LogoTitle />,
        headerTitleAlign: 'center',
        drawerLabelStyle: {color: themeColors.titleColor},
        drawerActiveTintColor: themeColors.drawerActiveTintColor,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        options={{headerShown: false, title: 'Anasayfa'}}
        name="Stacks"
        component={Stacks}
      />
      <Drawer.Screen name="Profil Bilgilerim" component={Profile} />
      <Drawer.Screen name="Film Listesi" component={MovieList} />
      <Drawer.Screen name="Favorilerim" component={FavoriteList} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
