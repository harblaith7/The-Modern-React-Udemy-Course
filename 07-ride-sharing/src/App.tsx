import "./App.css";
import Nav from "./components/Nav";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import PostTripPage from "./pages/PostTripPage";
import RequestPage from "./pages/RequestPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <div className="w-[800px] m-auto bg-white text-black">
        <Nav />
        {/* <HomePage /> */}
        {/* <SearchPage /> */}
        {/* <RequestPage /> */}
        {/* <DashboardPage /> */}
        <PostTripPage />
      </div>
    </>
  );
}

export default App;

// Origin // select
// Destination // select
// Depature date // input date
// Depature time // input time
// Trip details // textarea
// Img // input
// numberOfSeats // select
// pricePerSeat // input number
