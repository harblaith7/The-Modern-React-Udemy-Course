import { useState } from "react";
import { FilterTrip } from "../hooks/useFetchTrips";
import { useSearchParams } from "react-router-dom";

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

  const handleClick = () => {
    if (filters.origin && filters.destination && filters.date) {
      handleSearch(filters);
      setSearchParams(filters);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow p-4 flex items-center">
      <input
        type="text"
        placeholder="From"
        className="bg-gray-100 rounded p-3 mr-2 w-full"
        name="origin"
        value={filters.origin}
        onChange={(e) =>
          setFilters({
            ...filters,
            [e.target.name]: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="To"
        className="bg-gray-100 rounded p-3 mr-2 w-full"
        name="destination"
        value={filters.destination}
        onChange={(e) =>
          setFilters({
            ...filters,
            [e.target.name]: e.target.value,
          })
        }
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
