import React from 'react'
import styles from './Testimonials.module.css'
import img from './Avatar.png'
import stars from './Stars (2).png'

function Testimonials() {
    return (
        <section className={styles.sec}>
            <div className='container'>
                <div className={'d-flex flex-column'}>
                    <div className={'d-flex justify-content-between'}>
                        <div>
                            <p className={styles.p}>Testimonials</p>
                            <h1 className={styles.h1}>Results that speak for themselves</h1>
                        </div>
                        <a href="" className={'btn ' + styles.button}>Get started</a>
                    </div>
                    <div className={'row ' +styles.row}>
                        <div className={'col-lg-5 text-center ' + styles.card}>
                            <p className={styles.p1}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</b> sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <img className={styles.img} src={img} alt="" />
                            <h3 className={styles.h3}>Naam</h3>
                            <p className={styles.p2}>Bedrijf</p>
                            <img className={styles.star} src={stars} alt="" />
                        </div>
                        <div className={'col-lg-5 text-center ' + styles.card}>
                            <p className={styles.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <img className={styles.img} src={img} alt="" />
                            <h3 className={styles.h3}>Naam</h3>
                            <p className={styles.p2}>Bedrijf</p>
                            <img className={styles.star} src={stars} alt="" />
                        </div>
                        <div className={'col-lg-5 text-center ' + styles.card}>
                            <p className={styles.p1}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </b> sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <img className={styles.img} src={img} alt="" />
                            <h3 className={styles.h3}>Naam</h3>
                            <p className={styles.p2}>Bedrijf</p>
                            <img className={styles.star} src={stars} alt="" />
                        </div>
                        <div className={'col-lg-5 text-center ' + styles.card}>
                            <p className={styles.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <img className={styles.img} src={img} alt="" />
                            <h3 className={styles.h3}>Naam</h3>
                            <p className={styles.p2}>Bedrijf</p>
                            <img className={styles.star} src={stars} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials