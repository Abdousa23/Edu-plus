import ChatProvider from "@/context/chatContext";


interface Props {
    children: React.ReactNode;
}
export default function ProfileLayout({
    children
}: Props) {
    return (
        <ChatProvider>
            {children}
        </ChatProvider>
    );
}