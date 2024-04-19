import React, {Dispatch, ReactNode, SetStateAction} from 'react';
import {createContext, useState} from 'react';
type ContextType = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};
export const CounterContext = createContext<ContextType>({} as ContextType);
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
