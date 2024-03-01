'use client'
import { useAuth } from "@/context/authContext";
export default function Home() {
    const auth = useAuth();
    console.log(auth);

    return <h1>Home page</h1>
}
