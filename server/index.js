import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(
    {
        origin:[
            "http://localhost:5174",
            "http://localhost:5173",
            "http://13.61.35.109:3000"
        ],
        credentials:true,
    }
))

app.get("/",(req,res)=>{
    res.json({message:"Server is running!"});
})

app.get("/api/message",(req,res)=>{
    res.json({message:"Hello from the server!"});
})


const PORT = 4000;
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})