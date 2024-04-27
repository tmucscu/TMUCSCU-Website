import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./routes/about.tsx";
import Contact from "./routes/contact.tsx";
import ErrorPage from "./errorPage.tsx";
import Events from "./routes/events/events.tsx";
import Home from "./routes/home.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import Team from "./routes/team/team.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/about", element: <About /> },
  { path: "/events", element: <Events /> },
  { path: "/team", element: <Team /> },
  { path: "/contact", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
