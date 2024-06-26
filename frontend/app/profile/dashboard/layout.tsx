import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import PersistLogin from "@/app/_HOC/PersistLogin";
import { AuthProvider } from "@/context/authContext";
import Sidebar from "../_components/Sidebar";
import Navbar from "@/app/_components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    manifest: 'manifest.json',
    title: "EDU+ - dashboard",
    description: "our first elearning platform",
};
export const viewport: Viewport = {
    themeColor: "#FFFFFF",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
                <AuthProvider>
                    <PersistLogin>
                        
                        {children}
                    </PersistLogin>
                </AuthProvider>

            );
} 
