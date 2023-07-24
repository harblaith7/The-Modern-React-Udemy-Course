export default function TripInfo() {
  return (
    <div>
      <div className="mt-5 flex justify-between">
        <div>
          <h3 className="text-blue-500">Ottawa to Toronto</h3>
          <p className="text-gray-600 text-sm">Wednesday, July 26 at 12:15am</p>
        </div>
        <div>
          <h3 className="font-semibold">4 seats left</h3>
          <p className="text-green-600 text-sm">$50 per seat</p>
        </div>
      </div>

      <div className="text-xs mt-6">
        <h2 className="font-bold">Trip details</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab neque
          aliquid optio tempora quisquam id nesciunt culpa excepturi blanditiis,
          repellendus totam nobis deleniti maiores facilis repellat dolor
          perspiciatis ducimus necessitatibus?
        </p>
        <img
          className="w-60 rounded mt-3"
          src="https://www.lucidmotors.com/s3fs-public/2023-04/home-hero-stealth-1080p.webp"
          alt=""
        />
      </div>
    </div>
  );
}
