import React from 'react'
import { useEffect } from 'react';
import { useSocket} from '@/context/SocketContext';
import useChat from '../zustand/useChat';



export const useListenMessages = () => {

    const {socket}=useSocket();
    const {messages, setMessages} = useChat();
    const {selectedChat} = useChat();
    

    useEffect(() => {
        
        
        socket?.on("newMessage", (message: MessageType) => {
        console.log('message in the useListenMessages hook and testing the erooore  ', message)
        console.log("slected chat ", selectedChat)
        
         if(message.chat == selectedChat?._id){

                setMessages([...messages, message])
            
            }
        });
        return () => {
            socket?.off("newMessage");
        }

    }, [socket,setMessages,messages]);

}
