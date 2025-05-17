import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx';
import { setLocalStorage } from './utils/localStorage.jsx';

const script = document.createElement('script');
script.src = "https://kit.fontawesome.com/3c7461a8b4.js";
script.crossOrigin = "anonymous";
document.head.appendChild(script);


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <AuthProvider>
    <App />
  </AuthProvider>

  </StrictMode>,
)
