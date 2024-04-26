import { BsSend } from "react-icons/bs";
// import { useSendMessage } from "../../hooks/useSendMessage";
import { ChangeEvent, useState } from "react";

export default function MessageInput() {
    const [message, setMessage] = useState("");
    //   const { sendMessage } = useSendMessage();

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (!message) return;

        // await sendMessage(message);
        setMessage("");
    };

    return (
        <form onSubmit={(e)=>handleSubmit}>
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
