import { Trip } from "../../hooks/useFetchTrip";

export default function TripInfo({ trip }: { trip: Trip }) {
  const {
    origin,
    departureDateTime,
    destination,
    detail,
    price,
    seats,
    image,
  } = trip;
  return (
    <div>
      <div className="mt-5 flex justify-between">
        <div>
          <h3 className="text-blue-500">
            {origin} to {destination}
          </h3>
          <p className="text-gray-600 text-sm">{departureDateTime}</p>
        </div>
        <div>
          <h3 className="font-semibold">{seats} seats left</h3>
          <p className="text-green-600 text-sm">${price} per seat</p>
        </div>
      </div>

      <div className="text-xs mt-6">
        <h2 className="font-bold">Trip details</h2>
        <p>{detail}</p>
        <img className="w-60 rounded mt-3" src={image} alt="" />
      </div>
    </div>
  );
}
