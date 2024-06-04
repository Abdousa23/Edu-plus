import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoggedProps {}

const Logged = <P extends LoggedProps>(WrappedComponent: React.ComponentType<P>) => {
    const LoggedComponent = (props: P) => {
        const Router = useRouter();
        const [accessToken, setAccessToken] = useState<string | null>(null);
        const [loading, setLoading] = useState(true);
        const [shouldRedirect, setShouldRedirect] = useState(false);

        useEffect(() => {
            const token = localStorage.getItem('accessToken');
            setAccessToken(token || '');
            setLoading(false);
        }, []);

        useEffect(() => {
            if (!loading && accessToken) {
                setShouldRedirect(true);
                Router.replace('/home');
            }
        }, [loading, accessToken]);

        // if (loading || shouldRedirect) {
        //     return <div>Loading...</div>; // Or your custom loading component
        // }

        return <WrappedComponent {...props} />;
    };

    LoggedComponent.displayName = `Logged(${getDisplayName(WrappedComponent)})`;

    return LoggedComponent;
};

function getDisplayName(WrappedComponent: React.ComponentType<any>): string {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default Logged;