import { useState } from 'react'
import './App.css'
import { NavbarDefault } from './components/NavbarDefault'
import Home from './pages/Home'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='bg-gradient-to-r from-[#1d1e22] to-[#393f4d] h-screen'>
      <NavbarDefault/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
