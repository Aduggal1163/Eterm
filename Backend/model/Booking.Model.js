import mongoose from "mongoose";
const bookingModel=new mongoose.Schema({
    vehicleNumber:{
        type:String,
        required:true,
        // unique:true
    },
    ownerName:{
        type:String,
        required:true
    },
    slotNumber:{
        type:String,
        required:true
    },
    bookingTime:{
        type:Date,
    }
},{timestamps:true})
const Booking=mongoose.model("booking",bookingModel);
export default Booking;