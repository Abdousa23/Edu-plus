import React from 'react'
import { useEffect } from 'react';
import { useSocket} from '@/context/SocketContext';
import useChat from '../zustand/useChat';

export const useListenMessages = () => {

    const {socket}=useSocket();
    const {messages, setMessages} = useChat();
    

    useEffect(() => {
        

        socket?.on("newMessage", (message: MessageType) => {
            setMessages([...messages, message])
        });
        return () => {
            socket?.off("newMessage");
        }

    }, [socket,setMessages,messages]);

}
