import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

function Booking() {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingOption: "",
    fromDate: "",
    toDate: "",
    singleDate: "",
    partySize: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "bookingOption") {
      setSelectedOption(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/booking-success", {
      state: { bookingOption: formData.bookingOption },
    });
  };

  return (
    <div className="booking-page">
      <h2>Book Your Experience</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Select an Option:
          <select
            name="bookingOption"
            value={formData.bookingOption}
            onChange={handleChange}
            required
          >
            <option value="">--Choose an Option--</option>
            <option value="Rainforest Hike">Rainforest Hike</option>
            <option value="Volcano Tour">Volcano Tour</option>
            <option value="Snorkeling">Snorkeling</option>
            <option value="Chartered Fishing">Chartered Fishing</option>
            <option value="Resort">Beachfront Resort</option>
            <option value="Beach Hotel">Small Beach Hotel</option>
            <option value="Beachside Restaurant">Beachside Restaurant</option>
            <option value="Airplane">Airplane</option>
          </select>
        </label>
        {(selectedOption === "Resort" ||
          selectedOption === "Beach Hotel" ||
          selectedOption === "Airplane") && (
          <>
            <label>
              From:
              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              To:
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                required
              />
            </label>
          </>
        )}
        {(selectedOption === "Beachside Restaurant" ||
          selectedOption === "Rainforest Hike" ||
          selectedOption === "Volcano Tour" ||
          selectedOption === "Snorkeling" ||
          selectedOption === "Chartered Fishing") && (
          <>
            <label>
              Date:
              <input
                type="date"
                name="singleDate"
                value={formData.singleDate}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Party Size:
              <input
                type="number"
                name="partySize"
                min="1"
                value={formData.partySize}
                onChange={handleChange}
                required
              />
            </label>
          </>
        )}
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
