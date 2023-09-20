import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import PlanCard from "../components/PlanCard";
import usePlans from "../hooks/usePlans";

const createSession = async (email: string, priceId: string) => {
  const response = await axios.post("http://localhost:8080/sub/session", {
    email,
    priceId,
  });

  const { url } = response.data;

  window.location.href = url;
};

export default function PlansPage() {
  const { loading, data } = usePlans();
  const [selectedSession, setSelectedSession] = useState<null | string>(null);
  const { user } = useSelector((state: RootState) => state.user.value);

  if (loading) return <div>Loading...</div>;

  const handleClick = () => {
    if (user && selectedSession) {
      createSession(user.email, selectedSession);
    }
  };

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="w-[600px]">
        <h1 className="font-semibold text-3xl">
          Choose a plan that works for you
        </h1>
        <div className="flex mt-4">
          {data &&
            data.map((plan) => (
              <PlanCard
                plan={plan}
                key={plan.id}
                selectedSession={selectedSession}
                setSelectedSession={setSelectedSession}
              />
            ))}
        </div>
        <button
          className="rounded bg-red-400 p-3 text-white px-10 mt-3 w-full"
          disabled={!selectedSession}
          onClick={handleClick}
        >
          Purchase
        </button>
      </div>
    </div>
  );
}
