import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PlansPage from "./pages/PlansPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PlansPage />
    </div>
  );
}

export default App;
