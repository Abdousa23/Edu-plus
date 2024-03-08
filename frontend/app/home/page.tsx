'use client'
import  useAuth  from '../_hooks/useAuth'; 
import { useEffect } from 'react';
import useFetchPrivate from '../_hooks/useFetchPrivate';
import useRefreshToken from '../_hooks/useRefreshToken';
import withAuth from '../_HOC/withAuth';
import { useRouter } from 'next/navigation';
    const Home = ()=> {
    const {auth} = useAuth();
    const fetchPrivate = useFetchPrivate();
    const user=auth?.user 
    const router = useRouter();
    // console.log(user)
    const getCourses = async () => {
      
       
        const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
          method: 'GET',
      });
      const data = await response?.json();
      console.log(data); 
    }
    const Refresh=useRefreshToken(); // Cast Refresh as a function type
  return (
    <div>
        {`sign in as  ${user?.username || 'guest'}`}
      <button onClick={getCourses}>refresh</button>
    
      <button onClick={Refresh}>refresh</button>
    </div>

  )
}

export default withAuth(Home)