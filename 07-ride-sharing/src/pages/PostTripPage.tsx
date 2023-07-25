import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  origin: string;
  destination: string;
  departureDate: string;
  departureTime: string;
  tripDetails: string;
  numberOfSeats: string;
  price: string;
  carImgUrl: string;
};

export default function PostTripPage() {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {/* ORIGN */}
        <div>
          <label htmlFor="origin">Origin</label>
          <select id="origin" {...register("origin")}>
            <option value="Vancouver">Vancouver</option>
            <option value="Ottawa">Ottawa</option>
            <option value="Toronto">Toronto</option>
          </select>
        </div>

        {/* DESTINATION */}
        <div>
          <label htmlFor="destination">Destination</label>
          <select id="destination" {...register("destination")}>
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
            id="departureDate"
            {...register("departureDate")}
          />
        </div>

        {/* DEPATURE TIME */}
        <div>
          <label htmlFor="departureTime">Departure Time</label>
          <input
            type="time"
            id="departureTime"
            {...register("departureTime")}
          />
        </div>

        {/* TRIP DETAILS */}
        <div>
          <label htmlFor="tripDetails">Trip Details</label>
          <textarea
            className="border"
            id="tripDetails"
            {...register("tripDetails")}
          ></textarea>
        </div>

        {/* IMG */}
        <div>
          <label htmlFor="carImgUrl">Car Image</label>
          <input
            className="border"
            type="text"
            id="carImgUrl"
            {...register("carImgUrl")}
          />
        </div>

        {/* NUMBER 0F SEATS */}
        <div>
          <label htmlFor="numberOfSeats">Number of Seats</label>
          <select id="numberOfSeats" {...register("numberOfSeats")}>
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
            id="price"
            {...register("price")}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
