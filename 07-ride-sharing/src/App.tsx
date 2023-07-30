import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="w-[800px] m-auto bg-white text-black">
        <Nav />
        <Outlet />
      </div>
    </>
  );
}

export default App;
