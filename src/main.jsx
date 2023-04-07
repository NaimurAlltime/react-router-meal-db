import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Products from "./Components/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "products",
        element: <Products></Products>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish"),
      },
      {
        path: "product/:productId",
        element: <ProductDetail></ProductDetail>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productId}`
          ),
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
