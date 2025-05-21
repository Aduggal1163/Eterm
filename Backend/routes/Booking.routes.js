import express from "express";
const router=express.Router();
import {createBooking, getAllBooking, updateBooking, deleteBooking} from "../controller/Booking.Controller.js"
router.post("/create",createBooking);
router.get("/get",getAllBooking);
router.post("/update/:id",updateBooking);
router.delete("/delete",deleteBooking);
export default router;