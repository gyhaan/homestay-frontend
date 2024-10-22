import { useState } from "react";

function ViewBooking() {
  const role = JSON.parse(sessionStorage.getItem("role"));
  const [bookings, setBookings] = useState([]);
  return <div></div>;
}

export default ViewBooking;
