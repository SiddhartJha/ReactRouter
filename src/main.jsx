import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './RouteOrLayout'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import User from './components/User/User'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [

//       {
//         path: "",
//         element: <Home />
//       },

//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contactus",
//         element: <ContactUs />
//       }

//     ]

//   }
// ])
 
// OR WE CAN DO ROUTING IN OTHER WAY AS:

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="user/:userid" element={<User />} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router = {router} /> 
  </React.StrictMode>,
)

{/* // reactprovider takes a prop named router. we will make router using 
//   createbrowserouter (it is a method) which takes an array of objects. children will also be an array of 
// objects */}  