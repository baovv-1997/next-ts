import { Button } from 'antd';
import { useState } from 'react';

const useToggle = () => {
  const [on, setOn] = useState<boolean>(false);
  const toggle = () => setOn(!on);

  return {
    on,
    toggleProps: {
      onClick: toggle,
    },
  };
};

const Index = () => {
  const { toggleProps, on } = useToggle();

  return (
    <div>
      <p>{on ? 'ON' : 'OFF'}</p>
      <Button {...toggleProps}>Click</Button>
    </div>
  );
};

export default Index;
