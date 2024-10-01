import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header";
import { Article } from "./Article";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Article />
    </>
  );
}

export default App;
