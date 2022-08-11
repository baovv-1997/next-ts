import axios from 'axios';
const service = axios.create({
  baseURL: '/adf',
  timeout: 5000,
});

service.interceptors.request.use(async (config: any) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/json';

  console.log('axios', document);

  // if (typeof window != 'undefined' && window.accessToken) {
  //   config.headers['x-access-token'] = `Bearer ${window.accessToken}`;
  // }

  if (process.env.NEXT_PUBLIC_Authorization) {
    config.headers['Authorization'] = process.env.NEXT_PUBLIC_Authorization;
  }

  return config;
});

export default service;
