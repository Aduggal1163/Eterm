import Booking from "../model/Booking.Model.js";
export const createBooking = async (req,res) => {
    try {
        const vehicleNumber = req.body.vehicleNumber;
        const ownerName = req.body.ownerName;
        const slotNumber = req.body.slotNumber;
        if (!vehicleNumber) {
            return res.status(401).json({
                message: "Vehicle Number is required",
            });
        }
        if (!ownerName) {
            return res.status(401).json({
                message: "Owner Name is required",
            });
        }
        if (!slotNumber) {
            return res.status(401).json({
                message: "Slot Number is required",
            });
        }
        const newBooking = await Booking.create({
            vehicleNumber: vehicleNumber,
            ownerName: ownerName,
            slotNumber: slotNumber,
        });
        res.status(201).json({
            message: "Booking created successfully",
            Booking: newBooking,
        });
    } catch (error) {
        console.log("error while creating new booking ", error);
    }
};
export const getAllBooking = async (req,res) => {
    try {
        const Book = await Booking.find({});
        console.log(Book);
        if (Book.length < 1) {
            return res.status(401).json({
                message: "No booking found"
            })
        }
        res.status(200).json({
            message: "Booking found",
            Booking: Book
        })
    } catch (error) {
        console.log("Error while fetching all bookings ", error);
    }
}
export const updateBooking = async (req,res) => {
    try {
        const UpdatedBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!UpdatedBooking) {
            return res.status(401).json({
                message: "No booking found"
            })
        }
        res.status(200).json({
            message: "Booking updated successfully",
            Booking: UpdatedBooking
        })

    } catch (error) {
        console.log("Error while updating booking");
    }
}
export const deleteBooking = async (req,res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking deleted' });
    } catch (error) {
        console.log("Error while deleting Booking ",error);
    }
}