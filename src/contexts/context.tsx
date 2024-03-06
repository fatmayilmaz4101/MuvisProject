import React, {Dispatch, ReactNode, SetStateAction} from 'react';
import {createContext, useState} from 'react';
//ContextType contextin tuttuğu verilerin tipini belirtir. Bu sayede tipler otomatik verilir ve useState ile kullanırken tip belirtmeme gerek kalmaz.
type ContextType = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};
export const CounterContext = createContext<ContextType>({} as ContextType);
//ReactNode: CounterProvider'ın sarmaladığı içeriklerin birçok tipte olabileceğini ifade ediyor.
interface props {
  children: ReactNode;
}
export const CounterProvider = ({children}: props) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{counter, setCounter}}>
      {children}
    </CounterContext.Provider>
  );
};
//Sayaç başlığı
export const TitleContext = createContext<string>('');
