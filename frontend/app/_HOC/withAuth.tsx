import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import useAuth from '../_hooks/useAuth';
import useRefreshToken from '../_hooks/useRefreshToken';

interface WithAuthProps {

}

const withAuth = <P extends WithAuthProps>(WrappedComponent: React.ComponentType<P>) => {
    const WithAuthComponent = (props: P) => {
        const Router = useRouter();
        const [accessToken, setAccessToken] = useState<string | null>(null);
        const [loading, setLoading] = useState(true);
        const refresh = useRefreshToken();
        useEffect(() => {
            const token = localStorage.getItem('accessToken');
            setAccessToken(token || '');
            setLoading(false);
        }, []);

        useEffect(() => {
            if (!loading && !accessToken) {
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
                        Router.push('/auth/login');
                    }
                
            }
            verifyRefreshToken();
            }
        }, [loading, accessToken]);

        if (loading) {
            return <div>Loading...</div>; // Or your custom loading component
        }

        return <WrappedComponent {...props} />;
    };

    WithAuthComponent.displayName = `WithAuth()`;

    return WithAuthComponent;
};

// function getDisplayName(WrappedComponent: React.ComponentType<any>): string {
//     return WrappedComponent.displayName || WrappedComponent.name || 'Component';
// }

export default withAuth;