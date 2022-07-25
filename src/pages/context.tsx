import { Button } from 'antd';
import { useAction, useSelector } from 'store/hooks';

const A = () => {
  console.log('A');
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useAction();

  return (
    <div>
      <p>A{auth?.email}</p>
      <Button
        onClick={() => dispatch({ type: 'CHANGE', payload: '@gmail.com' })}
      >
        Click
      </Button>
    </div>
  );
};

const B = () => {
  console.log('B');
  const count = useSelector((state: any) => state.count);
  return (
    <div>
      <p>{count}</p>
      <p>B</p>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <A></A>
      <B></B>
    </>
  );
};

export default Index;
