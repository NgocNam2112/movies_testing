import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import Detail from "../pages/Details/Detail";
import Root from "../Layouts/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "?page=:pageId",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "details/:movieId",
        element: <Detail />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default routers;
