'use client'
import useAuth from './_hooks/useAuth';
export default function Home() {
    const {auth} = useAuth();
  return (
    <div>
        {!auth ? 'not logged in' : `sign in as  ${auth?.user?.username || 'guest'}`}
    </div>

  )
    
}
