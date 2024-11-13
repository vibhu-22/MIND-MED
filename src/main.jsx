import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Mainpage from './Pages/MainPage/Mainpage';
import './index.css';
import Home from "./Pages/MainPage/Components/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
