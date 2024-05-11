
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";
import PersistLogin from "@/app/_HOC/PersistLogin";
export const metadata: Metadata = {
  title: "instructor Page",
  description: "explore our instructors popular courses!",
};

interface Props {
    children: React.ReactNode;
}
export default function HomeLayout({
    children
} : Props) {
    return (
        <PersistLogin>
            {children}
        </PersistLogin>
            );
}

export async function generateStaticParams() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/instructor/users/`)
    const data = await response?.json();
    if(response?.status === 404){
        throw new Error('Not Found');
    }
    return data.map((user:userType) => {
        return {
            params: {
                userid: user._id
            }
        }
    })
    
}