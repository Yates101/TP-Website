import React, { useState } from 'react'
import AboutSection from '../components/AboutSection'
import { homeObjOne } from '../components/AboutSection/Data'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <AboutSection {...homeObjOne}/>
    </div>
  )
}

export default Home
