import { useContext } from 'react';
import { rootContext } from 'store';

export const useAction = () => {
  const { actions } = useContext(rootContext);

  return actions;
};
