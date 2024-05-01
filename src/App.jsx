import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import React, { useState } from "react";
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
   const routes = createBrowserRouter(
       [
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/about",
            element:<About/>
          },
          {
            path:"/faq",
            element:<Faq/>
          },
          {
            path:"/works",
            element:<Works/>
          },
          {
            path:"/contact",
            element:<Contact/>
          },


       ]
   )
 
  return (

    <RouterProvider router={routes}/>

  );
}

export default App;
