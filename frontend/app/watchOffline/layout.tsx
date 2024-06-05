
import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";
import PersistLogin from "@/app/_HOC/PersistLogin";
import { metadata } from "../layout";

type Params = {
    params: {
        courseId: string
    }
}



interface Props {
    children: React.ReactNode;
}
export default function watchOfflineLayout({
    children
} : Props) {
    return (
            // <PersistLogin>
            children
            // {/* </PersistLogin> */}
            );
}
