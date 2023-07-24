export default function PersonInfo() {
  return (
    <div className="flex justify-between">
      <div>
        <div className="py-2 flex">
          <img
            src="https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.jpg"
            alt=""
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="font-bold">Kevin</p>
          </div>
        </div>
        <h2 className="font-semibold">Request to book with Kevin</h2>
      </div>
    </div>
  );
}
