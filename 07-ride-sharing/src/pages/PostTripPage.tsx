import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  origin: string;
  destination: string;
  departureDate: string;
  departureTime: string;
  tripDetails: string;
  numberOfSeats: string;
  price: number;
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
          <select id="origin" {...(register("origin"), { required: true })}>
            <option value="Vancouver">Vancouver</option>
            <option value="Ottawa">Ottawa</option>
            <option value="Toronto">Toronto</option>
          </select>
        </div>

        {/* DESTINATION */}
        <div>
          <label htmlFor="destination">Destination</label>
          <select
            id="destination"
            {...(register("destination"), { required: true })}
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
            id="departureDate"
            {...(register("departureDate"), { required: true })}
          />
        </div>

        {/* DEPATURE TIME */}
        <div>
          <label htmlFor="departureTime">Departure Time</label>
          <input
            type="time"
            id="departureTime"
            {...(register("departureTime"), { required: true })}
          />
        </div>

        {/* TRIP DETAILS */}
        <div>
          <label htmlFor="tripDetails">Trip Details</label>
          <textarea
            className="border"
            id="tripDetails"
            {...(register("tripDetails"),
            { required: true, minLength: 10, maxLength: 150 })}
          ></textarea>
        </div>

        {/* IMG */}
        <div>
          <label htmlFor="carImgUrl">Car Image</label>
          <input
            className="border"
            type="text"
            id="carImgUrl"
            {...(register("carImgUrl"), { required: true })}
          />
        </div>

        {/* NUMBER 0F SEATS */}
        <div>
          <label htmlFor="numberOfSeats">Number of Seats</label>
          <select
            id="numberOfSeats"
            {...(register("numberOfSeats"), { required: true })}
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
            id="price"
            {...(register("price"), { required: true, max: 500, min: 5 })}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
