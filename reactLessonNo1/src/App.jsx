import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header";
import { Article } from "./Article";
import CardComponent, { OtherCard } from "./CardComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CardComponent title="Uno" text="fun card game." />
      <CardComponent title="basketball" text="fun card game." />
      <OtherCard title="football" text="fun card game." />
    </>
  );
}

export default App;
