import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FormContextProvider } from "../../../context/FormContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "form",
    description: "form",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <FormContextProvider>
                {children}
                </FormContextProvider>
                </body>
        </html>
    );
}
