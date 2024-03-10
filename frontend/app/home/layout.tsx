
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";
import PersistLogin from "../_HOC/PersistLogin";

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
        <PersistLogin>
            {children}
        </PersistLogin>
            );
}
