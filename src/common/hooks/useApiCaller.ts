import { useState } from 'react';

interface ApiCallerParams {
  apiCaller: any;
}

export const useApiCaller = ({ apiCaller }: ApiCallerParams) => {
  const [loading, setLoading] = useState<boolean>(false);

  const request = async () => {
    setLoading(true);
    const result = await apiCaller();

    setLoading(false);

    return result;
  };

  return { loading, request };
};
