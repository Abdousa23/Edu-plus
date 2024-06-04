const express = require('express');
const app = express();
// const {app }= require('./socket/socket')
// const {server}= require('./socket/socket.js')
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middlewares/credentials');
const dotenv = require('dotenv');
const router = require("./routes/index")
const cookieParser = require('cookie-parser')
const connectDB = require('./config/connectDB');
const session = require('express-session');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');
const Swagger = require('./swagger.json');
const rateLimitMiddleware = require('./middlewares/rateLimiter');
require('./controllers/googleAuthController')
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');
const http = require('http')
const {Server} =require ('socket.io')
const Message = require('./models/message')
const Chat = require('./models/chat')
dotenv.config();
// what is is the perpose of this line
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); // Add this line
app.use(express.json());
app.use(cookieParser());

app.use(session({ secret: process.env.ACCESS_TOKEN_SECRET , resave: false, saveUninitialized: true ,cookie: { maxAge: 60000 }}));
app.use(passport.initialize());
app.use(passport.session());

app.use(credentials)
// app.use(cors({...corsOptions,origin: 'https://edu-plus-nine.vercel.app',methods : 'GET,POST,PUT,DELETE' , credentials:true}));
  app.use(cors({
     origin: 'http://localhost:3001', // specify the origin
    credentials: true, // allow credentials
  }));
app.use(mongoSanitize());
// app.use(rateLimitMiddleware);

const server = http.createServer(app)

app.get('/', (_req, res) => {
    res.send('Welcome to my API');
})


app.use('/api', router);

const io = new Server(server,{
    cors:{
        origin: 'https://edu-plus-nine.vercel.app',
        methods: ["GET","POST"],   
    }
})
io.on('connection',(socket)=>{
    socket.on('join_room',(data)=>{
        socket.rooms.forEach(room => {
            if (room !== socket.id) { // Don't leave the default room
                socket.leave(room);
            }
        });
    
        socket.join(data.id)
        socket.broadcast.to(data.id).emit('new_user_joined',{name:data.user.username})
    })
    
    socket.on('send_message', async (data)=>{
        socket.broadcast.to(data.id).emit('receive_message',data.message)
        try {
            await addingMessage(data) // Use await keyword here
        } catch (error) {
            console.error(`Failed to add message: ${error}`)
        }
   })
    
})
const addingMessage = async (data)=>{
    try{
        const message = new Message({
            chatId: data.message.chatId,
            sender: data.message.sender._id,
            text: data.message.text,
        })
        message.save()
        const chat = await Chat.findById(data.message.chatId)
        // chat.members.push(data.message.sender._id)
        // console.log(chat)
        chat.save()
    }catch(err){
        console.log(err)
    }
}

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(Swagger));

connectDB()
.then(() => {
    server.listen(3000, () => {
        console.log(`Server is running on port 3000`);
    });
})


.catch((err) => {
    console.error(err.message);
});  