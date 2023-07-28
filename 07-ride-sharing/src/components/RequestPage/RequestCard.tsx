import { format } from "date-fns";
import { Trip } from "../../hooks/useFetchTrip";

export default function RequestCard({ trip }: { trip: Trip }) {
  const { origin, departureDateTime, destination, price } = trip;

  const date = format(new Date(departureDateTime), "iiii, MMMM do 'at' h:mmaa");

  return (
    <div className="border rounded p-2 ml-24 text-xs">
      <div className="border-b pb-3">
        <h3 className="mb-4 font-semibold">Book request</h3>
        <h4 className="font-semibold text-blue-400">
          {origin} to {destination}
        </h4>
        <p className="text-gray-500">{date}</p>
      </div>
      <div className="py-3">
        <p>1 seat</p>
        <p>${price}</p>
        <p>Pay in person</p>
      </div>
      <button className="rounded-full w-full bg-orange-400 p-2 text-white">
        Request to book
      </button>
    </div>
  );
}
