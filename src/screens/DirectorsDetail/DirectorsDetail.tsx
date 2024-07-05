import { SafeAreaView } from "react-native-safe-area-context"
import CustomAvatar from "../../components/CustomAvatar/CustomAvatar"
import { Text } from "react-native-paper"
import { styles } from "./director.Detail.style";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { MovieType } from "../../types";
import { useNavigation } from "@react-navigation/native";

const DirectorsDetail = ({route}:any) => {
    const navigation = useNavigation<any>();
    const {name, src, movies} = route?.params?.directors || {};
    
    const handlePress = (item: MovieType) => {
        navigation.navigate('MovieDetail', {movie: item});
      };
    
    const renderItem = ({ item }: { item: MovieType }) => (
        <View  style={styles.movieContainer}>
            <TouchableOpacity onPress={() => handlePress(item)}>
                <Image source={{ uri: item.src }} style={styles.movieImage} />
                <Text style={styles.movieTitle}>{item.name}</Text>
            </TouchableOpacity>
        </View>
      );
    
return(
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.directorStyle}>
        <CustomAvatar  size={80} source={{uri: src}} />
        <Text style={styles.directorName}>{name}</Text>
        </View>
        <View style={styles.movieStyle}>
        <FlatList
        keyExtractor={(item, index) => index.toString()}
          data={movies}
          renderItem={renderItem}
          numColumns={2}
        />

        </View>
    </SafeAreaView>
)
}
export default DirectorsDetail