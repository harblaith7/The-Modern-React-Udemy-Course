import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main_container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
