import { Button } from 'antd';
import React, { useState } from 'react';

const callAll =
  (...fns: any) =>
  (...args: any) => {
    console.log('...fns', fns);
    fns.forEach((fn: any) => fn && fn(...args));
  };

const useToggle = (initialOn = false) => {
  const [on, setOn] = useState(initialOn);
  const toggle = () => setOn(!on);
  return { on, toggle };
};

const useToggleWithPropGetter = (initialOn?: boolean) => {
  const { on, toggle } = useToggle(initialOn);

  const getTogglerProps = () => {
    return {
      onClick: toggle,
    };
  };

  return { on, toggle, getTogglerProps };
};

const Toggle = ({
  children,
  initialOn,
}: {
  children: ({
    toggle,
    on,
  }: {
    toggle: () => void;
    on: boolean;
  }) => JSX.Element;
  initialOn: boolean;
}) => {
  console.log('toggle');
  return children(useToggle(initialOn));
};

const A = () => {
  console.log('A');
  return <p>A</p>;
};

const Index = () => {
  return (
    <div className="p-5">
      <Toggle initialOn={false}>
        {({ toggle, on }) => (
          <Button onClick={toggle}> {on ? 'on' : 'off'}</Button>
        )}
      </Toggle>
      <A></A>
    </div>
  );
};

export default Index;
