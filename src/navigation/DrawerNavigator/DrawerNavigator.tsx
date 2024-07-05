import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Text, TouchableOpacity, View } from 'react-native';
import Home from '../../screens/Home/Home';
import Profile from '../../screens/Profile/Profile';
import MovieList from '../../screens/MovieList/MovieList';
import { styles } from './drawerNavigator.style';
import { Color } from '../../utilities/Color';
import Stacks from '../StackNavigator/StackNavigator'; // Ana yığını içeri aktarıyoruz
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Login from '../../screens/Login/Login';
import Categories from '../../screens/Categories/Categories';
import MovieDetails from '../../screens/MovieDetails/MovieDetails';
import Deneme from '../../screens/Deneme/Deneme';
import FavoriteList from '../../screens/FavoriteList/FavoriteList';

const Drawer = createDrawerNavigator();

 export const LogoTitle = () => {
    return (
      <Text style={styles.logoStyle}>MUVIS</Text>
    );
  }
  export const MenuIcon = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.menuIcon}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
  

function CustomDrawerContent(props:any) {
  return (
    <View style={{ flex: 1,backgroundColor: Color.BackgroundColor }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem
        label="Çıkış Yap"
        onPress={() => props.navigation.navigate('Login')}
        style={styles.logoutButton}
        labelStyle={{ color: 'white' }}
      />
    </View>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator 
    screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          borderBottomWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerLeft: () => <MenuIcon />,
        headerTitle: () => <LogoTitle />,
        headerTitleAlign: 'center',
        drawerLabelStyle: { color: 'white' }, // Çekmece içindeki yazıları beyaz yapmak için
        drawerStyle: { backgroundColor: '#000' }, // Çekmece arka plan rengi
        drawerActiveTintColor: '#e91e63', // Aktif öğe rengi

      }}

    drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen options={{ headerShown: false, title: 'Anasayfa' }} name="Stacks" component={Stacks} />
      <Drawer.Screen name="Profil Bilgilerim" component={Profile} />
      <Drawer.Screen name="Film Listesi" component={MovieList} />
      <Drawer.Screen name="Kategoriler" component={Categories} />
      <Drawer.Screen name="Favorilerim" component={FavoriteList} />

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
