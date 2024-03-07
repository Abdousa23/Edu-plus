'use client'
import React,{useState} from 'react'
import { useAuth } from "@/context/authContext";

type LoginProps = {
    email: string;
    password: string;
}

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const handleLogin = async (data:LoginProps)=>{
        console.log(API_URL);
        const response = await fetch(`${API_URL}/login`,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const result = await response.json();
        if(result.error){
            setError(result.error);
        }
        else{
            console.log(result);
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
        <main>
            <div className="flex flex-1 flex-col justify-center items-center">
                <h1>Log in</h1>
                <form method='POST' onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Email
                            <input type="email" name="email" onChange={e=>setEmail(e.target.value)} className='text-black' required />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password
                            <input type="password" name="password" onChange={e=>setPassword(e.target.value)} className='text-black' required />
                        </label>
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        </main>
    )
    return content
}
