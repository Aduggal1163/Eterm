import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to db")
    } catch (error) {
        console.log("Error while connecting to DB",error);
    }
}
export default dbConnect;