import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home.jsx';
import PollApp from './Pages/PollApp.jsx';
import { Result } from 'postcss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/poll",
    element: <PollApp />,
  },
  {
    path: "/pollsummary",
    element: <Result />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />

  </StrictMode>,
)
