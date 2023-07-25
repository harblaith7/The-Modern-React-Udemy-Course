import { useState } from "react";

export default function PostTripPage() {
  const [origin, setOrigin] = useState("Vancouver");
  const [destination, setDestination] = useState("Ottawa");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [tripDetails, setTripDetails] = useState("");
  const [numberOfSeats, setNumberOfSeats] = useState("");
  const [price, setPrice] = useState("");
  const [carImgUrl, setCarImgUrl] = useState("");

  return (
    <div>
      <form className="flex flex-col">
        {/* ORIGN */}
        <div>
          <label htmlFor="origin">Origin</label>
          <select
            name="origin"
            id="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          >
            <option value="Vancouver">Vancouver</option>
            <option value="Ottawa">Ottawa</option>
            <option value="Toronto">Toronto</option>
          </select>
        </div>

        {/* DESTINATION */}
        <div>
          <label htmlFor="destination">Destination</label>
          <select
            name="destination"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="Vancouver">Vancouver</option>
            <option value="Ottawa">Ottawa</option>
            <option value="Toronto">Toronto</option>
          </select>
        </div>

        {/* DEPATURE DATE */}
        <div>
          <label htmlFor="departureDate">Departure Date</label>
          <input
            type="date"
            name="departureDate"
            id="departureDate"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        {/* DEPATURE TIME */}
        <div>
          <label htmlFor="departureTime">Departure Time</label>
          <input
            type="time"
            name="departureTime"
            id="departureTime"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
          />
        </div>

        {/* TRIP DETAILS */}
        <div>
          <label htmlFor="tripDetails">Trip Details</label>
          <textarea
            className="border"
            name="tripDetails"
            id="tripDetails"
            value={tripDetails}
            onChange={(e) => setTripDetails(e.target.value)}
          ></textarea>
        </div>

        {/* IMG */}
        <div>
          <label htmlFor="carImgUrl">Car Image</label>
          <input
            className="border"
            type="text"
            name="carImgUrl"
            id="carImgUrl"
            value={carImgUrl}
            onChange={(e) => setCarImgUrl(e.target.value)}
          />
        </div>

        {/* NUMBER 0F SEATS */}
        <div>
          <label htmlFor="numberOfSeats">Number of Seats</label>
          <select
            name="numberOfSeats"
            id="numberOfSeats"
            value={numberOfSeats}
            onChange={(e) => setNumberOfSeats(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        {/* PRICE*/}
        <div>
          <label htmlFor="price">Price per Seat</label>
          <input
            className="border"
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
