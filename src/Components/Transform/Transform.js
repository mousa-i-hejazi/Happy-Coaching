import React from 'react'
import styles from './Transform.module.css'
import img from './Image.png'
import img1 from './Featured icon.png'
import img2 from './Featured icon (1).png'
import img3 from './Featured icon (2).png'
import img4 from './Featured icon (3).png'

function Transform() {
    return (
        <section className={styles.sec}>
            <div className='container'>
                <div className='d-flex flex-column'>
                    <p className={styles.p1}>How does it work?</p>
                    <h1 className={styles.h1}>Are you ready to <br /> transform your life?</h1>
                    <p className={styles.p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                    </p>
                    <div className={'row ' + styles.row}>
                        <div className={'col-lg-6 ' + styles.text}>
                            <div className={'d-flex ' + styles.card}>
                                <img className={styles.imgcard} src={img1} alt="" />
                                <div className={styles.cardtext}>
                                    <h3 className={styles.h3}>Talk to me first</h3>
                                    <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                            <div className={'d-flex ' + styles.card}>
                                <img className={styles.imgcard} src={img2} alt="" />
                                <div className={styles.cardtext}>
                                    <h3 className={styles.h3}>Schedule a meeting</h3>
                                    <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                            <div className={'d-flex ' + styles.card}>
                                <img className={styles.imgcard} src={img3} alt="" />
                                <div className={styles.cardtext}>
                                    <h3 className={styles.h3}>Online consultation</h3>
                                    <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                            <div className={'d-flex ' + styles.card}>
                                <img className={styles.imgcard} src={img4} alt="" />
                                <div className={styles.cardtext}>
                                    <h3 className={styles.h3}>Ready to start? Let’s talk!</h3>
                                    <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        <div className={'col-lg-6 ' + styles.image}>
                            <img className={styles.img} src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Transform