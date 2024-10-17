import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchFormCarProvider } from './components/SearchFormCarProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchFormCarProvider>
    <App />
    </SearchFormCarProvider>
  </StrictMode>,
)
