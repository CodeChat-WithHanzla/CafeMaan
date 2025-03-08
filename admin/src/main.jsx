import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "./context/AdminContext";
import 'remixicon/fonts/remixicon.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
        <App />
    </AdminContextProvider>
  </BrowserRouter>,
);