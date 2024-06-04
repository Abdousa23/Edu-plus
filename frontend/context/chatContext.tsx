'use client'

import { createContext, useState, ReactNode } from "react";
import useFetchPrivate from "@/app/_hooks/useFetchPrivate";
import io from "socket.io-client";

const socket = io("https://edu-plus-1.onrender.com");

type chatContextProps = {
    children: ReactNode,
}

export const ChatContext = createContext<any>({
    chats: [],
    setChats: () => { },
    selectedChat : {},
    setSelectedChat: () => { },
    messages: [],
    setMessages: () => { },
    getAllChats : Promise.resolve(),
    getMessages : Promise.resolve()
  });
export const ChatProvider = ({ children }:chatContextProps) => {
    const [chats, setChats] = useState<any>([])
    const [selectedChat, setSelectedChat] = useState<any>(null)
    const [messages, setMessages] = useState<any>([])
    const fetchPrivate = useFetchPrivate()
    
    const getAllChats = async () => {
        try {
          const res = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/chat/getChats`,{method:'GET'})
          const data = await res?.json()
          console.log(data)
          setChats(data.chats)
        } catch (error) {
          console.log(error)
        }
      }
    const getMessages = async (chatId: string) => {
        try {
          const res = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/chat/getChat/${chatId}`,{method:'GET'})
          const data = await res?.json()
          console.log(data)
          setMessages(data)
        } catch (error) {
          console.log(error)
        }
      }
    
    return <ChatContext.Provider value={{ selectedChat, setSelectedChat , chats ,setChats , messages , setMessages , getAllChats,getMessages,socket}}>
        {children}
    </ChatContext.Provider>;

}

export default ChatProvider;