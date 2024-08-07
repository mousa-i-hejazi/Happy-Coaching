import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroFree from '../Components/HeroFree/HeroFree'
import Testimonials from '../Components/Testimonials/Testimonials'
import TransformFree from '../Components/TransformFree/TransformFree'
import Potential from '../Components/Potential/Potential'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

function Free() {
  return (
    <>
    <Navbar/>
    <HeroFree/>
    <Testimonials/>
    <TransformFree/>
    <Potential/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Free