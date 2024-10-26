import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import RegisterForm from "./components/RegisterForm";
import UsersList from "./components/UsersList";
import { NavigationBar } from "./components/NavigationBar";
import { Feedback } from "./components/Feedback";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/navigationBar" element={<NavigationBar />}>
          <Route path="registerForm" element={<RegisterForm />}>
          <Route path="userslist" element={<UsersList />} />
          </Route>
          <Route path="feedback" element={<Feedback/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
