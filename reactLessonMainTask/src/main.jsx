import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthenticationProvider } from './contextComponents/AuthenticationContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthenticationProvider>
    <App />
    </AuthenticationProvider>
  </StrictMode>,
)
