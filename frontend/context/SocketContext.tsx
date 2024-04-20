"use client"
import { createContext, ReactNode, useState, useEffect, useContext } from 'react';
import io  from 'socket.io-client'; 
import socket from 'socket.io-client';
import useAuth from '@/app/_hooks/useAuth';

export const SocketContext = createContext<any>({});
type SocketContextProps = {
    children: ReactNode;
}

export const useSocket= () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }: SocketContextProps) => {
    const [socket, setSocket] = useState<any | null>(); // Define Socket type
    const [onlineUsers, setOnlineUsers] = useState<any>([]);
    const { auth ,setAuth } = useAuth();

    useEffect(() => {''
        if (auth?.user) {

            const socket = io('http://localhost:3001', {
                query:{
                    userId: auth?.user?._id
                }
            });
            socket.on('connect', () => {
                console.log('Socket connected with ID:', socket.id);
            });
            setSocket(socket);




            // Clean up  the socket connection when component unmounts
            return () => {
                socket.close();
            };
        } else {
            // If there's no user or authentication, close the socket connection
            socket?.close();
            setSocket(null);
        }
    }, [auth?.user]); 

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;
