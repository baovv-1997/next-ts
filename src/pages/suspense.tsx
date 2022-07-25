import { Suspense, useEffect, useState } from 'react';

let fetchData = () => {
  setTimeout(() => {
    return 'bao';
  }, 5000);
};

const Detail = ({ data }: { data: string }) => {
  if (!data) {
    throw fetchData;
  }
  console.log('Detail');
  return <p>{data}</p>;
};

const Index = () => {
  const [data, setData] = useState<string>('');

  // useEffect(() => {
  //   console.log('Did mount');
  //   setTimeout(() => {
  //     setData('bao');
  //   }, 5000);
  // }, []);

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Detail data={data} />
    </Suspense>
  );
};

export default Index;
