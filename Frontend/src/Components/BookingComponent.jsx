import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ET/get")
      .then((res) => {
        setBookings(res.data.Booking);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
      });
  }, []);
  return (
    <div>
      <h2>All Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div>
            Vehicle Number: {booking.vehicleNumber} <br />
            Owner Name: {booking.ownerName} <br />
            Slot Number: {booking.slotNumber} <br />
            Created At: {booking.createdAt}<br/>
             <hr />
          </div>
          
        ))
      )}
    </div>
  );
};

export default BookingList;
