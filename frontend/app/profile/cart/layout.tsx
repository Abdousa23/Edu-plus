import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import PersistLogin from "@/app/_HOC/PersistLogin";
import { AuthProvider } from "@/context/authContext";
import CartProvider from "@/context/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    manifest: 'manifest.json',
    title: "EDU+ - cart",
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
        <html lang="en">
            <body>
                <AuthProvider>
                    <PersistLogin>
                        <CartProvider>
                            {children}
                        </CartProvider>
                    </PersistLogin>
                </AuthProvider>

            </body>
        </html>
    );
} 
