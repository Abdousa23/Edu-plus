'use client'
import { useEffect, useState, ReactNode } from 'react';
import useAuth from '../_hooks/useAuth';
import useRefreshToken from '../_hooks/useRefreshToken';
import { useRouter } from 'next/navigation';
type props = {
  children: ReactNode,
}

function PersistLogin({ children }: props) {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const router = useRouter();
    const { auth, setAuth,persist } = useAuth();

    useEffect(() => {
        console.log('PersistLogin useEffect');
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                const data =await refresh();
                console.log(data);
                if(!data){
                    throw new Error('token has been expired')
                }
            }
            catch (err) {
                localStorage.removeItem('accessToken');
                router.push('/auth/login');
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }
        // persist added here AFTER tutorial video
        // Avoids unwanted call to verifyRefreshToken
        !auth?.accessToken  ? verifyRefreshToken() : setIsLoading(false);

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`);
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
    }, [isLoading]);
return (
        <>
            {children}
        </> );
}

export default PersistLogin;