import type { NextPage } from 'next';
import { useApiCaller } from 'common/hooks';
import { useEffect, useState } from 'react';
import { User } from 'common/dto/response';

const getListUser = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'baovv',
          age: 12,
        },
      });
    }, 1000);
  });

  return promise;
};

const Home: NextPage = () => {
  const { request, loading } = useApiCaller({ apiCaller: getListUser });

  const getData = async () => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>{loading && 'Count Without useEffect'}</h2>
    </div>
  );
};

export default Home;
