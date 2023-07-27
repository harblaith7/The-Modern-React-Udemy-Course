import { useEffect } from "react";
import ListingCard from "../components/ListingCard";
import SearchBar from "../components/SearchBar";
import useFetchTrips from "../hooks/useFetchTrips";

export default function SearchPage() {
  const [{ data, loading, error }, fetchTrips] = useFetchTrips();

  useEffect(() => {
    fetchTrips();
  }, []);

  console.log({ data, error, loading });

  return (
    <div>
      <SearchBar />
      <div>
        {loading && <div>Loading...</div>}
        {error && <p>{error}</p>}
        {data && (
          <div>
            {data.map((trip) => (
              <ListingCard trip={trip} key={trip.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
