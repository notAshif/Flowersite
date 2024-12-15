
import { useState } from 'react'

import './App.css'
import Navbar from "./component/Navbar"
import Showcase from './component/Showcase'
import Catalog from "./component/Catalog"
import Shop from './component/Shop'
import Delivery from './component/Delivery'
import Login from "./component/login"
import Footer from './component/Footer'

export default function App() {
  return (
    <>
      <Navbar/>
      <Showcase/>
      <Catalog />
      <Shop/>
      <Delivery/>
      <Login/>
      <Footer/>
    </>
  )
}
