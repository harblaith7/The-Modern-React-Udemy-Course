import PersonInfo from "../components/RequestPage/PersonInfo";
import RequestCard from "../components/RequestPage/RequestCard";
import RequiredSeats from "../components/RequestPage/RequiredSeats";
import TripInfo from "../components/RequestPage/TripInfo";

export default function RequestPage() {
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
