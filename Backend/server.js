import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db/database.js";
import Bookingrouter from "./routes/Booking.routes.js";
import cors from "cors";
const app=express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/api/ET",Bookingrouter)
app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
})
dbConnect();