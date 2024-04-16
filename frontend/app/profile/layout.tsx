
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";
import PersistLogin from "../_HOC/PersistLogin";


export async function generateMetadata():Promise<Metadata> {
        return {
            title: ' Profile',
            description: 'my profile page',
        }
}

interface Props {
    children: React.ReactNode;
}
export default function SearchLayout({
    children
} : Props) {
    return (
        <AuthProvider>
            <PersistLogin>
            {children}
            </PersistLogin>
        </AuthProvider>
            );
}
