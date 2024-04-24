import React, {useContext} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {CounterContext, TitleContext} from '../../contexts/Context';
import {styles} from './counter.styles';
import { Color } from '../../utilities/Color';

const Counter = () => {

  const counterTitle = useContext(TitleContext);
  const {counter, setCounter} = useContext(CounterContext);

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
      <View style={styles.buttonContainer}>
        <Text style={styles.counterText}>{counterTitle}</Text>
        <Text style={styles.counterText}>{counter}</Text>
        <View style={styles.buttonStyle}>
          <Button color={Color.Gray} title="Arttır" onPress={handleIncrease} />
          <View style={styles.seperator} />
          <Button color={Color.Gray} title="Sıfırla" onPress={resetIncrease} />
          <View style={styles.seperator} />
          <Button color={Color.Gray} title="Azalt" onPress={decrease} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Counter;
