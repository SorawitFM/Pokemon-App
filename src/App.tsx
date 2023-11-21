import { useState } from 'react'
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";

import HomePage from '@/pages/home';
import DetailPage from '@/pages/detail';
import './App.css'




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
  ]);

  return (

    <div className="bg-[url('/images/list_bg.jpg')] min-h-[100vh]">
      <RouterProvider router={router} />
    </div>


  )
}

export default App
