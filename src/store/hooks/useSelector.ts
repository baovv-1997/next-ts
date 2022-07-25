import { useContext } from 'react';
import { rootContext } from 'store';

export const useSelector = (fn: any) => {
  const { state } = useContext(rootContext);

  return fn(state);
};
