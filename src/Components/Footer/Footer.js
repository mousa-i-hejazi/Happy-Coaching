import React from 'react'
import styles from './Footer.module.css'
import logo from './Group 6 (1).png'
import line from './Divider.png'
import made from './Made by.png'
import icons from './Social icons.png'

function Footer() {
    return (
        <>
            <section className={styles.sec}>
                <div className="container">
                    <div className={'row '+styles.row}>
                        <div className="col-lg-4">
                            <img className={styles.logo} src={logo} alt="" />
                            <p className={styles.p1}>Design amazing digital experiences that create more happy in the world.</p>
                        </div>
                        <div className="col-lg-4">
                            <h5 className={styles.h5}>Pages</h5>
                            <p className={styles.p}>Home</p>
                            <p className={styles.p}>Services</p>
                            <p className={styles.p}>About us</p>
                            <p className={styles.p}>Extra Sales/Landingpage</p>
                            <p className={styles.p}>Free guide</p>
                        </div>
                        <div className="col-lg-2">
                            <h5 className={styles.h5}>Contact</h5>
                            <p className={styles.p}>+123 456 789</p>
                            <p className={styles.p}>hello@happydigital.nl</p>
                            <p className={styles.p}>Instagram</p>
                            <p className={styles.p}>LinkedIn</p>
                        </div>
                    </div>
                    <img className={styles.line} src={line} alt="" />
                    <div className='d-flex justify-content-between'>
                        <a className={styles.made} href="#nav"><img className={styles.madeimg} src={made} alt="" /></a>
                        <img className={styles.icons} src={icons} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer