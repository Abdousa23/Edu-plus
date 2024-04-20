import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/authContext";
import "./globals.css";
import { SocketContextProvider } from "@/context/SocketContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EDU+",
  description: "our first elearning platform",
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
          <SocketContextProvider>
        {children}
          </SocketContextProvider>
        </AuthProvider>
        
      </body>
    </html>
  );
} 
