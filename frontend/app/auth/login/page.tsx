'use client'
import React, { useState } from 'react'
import useAuth from '@/app/_hooks/useAuth';
import { useRouter } from 'next/navigation';
import ErrorComponent from '../../_components/Error';
import Link from 'next/link';
import useRefreshToken from '@/app/_hooks/useRefreshToken';
import Logged from '@/app/_HOC/logged';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<ErrorProps>({ errmessage: '' });
    const { auth, setAuth } = useAuth();
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const Refresh = useRefreshToken();
    const handleLogin = async (data: LoginProps) => {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(data)
            })
            const result = await response.json();
            // console.log(result)
            const accessToken = result?.accessToken
            const roles = result?.roles
            const user = result?.foundUser
            const refreshToken = user?.refreshToken
            const newAuthState = { user, accessToken, roles }
            // console.log(newAuthState)
            if (response.status === 200 && accessToken) {
                console.log(newAuthState)
                setAuth(newAuthState)
                setEmail('')
                setPassword('')
                setError({ errmessage: '' })
                localStorage.setItem("accessToken", accessToken);
                router.push('/home')
            } else {
                throw new Error(result.message)
            }
        } catch (err: any) {
            setError({ errmessage: err.message })

        }
    }

    const handleGoogleLogin = async () => {
        try {
            /*                 const response = await fetch(`${API_URL}/auth/google`,{
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })
                            const result = await response.json(); */
            const newWindow = window.open(`${API_URL}/auth/google/`);
            if (!newWindow) {
                throw new Error('Failed to open the window');
            }
            const checkWindowClosed = setInterval(() => {
                if (newWindow.closed) {
                    clearInterval(checkWindowClosed);
                }
            }, 1000);
        } catch (err) {
            console.log(err)
        }


    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            email,
            password
        }
        handleLogin(data);
    }

    const content = (
        <main className='flex h-screen '>
            <div className="flex w-[55%] flex-1 flex-col justify-center items-center ">
                <h1 className='font-bold text-center text-[42px] text-black'>Welcome </h1>
                <p className='font-normal text-[18px] text-black'>Please log in to continue</p>
                <form method='POST' className='w-[80%] mx-auto' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor='email' className='text-[14px] text-black my-2'>Email address </label>
                        <input id='email' type="email" placeholder="Enter you Email" name="email" onChange={e => setEmail(e.target.value)} value={email} className='text-black abdouinput ' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='password' className='my-2 text-[14px] text-black'>Password</label>
                        <input type="password" id='password' name="password" onChange={e => setPassword(e.target.value)} value={password} className='text-black abdouinput' />
                    </div>
                    <p className='text-[12px] text-[#697077]'>it must be a combination of minimum 8 letters , numbers, and symbols</p>
                    {error.errmessage.length !== 0 && <ErrorComponent errmessage={error.errmessage} />}

                    <div className='flex justify-between my-2'>
                        <div >
                            <input type="checkbox" name="rememberme" className='mx-4' id="Rememberme" />
                            <label htmlFor="Rememberme">Remember me</label>
                        </div>
                        <Link href="/auth/forgetpassword" >Forget Password</Link>
                    </div>
                    <button type="submit" className='flex flex-row justify-center items-center px-4 py-2 w-[100%] h-12 bg-[#00977D] border-2 border-[#00977D] rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>Log in</button>
                </form>
                <hr className="w-[90%] border-t-2 m-8" />
                <div className='flex flex-col justify-center items-center w-[55%]'>
                    <p className='text-base m-2'>Or log in with :</p>
                    <button onClick={async () => await handleGoogleLogin()} type='submit' className='flex flex-row justify-center items-center px-4 py-2 w-[100%]  h-full border-2 border-org rounded-lg order-5 self-stretch flex-grow-0 text-base text-org'>log in with Google</button>
                </div>
                <hr className="w-[90%] border-t-2 m-6" />
                <Link href='/auth/register'>No account yet ? Sign Up</Link>
            </div>
            <div className='flex w-[45%] max-md:hidden'>
                <img src="/images/login.png" className='flex w-full' alt="login" />
            </div>
        </main>
    )
    return content
}

export default Logged(Login)
