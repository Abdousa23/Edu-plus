'use client'
import Search from "./_components/SearchPublished";
import Sidebar from "../_components/Sidebar";
import Navbar from "@/app/_components/Navbar";

const page = () => {

    return (
        <div className='flex bg-[#E9EAF0]'>
            <Sidebar />
            <div className='flex container mx-auto'>
                <div className='flex-grow'>
                    <div className=' text-[#1d2026]  grid grid-flow-dense my-2'>
                        <Navbar />
                        <div className="my-6">
                        <Search></Search>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default page