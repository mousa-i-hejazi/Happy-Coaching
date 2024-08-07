import React from 'react'
import styles from './Navbar.module.css'
import logo from './Group 6.png'

function Navbar() {
  return (
    <>
      <nav id='nav' class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#"> <img src={logo} alt="" /> </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class={"nav-link " +styles.li} href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class={"nav-link " +styles.li} href="/services">Services</a>
              </li>
              <li class="nav-item">
                <a class={"nav-link " +styles.li} href="/about">About us</a>
              </li>
              <li class="nav-item">
                <a class={"nav-link " +styles.li} href="extra">Extra Salespage</a>
              </li>
              <a href="/free" className={'btn '+styles.button}>Get your free guide now</a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar