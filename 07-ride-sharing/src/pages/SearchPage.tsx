import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import ListingCard from "../components/ListingCard";
import SearchBar from "../components/SearchBar";
import useFetchTrips, { FilterTrip } from "../hooks/useFetchTrips";

export default function SearchPage() {
  const [{ data, loading, error, count }, fetchTrips] = useFetchTrips();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const origin = searchParams.get("origin");
    const destination = searchParams.get("destination");
    const date = searchParams.get("date");

    if (origin && destination && date) {
      fetchTrips(page, {
        origin,
        destination,
        date,
      });
    } else {
      fetchTrips(page);
    }
  }, [page]);

  const renderPageTabs = (c: number) => {
    const numberOfPages = Math.ceil(c / 5);
    const pageTabs = [];

    for (let i = 1; i <= numberOfPages; i++) {
      pageTabs.push(
        <button
          className={`w-10 h-10 border mr-4 rounded-full flex justify-center items-center ${
            i === page ? "bg-gray-200" : null
          }`}
          onClick={() => setPage(i)}
        >
          {i}
        </button>
      );
    }

    return pageTabs;
  };

  const handleSearch = (filter: FilterTrip) => {
    fetchTrips(page, filter);
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
        {data && count && (
          <div>
            <div>
              {data.map((trip) => (
                <ListingCard trip={trip} key={trip.id} />
              ))}
            </div>
            <div className="py-10 flex">{renderPageTabs(count)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
