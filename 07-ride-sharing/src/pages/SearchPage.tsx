import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import ListingCard from "../components/ListingCard";
import SearchBar from "../components/SearchBar";
import useFetchTrips, { FilterTrip } from "../hooks/useFetchTrips";

export default function SearchPage() {
  const [{ data, loading, error }, fetchTrips] = useFetchTrips();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const origin = searchParams.get("origin");
    const destination = searchParams.get("destination");
    const date = searchParams.get("date");

    if (origin && destination && date) {
      fetchTrips({
        origin,
        destination,
        date,
      });
    } else {
      fetchTrips();
    }
  }, []);

  const handleSearch = (filter: FilterTrip) => {
    fetchTrips(filter);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {loading && (
          <div className="py-16 flex justify-center">
            <CircularProgress />
          </div>
        )}
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
