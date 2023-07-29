import { useState } from "react";
import { FilterTrip } from "../hooks/useFetchTrips";
import { useSearchParams } from "react-router-dom";
import FindCityModal from "./FindCityModal";

interface SearchBarProps {
  onSearch: (filter: FilterTrip) => void;
}

export default function SearchBar({ onSearch: handleSearch }: SearchBarProps) {
  const [filters, setFilters] = useState({
    origin: "",
    destination: "",
    date: "",
  });
  const [, setSearchParams] = useSearchParams();
  console.log(filters);
  const handleClick = () => {
    if (filters.origin && filters.destination && filters.date) {
      handleSearch(filters);
      setSearchParams(filters);
    }
  };

  const handleChangeOrigin = (text: string) => {
    setFilters({ ...filters, origin: text });
  };

  const handleChangeDestination = (text: string) => {
    setFilters({ ...filters, destination: text });
  };

  return (
    <div className="bg-white rounded-3xl shadow p-4 flex items-center">
      <FindCityModal
        label="From"
        onChange={handleChangeOrigin}
        value={filters.origin}
      />
      <FindCityModal
        label="To"
        onChange={handleChangeDestination}
        value={filters.destination}
      />
      <input
        type="date"
        className="bg-gray-100 rounded p-3 h-12 mr-2 w-full"
        name="date"
        value={filters.date}
        onChange={(e) =>
          setFilters({
            ...filters,
            [e.target.name]: e.target.value,
          })
        }
      />
      <button
        className="bg-orange-500 h-12 rounded text-white w-full font-bold"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}
