import React, {useRef} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './home.styles';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';


const {width: viewportWidth} = Dimensions.get('window');
interface Category {
  id: number;
  title: string;
  imageUrl: string;
}
interface Director {  
  name: string;
  imageUrl: ImageSourcePropType;
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Dram',
    imageUrl:
      'https://unsplash.com/photos/the-beatles-vinyl-record-sleeve-BQTHOGNHo08',
  },
  {
    id: 2,
    title: 'Aksiyon',
    imageUrl:
      'https://unsplash.com/photos/batman-standing-under-steel-roof-meqVd5zwylI',
  },
  {
    id: 3,
    title: 'Korku',
    imageUrl: 'https://image.unsplash.com/1024x768/?harry-potter',
  },
];
const renderItem = ({item}: {item: Category}) => (
  <View style={styles.slide}>
    <Image source={{uri: item.imageUrl}} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  </View>
);
const datas: Director[] = [
  {name: 'Yılmaz', imageUrl: require('../../../assets/images/bojack-horseman-avatar.jpg')},
  {name: 'Yılmaz Erdoğan', imageUrl: require('../../../assets/images/boss-baby-avatar.png'),  },
  {name: 'Yılmaz Erdoğan', imageUrl: require('../../../assets/images/jworld-avatar.png'),  },
  {name: 'Erdoğan', imageUrl: require('../../../assets/images/shera-avatar.jpg'),  },
  {name: 'Yılmaz Erdoğan', imageUrl: require('../../../assets/images/rick-avatar.png'),  }
];

const Home = () => {
  const [active, setActive] = React.useState('');

  const login = useSelector((state: RootState) => state.user);
  const carouselRef = useRef<Carousel<any>>(null);
    const handleAvatarPress = (item: Director) => {
    console.log(`${item.name} avatarına tıklandı`);
  };
  const renderAvatar = ({item}: {item: Director}) => {
    return (
      <TouchableOpacity onPress={() => handleAvatarPress(item)}>
        <View style={styles.avatarOption}>
          <CustomAvatar style={[styles.avatarOption]} size={80} source={item.imageUrl} />
          <Text style={styles.directorName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.homeScreen}>
      <View>
      <Text style={styles.welcomeMessage}>
        {login.login.userName}, senin için seçtiklerimize göz at
      </Text>
      <Carousel
        ref={carouselRef}
        data={categories}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth * 0.8}
        layout="default"
      />
      </View>
      <Text style={styles.welcomeMessage}>En Beğenilen Yönetmenler</Text>
      <View style={styles.directorAvatar}>
        <FlatList
          data={datas}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={renderAvatar}
          key={(3).toString()} // key propunu eklenerek bileşeni yeniden render etme zorlandı
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
