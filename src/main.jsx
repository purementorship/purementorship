import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "@/routes/AboutUs";
import Team from "@/routes/Team";
import Program from "@/routes/Program";
import JoinUs from "@/routes/JoinUs";

const router = createBrowserRouter([
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
    path: "/Program",
    element: <Program />,
  },
  {
    path: "/JoinUs",
    element: <JoinUs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
