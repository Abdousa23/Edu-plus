import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/authContext";
import "./globals.css";
import Loading from "./loading";
// import { SocketContextProvider } from "@/context/SocketContext";
import PersistLogin from "./_HOC/PersistLogin";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest:'manifest.json',
  title: "EDU+",
  description: "our first elearning platform",
};
export const viewport : Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo72x72.png" />
        <link rel="manifest" href="/manifest.json"></link>
      </head>
      <body>
        <AuthProvider>
          
          {/* <SocketContextProvider> */}
          <Suspense fallback={<Loading/>}>
          {children}
          </Suspense>
          {/* </SocketContextProvider> */}
        </AuthProvider>
        
      </body>
    </html>
  );
} 