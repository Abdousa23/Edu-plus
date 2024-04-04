import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ErrorComponent from '@/app/_components/Error'
type RegisterProps = {
  role: string;
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/;

export default function StudentRegister({ role }: RegisterProps) {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    phonenumber: '',
    email: '',
    password: '',
    confirm: '',
    role: role === 'student' ? 'user' : 'school',
  });
  const [error, setError] = useState<ErrorProps>({ errmessage: '' });
  const router = useRouter();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const checkData = (data: any) => {
    if (data.password !== data.confirm) {
      throw new Error('Password do not match');
    }
    else if (data.password.length < 8) {
      throw new Error('Password must be at least 8 characters');
    } else if (data.username.length < 4 || data.username.length > 15) {
      throw new Error('Username must be between 4 and 20 characters')
    } else if (data.firstname.length < 2 || data.firstname.length > 20) {
      throw new Error('First Name must be between 2 and 20 characters')
    } else if (data.lastname.length < 2 || data.lastname.length > 20) {
      throw new Error('Last Name must be between 2 and 20 characters')
    }
    else if (data.firstname === '' || data.lastname === '' || data.username === '' || data.phonenumber === '' || data.email === '' || data.password === '' || data.confirm === '') {
      throw new Error('All fields are required');
    } else if (!emailRegex.test(data.email)) {
      throw new Error('Invalid Email');
    } else if (!passwordRegex.test(data.password)) {
      throw new Error('Password must be a combination of minimum 8 letters , numbers, and symbols');
    }
  }

  const handleRegister = async (data: any) => {
    try {
      checkData(data);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      if (response.status === 200) {
        router.push('/auth/login');
      } else {
        throw new Error(result.message);
      }
    } catch (err: any) {
      setError({ errmessage: err.message })
    }
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    handleRegister(data);
  }

  return (
    <div className='flex  w-full gap-[80px]'>
      <div className="bg-[#FFF5DF] grid place-items-center w-1/2 max-md:hidden">
        <img src="/images/studentRegister.svg" className='max-w-full' alt="" />
      </div>
      <div className="flex flex-col w-1/2 max-md:w-full my-[40px] text-center">

        <h1 className='font-bold text-[38px]'>Sign Up Free</h1>
        <p className=' font-normal text-[16px]'>14 days free access to unlimited ressources</p>
        <form method='POST' onSubmit={handleSubmit} className='flex flex-col mx-auto w-[90%] text-left'>
          <div className='flex justify-center items-center gap-4 '>
            <div className='w-1/2'>
              <label htmlFor="firstname" className='my-2 text-[14px] text-black'>First Name</label>
              <input type="text" onChange={handleChange} placeholder='First Name' className='box-border flex flex-row items-center p-3 space-x-2 w-[100%] h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' id='firstname' />
            </div>
            <div className='w-1/2'>
              <label htmlFor="lastname" className='my-2 text-[14px] text-black'>Last Name</label>
              <input type="text" onChange={handleChange} placeholder='Last Name' className='box-border flex flex-row items-center p-3 space-x-2 w-[100%] h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' id='lastname' />
            </div>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <div className='w-1/2'>
              <label htmlFor="username" className='my-2 text-[14px] text-black'>User Name</label>
              <input type="text" onChange={handleChange} placeholder='Last Name' className='box-border flex flex-row items-center p-3 space-x-2 w-[100%] h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' id='username' />
            </div>
            <div className='w-1/2'>
              <label htmlFor="phonenumber" className='my-2 text-[14px] text-black'>Phone Number</label>
              <input type="text" onChange={handleChange} placeholder='Phone Number' className='box-border flex flex-row items-center p-3 space-x-2 w-[100%] h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' id='phonenumber' />
            </div>
          </div>
          <div className='w-full'>
            <label htmlFor="email" className='my-2 text-[14px] text-black'>Email</label>
            <input type="text" onChange={handleChange} className='box-border flex flex-row items-center p-3 space-x-2 w-[100%] h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' placeholder='Email' id='email' />
          </div>
          <div className='w-full'>
            <label htmlFor="password" className='my-2 text-[14px] text-black'>Password</label>
            <input type="text" onChange={handleChange} className='box-border flex flex-row items-center p-3 space-x-2 w-[100%]  h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' placeholder='Password' id='password' />
          </div>
          <div className='w-full'>
            <label htmlFor="confirm" className='my-2 text-[14px] text-black'>Confirm Password</label>
            <input type="text" onChange={handleChange} className='box-border flex flex-row items-center p-3 space-x-2 w-[100%]  h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' placeholder='Confirm Password' id='confirm' />
          </div>
          <div className='my-4'>
            <input type="checkbox" name="terms" className='mx-4' id="terms" required />
            <label htmlFor="terms" className='my-2 font-normal text-[14px] text-black' >i agree to Edu + privacy policy</label>
          </div>
          {error.errmessage.length !== 0 && <ErrorComponent errmessage={error.errmessage} />}
          <button type='submit' className='flex flex-row justify-center items-center px-4 py-2 w-[100%] h-10 bg-[#00977D] border-2 border-[#00977D] rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>Sign Up</button>
        </form>
        <hr className="w-[90%] border-t-2 m-4" />
        <div className='flex flex-col justify-center items-center mx-auto w-[55%]'>
          <p className='text-base m-2'>Or sign up with :</p>
          <button type='submit' className='flex flex-row justify-center items-center px-4 py-2 w-[100%]  h-full border-2 border-org rounded-lg order-5 self-stretch flex-grow-0 text-base text-org'>log in with Google</button>
        </div>
        <hr className="w-[90%] border-t-2 m-4" />
        <Link href='/auth/login'>Already have an account ?</Link>

      </div>
    </div>
  )
}
