export default function HomePageHeader() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Carpool for the Planet</h1>
      <p className="mt-6 text-xl w-[350px]">
        Join 800,000+ people who carpool between cities in Canada. Free sign up.
      </p>
      <div className="mt-4 text-lg font-semibold">
        <button className="rounded-full border py-3 border-2 border-black px-7 mr-7">
          Download Our App
        </button>
        <button>How it Works</button>
      </div>
    </div>
  );
}
