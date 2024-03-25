'use client'
import React, { useEffect } from 'react'
import Sidebar from '../_components/Sidebar'
import Navbar from '@/app/_components/Navbar'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useState } from 'react';
import useFetchPrivate from '@/app/_hooks/useFetchPrivate';
import useAuth from '@/app/_hooks/useAuth';
import Success from '@/app/_components/Success';
import ErrorComponent from '@/app/_components/Error';
type FormDataState = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phonenumber: string;
  country: string;
  city: string;
  bio: string;
  password: string;
  oldPassword: string;
  confirmPassword: string;
  id: string | undefined;
  pfp: File | null;
};
type FormType = 'userData' | 'passwordChange';


export default function Settings() {
  const {auth,setAuth}=useAuth()
  const user:userType = auth?.user
  const initialFormData = {
    firstName: user?.firstname || '',
    lastName: user?.lastname || '',
    username: user?.username || '',
    email: user?.email || '',
    phonenumber: user?.phonenumber || '',
    country: user?.country || '',
    city: user?.city || '',
    bio: user?.bio || '',
    password: '',
    oldPassword: '',
    confirmPassword: '',
    id: user?._id || '',
    pfp: null
  }
  const fetchPrivate = useFetchPrivate()
  const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [error, setError] = useState<ErrorProps>({ errmessage: '' });
  const [successMessage,setSuccessMessage]=useState('')
  const [isLoading,setIsLoading]=useState(false)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    if (e.target.type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        pfp: fileInput.files ? fileInput.files[0] : null as File | null,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const validateForm = (formData: FormDataState, formType: FormType) => {
    if(formType === 'userData'){
    if (!emailRegex.test(formData.email)) {
      setError({ errmessage: 'Invalid Email' });
      return false;
    }
  }else{
    if (!formData.oldPassword) {
      setError({ errmessage: 'Old Password is required' });
      return false;
    }
    if (!formData.password) {
      setError({ errmessage: 'Password is required' });
      return false;
    }
    if (!passwordRegex.test(formData.password)) {
      setError({ errmessage: 'Password must contain at least 8 characters, one letter, one number and one special character' });
      return false;
    }
    if (!formData.confirmPassword) {
      setError({ errmessage: 'Confirm Password is required' });
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError({ errmessage: 'Passwords do not match' });
      return false;
    }}
    return true;
  }
  const submitForm = async (formData: FormDataState,formType:FormType) => {
    setError({ errmessage: '' });
    setSuccessMessage('');
    setIsLoading(true)
    if(!validateForm(formData,formType)) return
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        data.append(key, value as string | Blob);
      }
    });
  
    try {
      const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/profile/${formData.id}`, {
        method: 'PUT',
        body: data,
        credentials: 'include',
      });
    
      const responseData = await response?.json();
      if (!response?.ok) {
        console.log(responseData)
        throw new Error(responseData?.message || 'An error occurred');
      }
      
      console.log(responseData)
      console.log('response data')
      const updatedAuthData={
        user: {...responseData,
          firstName: responseData?.firstname || '',
          lastName: responseData?.lastname || '',
          username: responseData?.username || '',
          email: responseData?.email || '',
          phonenumber: responseData?.phonenumber || '',
          country: responseData?.country || '',
          city: responseData?.city || '',
          bio: responseData?.bio || '',
          id: responseData?._id || '',
          pfp: responseData?.pfp || null
        },
        accessToken:auth?.accessToken
      }
      console.log(auth);
      setAuth(updatedAuthData);
      setFormData({
        ...formData,
        firstName: responseData?.firstname || '',
        lastName: responseData?.lastname || '',
        username: responseData?.username || '',
        email: responseData?.email || '',
        phonenumber: responseData?.phonenumber || '',
        country: responseData?.country || '',
        city: responseData?.city || '',
        bio: responseData?.bio || '',
        id: responseData?._id || '',
        pfp: responseData?.pfp || null,
      });
      setSuccessMessage('user information has been updated successfully')

      setIsLoading(false)
    } catch (error:any) {
      setError({ errmessage: error.message });
    
      setIsLoading(false)
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formType: FormType) => {
    e.preventDefault();
    console.log("ss")
    submitForm(formData, formType);
  }
  useEffect(()=>{
    console.log(auth)
  },[])

  return (
    <div className='flex bg-[#E9EAF0]'>
    
    <Sidebar />
    
    <div className='flex container mx-auto'>
      <div className='flex-grow'>
        <div className=' text-[#1d2026]  '>
        <Navbar />
          <h1 className=' font-semibold text-xl ml-8 my-4 '>Account Settings</h1>
          <div className=' w-full gap-4'>
            <form encType="multipart/form-data" action={`profile/${formData.id}`} method='POST' onSubmit={(e) => handleSubmit(e, 'userData')} className=' mx-8 font-normal text-xs'>
              <div className='flex max-md:flex-col w-full gap-4 mb-4 '>
                <div className='flex-grow'>
                  <div className='flex   gap-4'>
                    <div className='flex-1'>
                      <label htmlFor="">First Name</label>
                      <input type="text" name='firstName' onChange={handleChange} value={formData.firstName} className='abdouinput text-black my-1' placeholder="First Name" />
                    </div>
                    <div className=' flex-1'>
                      <label htmlFor="">Last Name</label>
                      <input type="text" name='lastName' value={formData.lastName} onChange={handleChange} className='abdouinput my-1' placeholder="Last Name" />
                    </div>
                  </div>
                  <label htmlFor="">Username</label>
                  <input type="text" name='username' onChange={handleChange} value={formData.username} className='abdouinput my-1' placeholder="Username" />
                  <label htmlFor="">Email</label>
                  <input type="text" name='email' onChange={handleChange} value={formData.email} className='abdouinput my-1' placeholder="Email" />
                  <label htmlFor="">Phone Number</label>
                  <input type="number" name='phonenumber' onChange={handleChange} value={formData.phonenumber} className='abdouinput my-1' placeholder="Phone Number" />
                  <label htmlFor="">Country</label>
                  <input type="text" name='country' onChange={handleChange} value={formData.country} className='abdouinput my-1' placeholder="Country" />
                  <label htmlFor="">City</label>
                  <input type="text" name='city' onChange={handleChange} value={formData.city} className='abdouinput my-1' placeholder="City" />
                  <label htmlFor=""> bio</label>
                  <textarea name="bio" onChange={handleChange} value={formData.bio} placeholder='Your title, proffesion or small biography' className='abdouinput my-1' id="" cols={30} rows={10}></textarea>

                </div>
                <div className='h-fit w-56 flex-none bg-[#f5f7fa] my-4'>
                  <input type="file" name='pfp' onChange={handleChange} id="file" accept='image/' multiple className="hidden" />
                  <label htmlFor="file" className=' mx-auto flex flex-col justify-center items-center '>
                    <img src="/images/persons.svg" alt="" className='w-40 h-40 m-6 bg-white ' />
                    <div className="cursor-pointer bg-black opacity-50  w-fit h-fit text-white text-xs font-medium px-4 py-2">
                      <FileUploadOutlinedIcon className='mx-auto' />Upload photo
                    </div>
                  </label>
                  <p className='font-normal text-[10px] text-[#6e7485] text-center'>image size should be under 1MB</p>
                </div>

              </div>
               {error.errmessage.length !== 0 && <ErrorComponent errmessage={error.errmessage} />}
               {successMessage !=='' && <Success successMessage={successMessage} />}
              <button type='submit' className='flex flex-row justify-center items-center mx-1 my-4 px-4 py-2 w-fit  max-sm:text-sm h-11 bg-[#00977D] border-2 border-[#00977D] rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>{isLoading?'saving...':'Save Changes'}</button>
            </form>

          </div>
        </div>
        <div className='w-2/5 max-md:w-full'>
          <h1 className=' font-semibold text-xl ml-8 my-4 '>Change Password</h1>
          <form action="" method='POST' onSubmit={(e) => handleSubmit(e, 'passwordChange')} className='w-9/12 mx-8 font-normal text-xs'>
            <label htmlFor="">Old Password</label>
            <input type="password" name='oldPassword' className='abdouinput my-1' value={formData.oldPassword} onChange={handleChange} placeholder="Old Password" />
            <label htmlFor="">Password</label>
            <input type="password" name='password' className='abdouinput my-1' value={formData.password} onChange={handleChange} placeholder="Password" />
            <label htmlFor="">Confirm Password</label>
            <input type="password" name='confirmPassword' className='abdouinput my-1' value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
            <button type='submit' className='flex flex-row justify-center items-center mx-1 my-4 px-4 py-2 w-fit max-sm:text-sm h-11 bg-[#00977D] border-2 border-[#00977D] rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>{isLoading?'saving...':'Save Changes'}</button>

          </form>
        </div>
      </div>
    </div>

    </div>  )
}
