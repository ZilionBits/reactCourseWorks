import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./styles/bg-custom-main.css";
import GlobalDataProvider from "./contextGlobal/GlobalData.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalDataProvider>
        <App />
      </GlobalDataProvider>
    </BrowserRouter>
  </StrictMode>
);
