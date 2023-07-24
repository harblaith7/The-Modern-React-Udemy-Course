export default function SearchBar() {
  return (
    <div className="bg-white rounded-3xl shadow p-4 flex items-center">
      <input
        type="text"
        placeholder="From"
        className="bg-gray-100 rounded p-3 mr-2 w-full"
      />
      <input
        type="text"
        placeholder="To"
        className="bg-gray-100 rounded p-3 mr-2 w-full"
      />
      <input type="date" className="bg-gray-100 rounded p-3 h-12 mr-2 w-full" />
      <button className="bg-orange-500 h-12 rounded text-white w-full font-bold">
        Search
      </button>
    </div>
  );
}
