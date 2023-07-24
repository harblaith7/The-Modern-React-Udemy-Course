import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import RequestPage from "./pages/RequestPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <div className="w-[800px] m-auto bg-white text-black">
        <Nav />
        {/* <HomePage /> */}
        {/* <SearchPage /> */}
        <RequestPage />
      </div>
    </>
  );
}

export default App;
