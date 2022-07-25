import { useContext, useMemo } from 'react';
import { rootContext } from 'store';

export const useSelector = (fn: any) => {
  const { state } = useContext(rootContext);

  return useMemo(() => {
    return fn(state);
  }, [fn(state)]);
};
