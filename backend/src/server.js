require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');

const userRouter = require('./routes/user.route')
const postRouter = require('./routes/post.route')


// Database connection function
const connect = require('./database/db')

const PORT = process.env.PORT || 8080;

// Default Middlewares
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));

// Router - uses and posts
app.use('/users',userRouter)
app.use('/posts',userRouter)


app.get("/",async(req,res)=>{
    res.status(200).send("Server Start ADOBE BACKEND")
});

app.listen(PORT,async()=>{
    await connect();
    console.log("listening on PORT",PORT)
})
