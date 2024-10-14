import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import { NotFound } from "./components/404";

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contacts" element={<Contacts/>}/>
    <Route path="/Posts" element={<Posts/>}/>
    </Routes>
    {/* <Posts/> */}
    </>
  );
}

export default App;
