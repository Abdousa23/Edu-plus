
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext"; 
import PersistLogin from "../_HOC/PersistLogin";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

// export const generateMetadata = async () => {
//     return {
//         title: "home Page",
//         description: "explore our courses and start learning today!",
//     };
    
// }
export const metadata: Metadata = {
  title: "home Page",
  description: "explore our courses and start learning today!",
};

interface Props {
    children: React.ReactNode;
}
export default function HomeLayout({
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
