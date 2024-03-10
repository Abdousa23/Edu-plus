'use client'
import { useEffect, useState, ReactNode } from 'react';
import useAuth from '../_hooks/useAuth';
import useRefreshToken from '../_hooks/useRefreshToken';

type props = {
  children: ReactNode,
}

function PersistLogin({ children }: props) {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, setAuth,persist } = useAuth();

    useEffect(() => {
        console.log('PersistLogin useEffect');
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
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
            {isLoading ? <div>Loading...</div> : children}
        </> );
}

export default PersistLogin;