import React from 'react'
import Link from 'next/link'

export default function StudentRegister() {
  return (
    <div className='flex h-screen w-full gap-[80px]'>
        <div className="bg-[#FFF5DF] grid place-items-center w-1/2 max-md:hidden">
            <img src="/images/studentRegister.svg" className='max-w-full' alt="" />
        </div>
        <div className="flex flex-col w-1/2 max-md:w-full my-[40px] text-center">

            <h1 className='font-bold text-[38px]'>Sign Up Free</h1>
            <p className=' font-normal text-[16px]'>14 days free access to unlimited ressources</p>
            <form method='POST' className='flex flex-col mx-auto w-[90%] text-left'>
                <div className='flex justify-center items-center gap-4 '>
                <div className='w-1/2'>
                <label htmlFor="firstname" className='my-2 text-[14px] text-black'>First Name</label>
                <input type="text" placeholder='First Name' className='box-border flex flex-row items-center p-3 space-x-2 w-[100%] h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' id='firstname' />
                </div>
                <div className='w-1/2'>
                <label htmlFor="lastname" className='my-2 text-[14px] text-black'>Last Name</label>
                <input type="text" placeholder='Last Name' className='box-border flex flex-row items-center p-3 space-x-2 w-[100%] h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' id='lastname' />
                </div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                <div className='w-1/2'>
                <label htmlFor="username" className='my-2 text-[14px] text-black'>User Name</label>
                <input type="text" placeholder='Last Name' className='box-border flex flex-row items-center p-3 space-x-2 w-[100%] h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' id='username' />
                </div>
                <div className='w-1/2'>
                <label htmlFor="phone" className='my-2 text-[14px] text-black'>Phone Number</label>
                <input type="text" placeholder='Phone Number' className='box-border flex flex-row items-center p-3 space-x-2 w-[100%] h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' id='phone' />
                </div>
                </div>
                <div className='w-full'>
                <label htmlFor="email" className='my-2 text-[14px] text-black'>Email</label>
                <input type="text" className='box-border flex flex-row items-center p-3 space-x-2 w-[100%] h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' placeholder='Email' id='email' />
                </div>
                <div className='w-full'>
                <label htmlFor="password" className='my-2 text-[14px] text-black'>Password</label>
                <input type="text" className='box-border flex flex-row items-center p-3 space-x-2 w-[100%]  h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' placeholder='Password' id='password' />
                </div>
                <div className='w-full'>
                <label htmlFor="confirm" className='my-2 text-[14px] text-black'>Confirm Password</label>
                <input type="text" className='box-border flex flex-row items-center p-3 space-x-2 w-[100%]  h-10 bg-white border border-[#E9EAF0] flex-none order-1 self-stretch flex-grow-0' placeholder='Confirm Password' id='confirm' />
                </div>
                <div className='my-4'>
                <input type="checkbox" name="terms" className='mx-4' id="terms" />
                <label htmlFor="terms" className='my-2 font-normal text-[14px] text-black'>i agree to Edu + privacy policy</label>
                </div>
                <button type='submit' className='flex flex-row justify-center items-center px-4 py-2 w-[100%] h-10 bg-[#00977D] border-2 border-[#00977D] rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>Sign Up</button>
            </form>
                <hr className="w-[90%] border-t-2 m-4" />
                <div className='flex flex-col justify-center items-center mx-auto w-[55%]'>
                <p className='text-base m-2'>Or sign up with :</p>
                <button type='submit' className='flex flex-row justify-center items-center px-4 py-2 w-[100%]  h-full border-2 border-org rounded-lg order-5 self-stretch flex-grow-0 text-base text-org'>log in with Google</button>
                </div>
                <hr className="w-[90%] border-t-2 m-4" />
                <Link href='/auth/register'>Already have an account ?</Link>
            
        </div>
    </div>
  )
}
