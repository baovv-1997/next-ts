import { useContext } from 'react';
import { rootContext } from 'store';

export const useDispatch = () => {
  const { dispatch } = useContext(rootContext);

  return dispatch;
};
