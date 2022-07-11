import React from 'react';
import LayoutWrapper from './layoutWrapper';

type PropsType = {
  children: JSX.Element;
};

const Index: React.FC<PropsType> = ({ children }) => {
  return (
    <div>
      <span>root</span>
      <LayoutWrapper>{children}</LayoutWrapper>
    </div>
  );
};

export default Index;
