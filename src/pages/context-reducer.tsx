import { Button } from 'antd';
import React, { useMemo } from 'react';
import { useSelector } from 'store/hooks';

const A = () => {
  const state = useSelector((state: any) => state);
  console.log('A');

  return (
    <div className="flex gap-4 items-center">
      <span>First Counter: {state.state1}</span>
      <Button onClick={() => state.increment(1)}>Increment</Button>
    </div>
  );
};

const B = () => {
  const state2 = useSelector((state: any) => state.state2);
  console.log('B');
  return (
    <div className="flex gap-4 items-center">
      <span>First Counter: {state2}</span>
      {/* <Button onClick={() => state.decrement(1)}>Decrement</Button> */}
    </div>
  );
};

const Index = () => {
  return (
    <div className="flex gap-4 items-center">
      <A />
      <B />
    </div>
  );
};

export default Index;
