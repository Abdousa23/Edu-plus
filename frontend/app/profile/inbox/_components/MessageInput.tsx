import { BsSend } from "react-icons/bs";
import { useContext, useState } from "react";
import useAuth from "@/app/_hooks/useAuth";
import { ChatContext } from "@/context/chatContext";


export default function MessageInput() {
    const [message, setMessage] = useState("");
    const {messages,setMessages,selectedChat}=useContext(ChatContext)
    const { auth } = useAuth();
    const {socket} = useContext(ChatContext);
    
    const handleClick = (event:any) => {
        event.preventDefault();
        if (message === "") return;
        let newMessage = {chatId:selectedChat._id,text:message,sender:auth?.user,createdAt: new Date().toISOString()}
       
        socket.emit("send_message", {message:newMessage,id: selectedChat._id});
        console.log(newMessage)
        console.log(messages)
        setMessages([...messages, newMessage])
        setMessage("");
    }

    return (
        <form onSubmit={handleClick} className=" border-t"> {/* Attach handleSubmit to onSubmit event */}
            <div className="flex w-[90%] mx-auto items-center gap-4 my-5">
                <div className="w-full">
                    <input
                        placeholder="Send a message"
                        type="text"
                        className="text-black abdouinput "
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    // onSubmit={handleClick}
                    className="flex justify-center mt-1 gap-2 items-center mx-1 px-4  w-[104px] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 bg-[#00977D] border-2 border-[#00977D]  order-5 self-stretch flex-grow-0 text-white text-base"
                >
                    <p>Send</p>
                    <BsSend />
                </button>
            </div>
        </form>
    );
}

