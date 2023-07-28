import { useEffect } from "react";
import PersonInfo from "../components/RequestPage/PersonInfo";
import RequestCard from "../components/RequestPage/RequestCard";
import RequiredSeats from "../components/RequestPage/RequiredSeats";
import TripInfo from "../components/RequestPage/TripInfo";
import useFetchTrip from "../hooks/useFetchTrip";

export default function RequestPage() {
  const [{ data, loading, error }, fetchTrip] = useFetchTrip();

  console.log({ data, loading, error });

  useEffect(() => {
    fetchTrip(3);
  }, []);

  return (
    <div className="flex">
      <div className="w-[500px]">
        <PersonInfo />
        <TripInfo />
        <RequiredSeats />
      </div>

      <div className="w-[350px]">
        <RequestCard />
      </div>
    </div>
  );
}
