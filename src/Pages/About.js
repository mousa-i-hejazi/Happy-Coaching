import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroAbout from '../Components/HeroAbout/HeroAbout'
import Companies from '../Components/Companies/Companies'
import ClientsAbout from '../Components/ClientsAbout/ClientsAbout'
import TransformAbout from '../Components/TransformAbout/TransformAbout'
import Know from '../Components/Know/Know'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

function About() {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <Companies />
      <ClientsAbout />
      <TransformAbout />
      <Know />
      <Contact />
      <Footer />
    </>

  )
}

export default About