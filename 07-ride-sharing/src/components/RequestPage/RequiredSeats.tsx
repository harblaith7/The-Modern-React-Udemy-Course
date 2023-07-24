export default function RequiredSeats() {
  return (
    <div className="border-y py-7 mt-5 text-sm font-semibold flex justify-between">
      <h2>Seats required</h2>
      <div className="flex">
        <select className="mr-2">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <p>seats</p>
      </div>
    </div>
  );
}
