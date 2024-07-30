import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout

// this outlet works or helps in dynamically passing the components means it will consider this layout function 
// as a base and will keep it unchanged. jahan bhi hmne outlet likh diya wahan cheezein change ho sakti hain 
// baaki sab unchanged rhega. in this case header and footer will be unchanged and the in between things will be 
// changed where outlet is written. hamein main file mein sab kuch batana pdega ki we are using a Layout function
// aur uske ander de rha hun sab kuch