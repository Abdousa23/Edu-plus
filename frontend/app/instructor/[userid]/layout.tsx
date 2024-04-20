
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";
import PersistLogin from "@/app/_HOC/PersistLogin";
export const metadata: Metadata = {
  title: "instructor Page",
  description: "explore our instructors popular courses!",
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
