import React from 'react'
import styles from './HeroFree.module.css'
import img from './Frame (3).png'
import ellipse from './photo_2023-10-01_20-35-47.png'

function HeroFree() {
    return (
        <section className={styles.sec}>
            <div className="container">
                <div className={'row ' + styles.row}>
                    <div className={'col-lg-6 ' + styles.text}>
                        <h1 className={styles.h1}>Results that speak for themselves</h1>
                        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                        </p>
                        <input className={styles.input} type="text" placeholder='Name'/>
                        <br />
                        <input className={styles.input} type="text" placeholder='Enter your email'/>
                        <p className={styles.p2}>We care about your data in our <ins>privacy policy</ins></p>
                        <a href="" className={'btn '+styles.button}>Get free guide</a>
                    </div>
                    <div className={'col-lg-6 ' + styles.image}>
                        <img className={styles.img} src={img} alt="" />
                        <img className={styles.ellipse} src={ellipse} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroFree