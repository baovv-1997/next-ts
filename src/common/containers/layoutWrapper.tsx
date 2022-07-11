import React from 'react';

type PropsType = {
  children: JSX.Element;
};

const Index: React.FC<PropsType> = ({ children }) => {
  console.log('children', children);
  return (
    <div>
      <span>{children.type.layout === 'admin' ? 'admin' : 'company'}</span>
      {children}
    </div>
  );
};

export default Index;
