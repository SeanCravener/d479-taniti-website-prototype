import { useLocation } from "react-router-dom";
import "./Booking.css";

function BookingSuccess() {
  const location = useLocation();
  const bookingOption = location.state?.bookingOption || "your selected option";

  return (
    <div className="booking-success-page">
      <h2>Booking Confirmed</h2>
      <p>
        Your booking for <strong>{bookingOption}</strong> was successfully
        completed!
      </p>
    </div>
  );
}

export default BookingSuccess;
