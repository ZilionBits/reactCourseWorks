import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";

function App() {
  return (
    <div className="bg-custom-main">
    <Routes>
      <Route path="/" element={<Homepage/>}>

      </Route>
    </Routes>
    </div>
  );
}

export default App;
