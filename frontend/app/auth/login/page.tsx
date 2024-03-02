'use client'
import React,{ useContext, useState} from 'react'
import { useAuth,AuthContext } from "@/context/authContext";
import { useRouter } from 'next/navigation';
import ErrorComponent from './_components/Error';
import Link from 'next/link';
type LoginProps = {
    email: string;
    password: string;
}
type ErrorProps = {
    errmessage: string,
}
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<ErrorProps>({ errmessage: '' });
    const { setAuth } = useAuth();
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const handleLogin = async (data:LoginProps)=>{
        try {
            const response = await fetch(`${API_URL}/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            const result = await response.json();
            const accessToken = result?.accessToken
            const roles = result?.roles
            const user = result?.foundUser
            const newAuthState ={user,accessToken,roles} 
            if (response.status === 200 && accessToken) {
                setAuth(newAuthState)
                setEmail('')
                setPassword('')
                setError({errmessage:''})
                localStorage.setItem("accessToken", accessToken);
                router.push('/home')
                }else{
                    throw new Error(result.message)
                }
        } catch (err:any) {
            setError({errmessage:err.message})
            
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
    const content =(
        <main className='flex h-screen '>
            <div className="flex w-1/2 flex-1 flex-col justify-center items-center ">
                <h1 className='font-bold text-center text-[42px] text-black'>Welcome Back</h1>
                <p className='font-normal text-[18px] text-black'>Please log in to continue</p>
                <form method='POST'className='w-[90%] mx-auto' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor='email' className='text-[14px] text-black'>Email address </label>
                        <input id='email' type="email" name="email" onChange={e=>setEmail(e.target.value)} value={email} className='text-black input '  />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='password' className='text-[14px] text-black'>Password</label>
                            <input type="password" id='password' name="password" onChange={e=>setPassword(e.target.value)} value={password} className='text-black input'  />
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
                <div className='flex flex-col justify-center items-center'>
                <p className='text-base m-2'>Or log in with :</p>
                <button type='submit' className='flex flex-row justify-center items-center px-3 py-4 w-[361px] h-12 border-2 border-org rounded-lg order-3 flex-grow-0 text-org'>log in with Google</button>
                </div>
                <hr className="w-[90%] border-t-2 m-8" />
                <Link href='/auth/register'>No account yet ? Sign Up</Link>
            </div>
            <div className='flex w-1/2 max-md:hidden'>
                <img src="/images/login.png" className='flex w-full' alt="login" />
            </div>
        </main>
    )
    return content
}
