import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Home from "./Layout/Home.jsx";
import Order from "./Order/Order.jsx";
import Inventory from "./Inventory/Inventory.jsx";
import Login from "./components/Header/Loging/Login.jsx";
import cartProductsLoader from "./loaders/cartProductsLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/order",
        element: <Order />,
        loader: cartProductsLoader
      },
      {
        path:"/inventory",
        element: <Inventory/>
      },
      {
        path: '/login',
        element: <Login/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
