import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app=express();
const PORT=process.env.PORT;
app.use(cors());
app.use(express.json());    
app.use(express.urlencoded({extended:true}));

async function start(){
    try{
        if(!process.env.DB_URI) throw new Error("DB URI not set");
        await mongoose.connect(process.env.DB_URI);
        console.log("MongoDB Connected");
        app.listen(PORT,()=>{
            console.log(`App Listening on port ${PORT}`);
        });
    }catch(err){
        console.log('Failed to connect to MongoDB',err);
        process.exit(1);
    }
}
start();