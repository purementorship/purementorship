import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "@/routes/AboutUs";
import Team from "@/routes/Team";
import Program from "@/routes/Program";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/AboutUs",
      element: <AboutUs />,
    },
    {
      path: "/Team",
      element: <Team />,
    },
    {
      path: "/Blog",
      element: <AboutUs />,
    },
    {
      path: "/Join",
      element: <AboutUs />,
    },
    {
      path: "/Program",
      element: <Program />,
    },
  ],
  { basename: "/purementorship/" },
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
