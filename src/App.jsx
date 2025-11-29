import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Nav1 from './Components/Nav1'
import Comp1 from './Components/Comp1'
import HowItWorks from './Components/HowItWorks'
import Footer from './Components/Footer'



function App() {
  
  return (
    <>
      <Nav></Nav>

      <Nav1></Nav1>

      <Comp1></Comp1>

      <HowItWorks></HowItWorks>

      <Footer></Footer>
      
    </>
  )
}

export default App
