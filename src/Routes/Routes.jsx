import React from "react";
import { createBrowserRouter, Routes } from "react-router";
import MainLayouts from "../layout/MainLayouts";
import Home from "../Pages/Home";

import MyProfile from "../Pages/MyProfile";

import AllServices from "../Pages/AllServices";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    // errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading.........</p>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allservices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);
