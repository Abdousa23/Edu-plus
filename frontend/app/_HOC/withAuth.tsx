import { useEffect } from 'react';
import { useRouter} from 'next/navigation';
import useAuth from '../_hooks/useAuth';
interface WithAuthProps {
    auth: boolean;
}

const withAuth = <P extends WithAuthProps>(WrappedComponent: React.ComponentType<P>) => {
    return (props: P) => {
        const Router = useRouter();
        const { auth } = useAuth();

        useEffect(() => {
            if (!auth) {
                Router.replace('/auth/login');
            }
        }, [auth]);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
