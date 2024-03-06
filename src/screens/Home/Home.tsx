import React, {useContext} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {useUser} from '../../contexts/UserContext';
import {styles} from './home.styles';
import {CounterContext, TitleContext} from '../../contexts/context';

const Home: React.FC = () => {
  const {user} = useUser();
  const {counter, setCounter} = useContext(CounterContext);
  const counterTitle = useContext(TitleContext);
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
