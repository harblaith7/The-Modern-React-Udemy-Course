import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MagicNumber from "./components/MagicNumber";
import SignUpToNewsLetter from "./components/SignUpToNewsLetter";
import MemoHook from "./components/MemoHook";

function App() {
  return (
    <>
      {/* <MagicNumber /> */}
      {/* <SignUpToNewsLetter /> */}
      <MemoHook />
    </>
  );
}

export default App;
