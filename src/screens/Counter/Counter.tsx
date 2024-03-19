import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {CounterContext, TitleContext} from '../../contexts/context';
import {styles} from './counter.styles';
type Example = {
  id: number;
  name: string;
};
const Counter = () => {
  const {buttonStyle, seperator, buttonContainer, counterText} = styles;
  const counterTitle = useContext(TitleContext);
  const {counter, setCounter} = useContext(CounterContext);
  const [data, setData] = useState<Example[]>([]);
  const getTodos = async () => {
    try {
      const response = await fetch('https://muvis.free.beeceptor.com');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

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
        <View>
          <Text>{data[0].name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Counter;
