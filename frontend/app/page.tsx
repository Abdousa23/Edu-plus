'use client'
import { useAuth } from "@/context/authContext";
import Navbar from "./components/Navbar";
import LendingPage from "./components/LendingPage";
// import Categories from "./components/";
export default function Home() {
    const auth = useAuth();

//<LendingPage/>
    return (
        <div >
            <Navbar/>
            {/* <Categories/> */}
            
            
        </div>
    )
        
    
}
