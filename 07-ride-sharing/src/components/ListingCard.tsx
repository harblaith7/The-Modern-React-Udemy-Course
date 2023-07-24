export default function ListingCard() {
  return (
    <div className="shadow border p-3 mt-5 text-xs flex justify-between">
      <div>
        <img
          src="https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.jpg"
          className="w-12 h-12 rounded-full"
        />
        <h2 className="text-xs mt-1 font-semibold">Kevin</h2>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-blue-600 text-sm">Ottawa to Toronto</h2>
          <div className="flex justify-between">
            <p className="mr-3">Leaving</p>
            <p>Wednesday, July 26 at 12:15am</p>
          </div>
        </div>
        <div className="text-gray-400">
          <div className="flex">
            <p className="w-32">Pickup:</p>
            <p>Ottawa ON</p>
          </div>
          <div className="flex">
            <p className="w-32">Dropoff:</p>
            <p>Toronto ON</p>
          </div>
        </div>
      </div>

      <div>
        <img
          src="https://www.lucidmotors.com/s3fs-public/2023-04/home-hero-stealth-1080p.webp"
          alt=""
          className="w-44 rounded"
        />
      </div>

      <div className="font-bold flex flex-col items-end">
        <p>4 seats left</p>
        <p className="text-green-400">$45</p>
        <p className="font-light">per seat</p>
      </div>
    </div>
  );
}
