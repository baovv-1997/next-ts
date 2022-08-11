import { useEffect } from 'react';
import axiosIns from '../services/axios';

export async function getServerSideProps(context: any) {
  axiosIns.get('/localhost');
  return {
    props: {}, // will be passed to the page component as props
  };
}
const Index = () => {
  useEffect(() => {}, []);
  return <p>Middleware</p>;
};

export default Index;
