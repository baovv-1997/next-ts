import { useSelector, useDispatch } from 'store/hooks';
import { IFormInputs } from './components';

const useLogic = () => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

  console.log('count', state);

  const onSubmit = (data: IFormInputs) => {
    // dispatch();
    const newData = {
      email: data.username,
    };
    dispatch({ type: 'INCREMENT', payload: 1 });
  };

  return { auth: {}, onSubmit };
};

export default useLogic;
