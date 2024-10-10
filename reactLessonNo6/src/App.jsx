import { Button } from "react-bootstrap";
import { ThemeContext } from "./useContex/ThemeProvider";
import { useContext } from "react";
import "./styles/styles.css";

function App() {
  // const value = useContext(ThemeContext);

  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log("theme", theme);

  return (
    <>
      <div className={`wrapper-div--${theme}`}>
        <Button onClick={toggleTheme}>Change Theme</Button>
      </div>
    </>
  );
}

export default App;
