import React, { useEffect, useState } from 'react';
import User from './User';
import StudentRegister from './StudentRegister';
import { useRouter } from 'next/navigation'

const Register = () => {
    const Router = useRouter();
    const [role, setRole] = useState("");
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        setAccessToken(token || '');
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading && accessToken) {
            Router.replace('/home');
        }
    }, [loading, accessToken]);

    if (loading) {
        return <div>Loading...</div>; // Or your custom loading component
    }

    return (
        <>
            {!accessToken && (
                role === ''
                    ? <User role={role} setRole={setRole} />
                    : <StudentRegister role={role} />
            )}
        </>
    );
};

export default Register;