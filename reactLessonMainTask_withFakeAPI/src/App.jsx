import { ProductList } from "./reactComponents/ProductList";
import { NavigationBar } from "./reactComponents/NavigationBar";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./reactComponents/Homepage";
import { Contacts } from "./reactComponents/Contacts";
import { NotFound } from "./reactComponents/NotFound";
import { Profile } from "./reactComponents/Profile";
import { ProductDetails } from "./reactComponents/ProductDetails";
import { AddProductForm } from "./reactComponents/AddProductForm";
import { Login } from "./contextComponents/Login";
import Authentication from "./contextComponents/Authentication";
import { Authorization } from "./contextComponents/Authorization";
import PERMISSIONS from "./contextComponents/permissions";
import Register from "./reactComponents/Register";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          element={
            <Authorization permissions={[PERMISSIONS.CAN_VIEW_PRODUCTS]} />
          }
        >
          <Route path="/Product" element={<ProductList />} />
          <Route path="/Product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/Contacts" element={<Contacts />} />
        <Route
          path="/Profile"
          element={
            <Authentication>
              <Profile />
            </Authentication>
          }
        />
        <Route
          element={
            <Authorization permissions={[PERMISSIONS.CAN_UPDATE_PRODUCTS]} />
          }
        >
          <Route path="/addProduct" element={<AddProductForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
