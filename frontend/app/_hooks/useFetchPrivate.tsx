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
    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
    };
    try {
        
    let response = await fetch(url, options);
        // console.log(response)
        // if (response.headers.get('Authorization') === undefined){
        //     console.log("token is valid")
        // }
    if (response.status === 403) {
      const newAccessToken = await refreshToken();
      setToken(newAccessToken);
    console.log("new token")
      options.headers['Authorization'] = `Bearer ${newAccessToken}`;
      response = await fetch(url, options);
      if (response.status === 403) {
        throw new Error('Unauthorized');
      }
    }
    
    return response;

    } catch (error) {
        router.push('/auth/login');        
    }
  };

  return fetchPrivate;
};

export default useFetchPrivate;