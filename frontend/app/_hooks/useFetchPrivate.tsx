import { useEffect, useState } from 'react';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';
import { useRouter } from 'next/navigation';
const useFetchPrivate = () => {
  const  refreshToken  = useRefreshToken();
  const { auth } = useAuth();
  const [token, setToken] = useState(auth?.accessToken);
    const router = useRouter();
  useEffect(() => {
    setToken(auth?.accessToken);
  }, [auth]);

  const fetchPrivate = async (url :string, options :any) => {
    let accessToken = token;
    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${accessToken}`,
    };
  
    try {
      let response = await fetch(url, options);
  
      if (response.status === 401) {
        accessToken = await refreshToken();
        setToken(accessToken);
        accessToken = localStorage.getItem('accessToken');
        console.log(accessToken);
        options.headers['Authorization'] = `Bearer ${accessToken}`;
        response = await fetch(url, options);
        if (response.status === 401) {
          throw new Error('Unauthorized');
        }
      }
  
      return response;
    } catch (error) {
      console.log(error);
      // router.push('/auth/login');        
    }
  };

  return fetchPrivate;
};

export default useFetchPrivate;