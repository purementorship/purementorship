import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "@/routes/AboutUs";
import Team from "@/routes/Team";
import Program from "@/routes/Program";
import JoinUs from "@/routes/JoinUs";
import Blog from "@/routes/Blog";
import BlogAll from "@/routes/BlogAll";
import BlogAllExpand from "./routes/BlogAllExpand.jsx";

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
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/BlogAll",
    element: <BlogAll />,
  },
  {
    path: "/BlogAllExpand",
    element: <BlogAllExpand />,
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
