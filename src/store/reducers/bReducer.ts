import { useState } from 'react';

type StateType2 = {
  counter2: number;
};

const initialState2: StateType2 = {
  counter2: 10,
};

export const useBReducer = () => {
  const [state, setState] = useState<StateType2>(initialState2);

  const increment = (value: number) => {
    console.log('incrementB');
    setState({ ...state, counter2: state.counter2 + value });
  };

  const decrement = (value: number) => {
    setState((prev) => ({ ...prev, counter2: prev.counter2 - value }));
  };

  console.log('stateB', state);

  return {
    state,
    increment,
    decrement,
  };
};
