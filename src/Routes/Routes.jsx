import React from "react";
import { createBrowserRouter, Routes } from "react-router";
import MainLayouts from "../layout/MainLayouts";
import Home from "../Pages/Home";

import MyProfile from "../Pages/MyProfile";

import AllServices from "../Pages/AllServices";
import ServiceDetails from "../Pages/ServiceDetails";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

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
        path: "/details/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
