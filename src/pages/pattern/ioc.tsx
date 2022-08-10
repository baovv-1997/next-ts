import { useState } from 'react';

function filter(array: any[], filterFn: (item: any) => boolean) {
  return array.filter((item) => filterFn(item));
}

function filterNullAndUndefine(array: any[]) {
  return filter(array, (item) => item !== null && item !== undefined);
}

function filterNull(array: any[]) {
  return filter(array, (item) => item !== null);
}

const A = () => {
  return <p>A</p>;
};

const Index = () => {
  const [name, setName] = useState<string | null>();
  const array = [0, 1, undefined, 2, null, 3, 'four', ''];

  const notNullAndUndefine = filterNullAndUndefine(array);
  const notNull = filterNull(array);

  console.log('result', notNullAndUndefine, notNull);
  return <A />;
};

export default Index;
