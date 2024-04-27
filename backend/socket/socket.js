const http = require('http');
const { Server } = require('socket.io'); // Changed to Server
const express = require('express');
const app = express();

const server = http.createServer(app); // Removed const server = ...
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"]
    }
});
console.log('Socket server running')

const userSocketMap = {} // this object will have  {chatId: socketId}

const getReceiverSocketId= (chatId) => {
    return userSocketMap[chatId];
}





io.on('connection', (socket) => {
    console.log('a user connected to socket room ', socket.id);

    const  userId = socket.handshake.query.userId;
    if(userId!==undefined){
        userSocketMap[userId] = socket.id
    }
    console.log("user socket map is ",userSocketMap)


    // socket.on is for listening to the event from the client and server side both
    socket.on('disconnect', () => {
        console.log('user disconnected frome socket room', socket.id);
        delete userSocketMap[userId]
    });
});

module.exports = { app, io, server ,getReceiverSocketId }; // Changed export to module.exports
