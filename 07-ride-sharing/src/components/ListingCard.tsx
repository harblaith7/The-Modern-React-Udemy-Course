import { Trip } from "../hooks/useFetchTrips";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export default function ListingCard({ trip }: { trip: Trip }) {
  const { origin, destination, departureDateTime, seats, price, image, id } =
    trip;

  const dateFormated = format(
    new Date(departureDateTime),
    "MMMM, iii do 'at' p"
  );

  const navigate = useNavigate();

  const originCity = origin.split(", ")[0].toLowerCase();
  const originProvidence = origin.split(", ")[1];

  const destinationCity = destination.split(", ")[0].toLowerCase();
  const destinationProvidence = destination.split(", ")[1];

  return (
    <div
      className="shadow border p-3 mt-5 text-xs flex justify-between"
      onClick={() => navigate(`/request/${id}`)}
    >
      <div>
        <img
          src="https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.jpg"
          className="w-12 h-12 rounded-full"
        />
        <h2 className="text-xs mt-1 font-semibold">Kevin</h2>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-blue-600 text-sm capitalize">
            {originCity}, {originProvidence} to{" "}
            <span className="capitalize">{destinationCity}</span>,{" "}
            {destinationProvidence}
          </h2>
          <div className="flex justify-between">
            <p className="mr-3">Leaving</p>
            <p>{dateFormated}</p>
          </div>
        </div>
        <div className="text-gray-400">
          <div className="flex">
            <p className="w-32">Pickup:</p>
            <p className="capitalize">
              {" "}
              {originCity}, {originProvidence}
            </p>
          </div>
          <div className="flex">
            <p className="w-32">Dropoff:</p>
            <p className="capitalize">
              {destinationCity}, {destinationProvidence}
            </p>
          </div>
        </div>
      </div>

      <div>
        <img src={image} alt="" className="w-44 h-[120px] rounded" />
      </div>

      <div className="font-bold flex flex-col items-end">
        <p>{seats} seats left</p>
        <p className="text-green-400">${price}</p>
        <p className="font-light">per seat</p>
      </div>
    </div>
  );
}
