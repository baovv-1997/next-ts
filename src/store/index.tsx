import React, { createContext, useReducer, useState } from 'react';

import { demoReducer } from './reducers';

export const rootContext = createContext({} as any);

type PropsType = {
  children: React.ReactNode;
};

const Index: React.FC<PropsType> = ({ children }) => {
  //const { state, reducer } = demoReducer();

  // const dispatch = (callback: any) => {
  //   // actions[callback.]
  //   console.log('---', callback.toString());
  // };

  // const reducer = {
  //   demo: state,
  //   dispatch,
  // };

  const initialState = {
    auth: {
      email: 'baovv@gmail.com',
    },
    user: {
      count: 0,
    },
  };

  const zip = (list1: any, list2: any) => {
    var obj = {} as any;
    for (let i = 0; i < list1.length; i++) {
      obj[list1[i]] = list2[i];
    }
    return obj;
  };

  const combineReducers = (reducers: any) => {
    return (state: any, action: any) => {
      const _reducers = Object.keys(reducers);
      const _state = Object.keys(reducers).map((reducer) => {
        return reducers[reducer](state[reducer], action);
      });

      return zip(_reducers, _state);
    };
  };

  const auth = (state: any, action: { type: string; payload: any }) => {
    console.log('state', state);
    switch (action.type) {
      case 'CHANGE': {
        return { ...state, count: (state.email = action.payload) };
      }

      default:
        return { ...state };
    }
  };

  const user = (state: any, action: { type: string; payload: any }) => {
    console.log('state', state);
    switch (action.type) {
      case 'INCREMENT': {
        return { ...state, count: state.count + action.payload };
      }

      default:
        return { ...state };
    }
  };

  const rootReducer = combineReducers({ auth, user });

  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <rootContext.Provider value={{ state, dispatch }}>
      {children}
    </rootContext.Provider>
  );
};

export default Index;
