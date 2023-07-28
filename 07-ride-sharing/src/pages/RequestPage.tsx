import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PersonInfo from "../components/RequestPage/PersonInfo";
import RequestCard from "../components/RequestPage/RequestCard";
import RequiredSeats from "../components/RequestPage/RequiredSeats";
import TripInfo from "../components/RequestPage/TripInfo";
import useFetchTrip from "../hooks/useFetchTrip";

export default function RequestPage() {
  const [{ data, loading, error }, fetchTrip] = useFetchTrip();
  const { id } = useParams();

  useEffect(() => {
    const tripId = parseInt(id as string);
    fetchTrip(tripId);
  }, []);

  console.log(data);

  const renderContent = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (data)
      return (
        <>
          <div className="w-[500px]">
            <PersonInfo />
            <TripInfo trip={data} />
            <RequiredSeats />
          </div>

          <div className="w-[350px]">
            <RequestCard trip={data} />
          </div>
        </>
      );
  };

  return <div className="flex">{renderContent()}</div>;
}
