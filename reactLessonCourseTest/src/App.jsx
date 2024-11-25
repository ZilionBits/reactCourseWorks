import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { BooksList } from "./pages/BooksList";
import "./styles/bg-custom-main.css";
import NavigationBar from "./pages/NavigationBar";
import AddNewBookForm from "./pages/AddNewBookForm";
import UpdateBookForm from "./pages/UpdateBookForm";

function App() {
  return (
    <div className="bg-custom-main">
      <NavigationBar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/booksList" element={<BooksList/>}/>
      <Route path="/addNewBookForm" element={<AddNewBookForm/>}/>
      <Route path="/updateBookForm" element={<UpdateBookForm/>}/>
    </Routes>
    </div>
  );
}

export default App;
