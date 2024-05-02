import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import useAuth from '../_hooks/useAuth';

interface WithAuthProps {

}

const withAuth = <P extends WithAuthProps>(WrappedComponent: React.ComponentType<P>) => {
    const WithAuthComponent = (props: P) => {
        const Router = useRouter();
        const [accessToken, setAccessToken] = useState<string | null>(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const token = localStorage.getItem('accessToken');
            setAccessToken(token || '');
            setLoading(false);
        }, []);

        useEffect(() => {
            if (!loading && !accessToken) {
                Router.replace('/auth/login');
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