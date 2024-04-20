import { BsSend } from "react-icons/bs";
import { useSendMessage } from "../_hooks/useSendMessage";
import { ChangeEvent, useState } from "react";
import useChat from '../zustand/useChat'
import useAuth from "@/app/_hooks/useAuth";





export default function MessageInput() {
    const [message, setMessage] = useState("");
    const { sendMessage } = useSendMessage();
    const { selectedChat } = useChat();
    const { auth } = useAuth();

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission default behavior
        if (!message) return;

        const msj = {
            chat: selectedChat?._id,
            message: message,
            sender: auth.user?._id,
            senderphp: auth.user?.pfp,

        };
        await sendMessage(msj);
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit}> {/* Attach handleSubmit to onSubmit event */}
            <div className="w-full relative">
                <div className="px-4 my-3">
                    <div className="w-full">
                        <input
                            placeholder="Send a message"
                            type="text"
                            className="text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="absolute inset-y-2 end-4 flex items-center pe-3"
                >
                    <BsSend />
                </button>
            </div>
        </form>
    );
}

