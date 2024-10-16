import { ProductList } from "./reactComponents/ProductList";
import { NavigationBar } from "./reactComponents/NavigationBar";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./reactComponents/Homepage";
import { Contacts } from "./reactComponents/Contacts";
import { NotFound } from "./reactComponents/NotFound";
import { Profile } from "./reactComponents/Profile";
import { ProductDetails } from "./reactComponents/ProductDetails";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Product" element={<ProductList/>} />
        <Route path="/Product/:id" element={<ProductDetails />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
