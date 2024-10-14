import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthenticationProvider } from './contextComponents/AuthenticationContext.jsx';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthenticationProvider>
    <App/>
    </AuthenticationProvider>
    </BrowserRouter>
  </StrictMode>,
)
