import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "../supabase";

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
    formState: { errors },
    getValues,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({
    origin,
    destination,
    departureDate,
    departureTime,
    carImgUrl,
    numberOfSeats,
    price,
    tripDetails,
  }) => {
    const trip = {
      origin,
      destination,
      departure_datetime: new Date(`${departureDate} ${departureTime}`),
      car_img: carImgUrl,
      seats: parseInt(numberOfSeats),
      price: parseFloat(price),
      detail: tripDetails,
    };

    try {
      await supabase.from("trips").insert(trip);
    } catch (error) {}
  };

  return (
    <div>
      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          {/* ORIGN */}
          <div className="flex flex-col w-full mr-5">
            <label className="text-xs" htmlFor="origin">
              Origin
            </label>
            <select
              className="w-full bg-gray-100 p-2 rounded mb-2"
              id="origin"
              {...register("origin", { required: true })}
            >
              <option value="Vancouver">Vancouver</option>
              <option value="Ottawa">Ottawa</option>
              <option value="Toronto">Toronto</option>
            </select>
            {errors.origin?.type === "required" && (
              <span className="text-red-400 text-[10px]">
                This field is required
              </span>
            )}
          </div>

          {/* DESTINATION */}
          <div className="flex flex-col w-full">
            <label className="text-xs" htmlFor="destination">
              Destination
            </label>
            <select
              id="destination"
              {...register("destination", { required: true })}
              className="w-full bg-gray-100 p-2 rounded mb-2"
            >
              <option value="Vancouver">Vancouver</option>
              <option value="Ottawa">Ottawa</option>
              <option value="Toronto">Toronto</option>
            </select>
            {errors.destination?.type === "required" && (
              <span className="text-red-400 text-[10px]">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="flex">
          {/* DEPATURE DATE */}
          <div className="flex flex-col w-full mr-5">
            <label className="text-xs" htmlFor="departureDate">
              Departure Date
            </label>
            <input
              type="date"
              id="departureDate"
              className="w-full bg-gray-100 p-2 rounded mb-2"
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
              <span className="text-red-400 text-[10px]">
                This field is required
              </span>
            )}
            {errors.departureDate?.type === "validate" && (
              <span className="text-red-400 text-[10px]">
                {errors.departureDate.message}
              </span>
            )}
          </div>

          {/* DEPATURE TIME */}
          <div className="flex flex-col w-full">
            <label className="text-xs" htmlFor="departureTime">
              Departure Time
            </label>
            <input
              type="time"
              id="departureTime"
              {...register("departureTime", { required: true })}
              className="w-full bg-gray-100 p-2 rounded mb-2"
            />
            {errors.departureTime?.type === "required" && (
              <span className="text-red-400 text-[10px]">
                This field is required
              </span>
            )}
          </div>
        </div>

        {/* TRIP DETAILS */}
        <div>
          <label className="text-xs" htmlFor="tripDetails">
            Trip Details
          </label>
          <textarea
            id="tripDetails"
            className="w-full bg-gray-100 p-2 rounded mb-2"
            {...register("tripDetails", {
              required: true,
              minLength: 10,
              maxLength: 150,
            })}
          ></textarea>
          {errors.tripDetails?.type === "required" && (
            <span className="text-red-400 text-[10px]">
              This field is required
            </span>
          )}
          {errors.tripDetails?.type === "minLength" && (
            <span className="text-red-400 text-[10px]">
              Needs to be greater than 10 characters
            </span>
          )}
        </div>

        <div className="flex w-full">
          {/* IMG */}
          <div className="mr-5">
            <label className="text-xs" htmlFor="carImgUrl">
              Car Image
            </label>
            <input
              className="w-full bg-gray-100 p-2 rounded mb-2"
              type="text"
              id="carImgUrl"
              {...register("carImgUrl", { required: true })}
            />
            {errors.carImgUrl?.type === "required" && (
              <span className="text-red-400 text-[10px]">
                This field is required
              </span>
            )}
          </div>

          {/* PRICE*/}
          <div className="w-full">
            <label className="text-xs" htmlFor="price">
              Price per Seat
            </label>
            <input
              className="w-full bg-gray-100 p-2 rounded mb-2"
              type="number"
              id="price"
              {...register("price", { required: true, max: 500, min: 5 })}
            />
            {errors.price?.type === "required" && (
              <span className="text-red-400 text-[10px]">
                This field is required
              </span>
            )}
            {errors.price?.type === "min" && (
              <span className="text-red-400 text-[10px]">
                Must be greater than $5
              </span>
            )}
            {errors.price?.type === "max" && (
              <span className="text-red-400 text-[10px]">
                Must be less than than $500
              </span>
            )}
          </div>
        </div>
        {/* NUMBER 0F SEATS */}
        <div>
          <label className="text-xs" htmlFor="numberOfSeats">
            Number of Seats
          </label>
          <select
            id="numberOfSeats"
            {...register("numberOfSeats", { required: true })}
            className="w-full bg-gray-100 p-2 rounded mb-2"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {errors.numberOfSeats?.type === "required" && (
            <span className="text-red-400 text-[10px]">
              This field is required
            </span>
          )}
        </div>
        <input
          type="submit"
          className="mt-3 p-2 bg-orange-400 text-white font-bold rounded"
        />
      </form>
    </div>
  );
}
