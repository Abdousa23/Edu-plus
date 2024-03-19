'use client'
import  useAuth  from '../_hooks/useAuth'; 
import { use, useEffect } from 'react';
import useFetchPrivate from '../_hooks/useFetchPrivate';
import useRefreshToken from '../_hooks/useRefreshToken';
import withAuth from '../_HOC/withAuth';
import useLogout from '../_hooks/useLogout';
import { useRouter } from 'next/navigation';
import PersistLogin from '../_HOC/PersistLogin';
import Navbar from '../_components/Navbar';



    const Home = ()=> {

    const {auth} = useAuth();
    const fetchPrivate = useFetchPrivate();
    const user=auth?.user 
    const logout = useLogout();
    const router = useRouter();
    // console.log(user)
    // console.log(auth)

    const signout = async ()=>{
      await logout();
      router.push('/auth/login');
    }

    const getCourses = async () => {
        const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
          method: 'GET',
      });
      const data = await response?.json();
      console.log(data); 
    }
    const Refresh=useRefreshToken(); // Cast Refresh as a function type
  return (
    <>
    {/* <PersistLogin> */}
    <Navbar />
<div>
      {`sign in as  ${user?.username || 'guest'}`}
      <button onClick={getCourses}>refresh</button>
      <button onClick={Refresh}>refresh</button>
      <button onClick={signout}>signout</button>
    </div>

    {/* </PersistLogin> */}
    </>
  )
}

export default withAuth(Home)