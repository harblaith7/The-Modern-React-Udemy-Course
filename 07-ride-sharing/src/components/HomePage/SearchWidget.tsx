export default function SearchWidget() {
  return (
    <div className="-mt-44 shadow p-5 w-[500px] rounded-3xl">
      <h2 className="font-semibold text-2xl">Need a ride?</h2>
      <p>Find a ride and carpool anywhere in Canada.</p>
      <div>
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="From"
            className="bg-gray-100 rounded p-3 mr-2 w-full"
          />
          <input
            type="text"
            placeholder="To"
            className="bg-gray-100 rounded p-3 w-full"
          />
        </div>
        <input type="date" className="bg-gray-100 rounded p-3 w-full mt-4" />
        <button className="mt-3 bg-orange-500 rounded-full text-white px-7 py-3 font-bold">
          Find a ride
        </button>
      </div>
    </div>
  );
}
