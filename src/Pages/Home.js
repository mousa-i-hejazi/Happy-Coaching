import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroHome from '../Components/HeroHome/HeroHome'
import HelpHome from '../Components/HelpHome/HelpHome'
import Clients from '../Components/Clients/Clients'
import Blog from '../Components/Blog/Blog'
import Freeguide from '../Components/Freeguide/Freeguide'
import Meet from '../Components/Meet/Meet'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'


function Home() {
  return (
        <>
        <Navbar/>
        <HeroHome/>
        <HelpHome/>
        <Clients/>
        <Blog/>
        <Freeguide/>
        <Meet/>
        <Contact/>
        <Footer/>
        </>
  )
}

export default Home