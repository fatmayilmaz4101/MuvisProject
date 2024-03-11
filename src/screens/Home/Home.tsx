import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Button, FlatList} from 'react-native';
import {useUser} from '../../contexts/UserContext';
import {styles} from './home.styles';
import {CounterContext, TitleContext} from '../../contexts/context';
type Movie = {
  id: number;
  title: string;
};

const Home: React.FC = () => {
  const {user} = useUser();
  const {counter, setCounter} = useContext(CounterContext);
  const counterTitle = useContext(TitleContext);
  const [data, setData] = useState<Movie[]>([]);
  const {
    textStyle,
    greetingText,
    buttonStyle,
    seperator,
    buttonContainer,
    counterText,
  } = styles;
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const resetIncrease = () => {
    setCounter(0);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  const getTodos = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const RenderItem = ({item}: {item: Movie}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.id}</Text>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={textStyle}>
        <Text style={greetingText}> Hoşgeldin {user.userName}! </Text>
        <View style={buttonContainer}>
          <Text style={counterText}>{counterTitle}</Text>
          <Text style={counterText}>{counter}</Text>
          <View style={buttonStyle}>
            <Button color="gray" title="Arttır" onPress={handleIncrease} />
            <View style={seperator} />
            <Button color="gray" title="Sıfırla" onPress={resetIncrease} />
            <View style={seperator} />
            <Button color="gray" title="Azalt" onPress={decrease} />
          </View>
          <View style={styles.container}>
            <FlatList
              data={data}
              keyExtractor={({id}) => id.toString()}
              renderItem={({item}) => <RenderItem item={item} />}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
