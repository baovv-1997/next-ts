import { useState, useReducer } from 'react';

export interface IDemoState {
  count: number;
}

export const initialState: IDemoState = {
  count: 0,
};

const demoReducer = () => {
  const [state, setState] = useState<IDemoState>(initialState);

  const reducer = (action: { type: string; payload: any }) => {
    switch (action.type) {
      case 'INCREMENT': {
        return { ...state, count: ++state.count };
      }
    }
  };

  return {
    state,
    reducer,
  };
};

export default demoReducer;
