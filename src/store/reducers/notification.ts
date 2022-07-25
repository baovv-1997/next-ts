import { useState } from 'react';

interface INotificationState {
  message: string;
  duration: number;
}

const initialState: INotificationState = {
  message: '',
  duration: 5000,
};

export const notificationReducer = () => {
  const [state, setState] = useState<INotificationState>(initialState);

  const setNotification = (payload: Partial<INotificationState>) => {
    setState((prevState) => ({ ...prevState, payload }));
  };

  return {
    state,
    setNotification,
  };
};
