import express from 'express';
import dotenv from 'dotenv';
import DBConnect from './config/db.js';
dotenv.config();
const port=process.env.PORT || 3001;
const app=express();
app.use(express.json());
DBConnect();

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})