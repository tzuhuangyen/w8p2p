import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pet from "./Pet.jsx";
import PetsList from "./PetsList.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>w8p2p Vite + React</h1>
      <PetsList />
    </>
  );
}

export default App;
