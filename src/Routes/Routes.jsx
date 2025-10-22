import React from 'react';
import { createBrowserRouter, Routes } from 'react-router';
import MainLayouts from '../layout/MainLayouts';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import MyProfile from '../Pages/MyProfile';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    // errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading.........</p>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'/services',
            element:<Services></Services>
        },
        {
            path:'/my-profile',
            element:<MyProfile></MyProfile>
        },
    ]
    
  },
]);