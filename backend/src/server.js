require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');


// Database connection function
const connect = require('./database/db')

const PORT = process.env.PORT || 8080;

// Default Middlewares
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));



app.get("/",async(req,res)=>{
    res.status(200).send("Server Start ADOBE BACKEND")
});

app.listen(PORT,async()=>{
    await connect();
    console.log("listening on PORT",PORT)
})
