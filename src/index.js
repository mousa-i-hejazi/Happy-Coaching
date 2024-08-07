import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Extra from './Pages/Extra';
import About from './Pages/About';
import Free from './Pages/Free';
import Services from './Pages/Services';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/free",
    element: <Free />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/extra",
    element: <Extra />,
    errorElement: <h1>Error</h1>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
