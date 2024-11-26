import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { BooksList } from "./pages/BooksList";
import "./styles/bg-custom-main.css";
import 'semantic-ui-css/semantic.min.css'
import NavigationBar from "./pages/NavigationBar";
import AddNewBookForm from "./pages/AddNewBookForm";
import UpdateBookForm from "./pages/UpdateBookForm";
import Login from "./authenticate/Login";
import { AuthProvider } from "./contextGlobal/AuthContext";

function App() {
  return (
    <AuthProvider>
    <div className="bg-custom-main">
      <NavigationBar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/booksList" element={<BooksList/>}/>
      <Route path="/addNewBookForm" element={<AddNewBookForm/>}/>
      <Route path="/updateBookForm" element={<UpdateBookForm/>}/>
    </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
