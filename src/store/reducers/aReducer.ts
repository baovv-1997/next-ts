import { useState } from 'react';

type StateType1 = {
  counter1: number;
};

const initialState1: StateType1 = {
  counter1: 1,
};

export const useAReducer = () => {
  const [state, setState] = useState<StateType1>(initialState1);

  const increment = (value: number) => {
    console.log('incrementA');
    setState((prev) => ({ ...prev, counter1: prev.counter1 + value }));
  };

  const decrement = (value: number) => {
    setState((prev) => ({ ...prev, counter1: prev.counter1 - value }));
  };

  console.log('stateA', state);
  return {
    state,
    increment,
    decrement,
  };
};
