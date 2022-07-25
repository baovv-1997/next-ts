import { useState } from 'react';

export interface IAuthState {
  token: string;
  refreshToken: string;
  key: string;
  email: string;
}

export const initialState: IAuthState = {
  token: '',
  refreshToken: '',
  key: '',
  email: '',
};

export const authReducer = () => {
  const [state, setState] = useState<IAuthState>(initialState);
  console.log('state---', state);

  const setAuth = (payload: Partial<IAuthState>) => {
    console.log('payload', payload);
    setState((prevState) => ({ ...prevState, email: 'baovv@yopmail.com' }));
  };

  return {
    state,
    setAuth,
  };
};
