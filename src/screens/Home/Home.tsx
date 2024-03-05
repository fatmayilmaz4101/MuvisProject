import React, {useContext, useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {useUser} from '../../contexts/UserContext';
import {styles} from './home.styles';
import {CounterContext} from '../../contexts/context';

const Home: React.FC = () => {
  const {user} = useUser();
  const [counter, setCounter] = useState<number>(0);
  const {
    textStyle,
    greetingText,
    buttonStyle,
    seperator,
    buttonContainer,
    counterText,
  } = styles;
  const counterTitle = useContext(CounterContext);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const resetIncrement = () => {
    setCounter(0);
  };
  return (
    <SafeAreaView>
      <View style={textStyle}>
        <Text style={greetingText}> Hoşgeldin {user.userName}! </Text>
        <View style={buttonContainer}>
          <Text style={counterText}>{counterTitle}</Text>
          <Text style={counterText}>{counter}</Text>
          <View style={buttonStyle}>
            <Button color="gray" title="Arttır" onPress={handleIncrement} />
            <View style={seperator} />
            <Button color="gray" title="Sıfırla" onPress={resetIncrement} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
