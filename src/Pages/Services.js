import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroServices from '../Components/HeroServices/HeroServices'
import Help from '../Components/Help/Help'
import Transform from '../Components/Transform/Transform'
import Know from '../Components/Know/Know'
import Question from '../Components/Question/Question'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

function Services() {
  return (
    <>
    <Navbar/>
    <HeroServices/>
    <Help/>
    <Transform/>
    <Know/>
    <Question/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default Services