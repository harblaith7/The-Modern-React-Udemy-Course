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
    formState: { errors },
    getValues,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {/* ORIGN */}
        <div>
          <label htmlFor="origin">Origin</label>
          <select id="origin" {...register("origin", { required: true })}>
            <option value="Vancouver">Vancouver</option>
            <option value="Ottawa">Ottawa</option>
            <option value="Toronto">Toronto</option>
          </select>
          {errors.origin?.type === "required" && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>

        {/* DESTINATION */}
        <div>
          <label htmlFor="destination">Destination</label>
          <select
            id="destination"
            {...register("destination", { required: true })}
          >
            <option value="Vancouver">Vancouver</option>
            <option value="Ottawa">Ottawa</option>
            <option value="Toronto">Toronto</option>
          </select>
          {errors.destination?.type === "required" && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>

        {/* DEPATURE DATE */}
        <div>
          <label htmlFor="departureDate">Departure Date</label>
          <input
            type="date"
            id="departureDate"
            {...register("departureDate", {
              required: true,
              validate: () => {
                const departureTime = getValues("departureTime");
                const departureDate = getValues("departureDate");
                const date = new Date(`${departureDate} ${departureTime}`);

                if (new Date() > date) {
                  return "Is your car a time machine, if not set a date in the future";
                }

                return true;
              },
            })}
          />
          {errors.departureDate?.type === "required" && (
            <span className="text-red-400">This field is required</span>
          )}
          {errors.departureDate?.type === "validate" && (
            <span className="text-red-400">{errors.departureDate.message}</span>
          )}
        </div>

        {/* DEPATURE TIME */}
        <div>
          <label htmlFor="departureTime">Departure Time</label>
          <input
            type="time"
            id="departureTime"
            {...register("departureTime", { required: true })}
          />
          {errors.departureTime?.type === "required" && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>

        {/* TRIP DETAILS */}
        <div>
          <label htmlFor="tripDetails">Trip Details</label>
          <textarea
            className="border"
            id="tripDetails"
            {...register("tripDetails", {
              required: true,
              minLength: 10,
              maxLength: 150,
            })}
          ></textarea>
          {errors.tripDetails?.type === "required" && (
            <span className="text-red-400">This field is required</span>
          )}
          {errors.tripDetails?.type === "minLength" && (
            <span className="text-red-400">
              Needs to be greater than 10 characters
            </span>
          )}
        </div>

        {/* IMG */}
        <div>
          <label htmlFor="carImgUrl">Car Image</label>
          <input
            className="border"
            type="text"
            id="carImgUrl"
            {...register("carImgUrl", { required: true })}
          />
          {errors.carImgUrl?.type === "required" && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>

        {/* NUMBER 0F SEATS */}
        <div>
          <label htmlFor="numberOfSeats">Number of Seats</label>
          <select
            id="numberOfSeats"
            {...register("numberOfSeats", { required: true })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {errors.numberOfSeats?.type === "required" && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>

        {/* PRICE*/}
        <div>
          <label htmlFor="price">Price per Seat</label>
          <input
            className="border"
            type="number"
            id="price"
            {...register("price", { required: true, max: 500, min: 5 })}
          />
          {errors.price?.type === "required" && (
            <span className="text-red-400">This field is required</span>
          )}
          {errors.price?.type === "min" && (
            <span className="text-red-400">Must be greater than $5</span>
          )}
          {errors.price?.type === "max" && (
            <span className="text-red-400">Must be less than than $500</span>
          )}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
