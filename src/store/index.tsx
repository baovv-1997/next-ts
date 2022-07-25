import React, { createContext, useReducer, useState } from 'react';
import { useAReducer, useBReducer } from './reducers';

export const rootContext = createContext({} as any);

type PropsType = {
  children: React.ReactNode;
};

const Index: React.FC<PropsType> = ({ children }) => {
  const [state1, setState1] = useState<number>(0);
  const [state2, setState2] = useState<number>(10);

  const increment = (value: number) => {
    setState1((prev) => prev + value);
  };

  const decrement = (value: number) => {
    setState2((prev) => prev - value);
  };

  // const state1 = useAReducer();
  // const state2 = useBReducer();

  const value = {
    state: { state1, state2, increment, decrement },
  };

  return <rootContext.Provider value={value}>{children}</rootContext.Provider>;
};

export default Index;
