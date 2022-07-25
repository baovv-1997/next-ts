import { Button } from 'antd';
import { useState } from 'react';

const useToggle = () => {
  const [on, setOn] = useState<boolean>(false);
  const toggle = () => setOn(!on);

  const callAll =
    (...fns: any[]) =>
    (...args: any) =>
      fns.forEach((fn) => fn?.(...args));

  const getToggleProp = ({ click, ...props }: { click: any }) => {
    return {
      onClick: callAll(click, toggle),
      ...props,
    };
  };

  return {
    on,
    getToggleProp,
    toggle,
  };
};

const Index = () => {
  const { getToggleProp, on } = useToggle();

  return (
    <div>
      <p>{on ? 'ON' : 'OFF'}</p>
      <Button {...getToggleProp({ click: () => alert('hello') })}>Click</Button>
    </div>
  );
};

export default Index;
