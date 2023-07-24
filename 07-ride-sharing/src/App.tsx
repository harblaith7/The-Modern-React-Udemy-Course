import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="w-[800px] m-auto bg-white text-black">
        <Nav />
        <HomePage />
      </div>
    </>
  );
}

export default App;
