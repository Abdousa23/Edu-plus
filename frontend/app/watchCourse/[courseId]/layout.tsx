
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";
import PersistLogin from "@/app/_HOC/PersistLogin";

type Params = {
    params: {
        courseId: string
    }
}


export async function generateMetadata({params:{courseId}}:Params):Promise<Metadata> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/${courseId}`)
        const data = await response?.json();        
        if(response?.status === 404){
            return {
                title: "no course with this infos",
            }
        }
        return {
            title: data.title,
            description: data.description,
        }
}

interface Props {
    children: React.ReactNode;
}
export default function WacthLayout({
    children
} : Props) {
    return (
            <PersistLogin>
            {children}
            </PersistLogin>
            );
}

