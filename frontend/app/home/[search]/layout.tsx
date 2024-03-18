
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";

type Params = {
    params: {
        search: string
    }
}


export async function generateMetadata({params:{search}}:Params):Promise<Metadata> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/search/${search}`)
        const data = await response?.json();        
        if(response?.status === 404){
            return {
                title: "no results for"+search,
            }
        }
        return {
            title: 'Search Results for '+search,
            description: data.length+' results for '+search,
        }
}

interface Props {
    children: React.ReactNode;
}
export default function SearchLayout({
    children
} : Props) {
    return (
            children
            );
}
