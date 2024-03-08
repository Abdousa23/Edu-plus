'use client'
import useAuth from "./_hooks/useAuth";
import Navbar from "./_components/Navbar";
export default function Home() {
    const auth = useAuth();
    console.log(auth);

    return (
        <div >
            <Navbar/>
        </div>
    )
        
    
}
