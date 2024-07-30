import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './RouteOrLayout'
import Home from './components/Home/Home'
import About from './components/About/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [

      {
        path: "",
        element: <Home />
      },

      {
        path: " about",
        element: <About />
      }

    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router = {router} /> 
  </React.StrictMode>,
)

// reactprovider takes a prop named router. we will make router using 
//   createbrowserouter (it is a method) which takes an array of objects. children will also be an array of 
// objects