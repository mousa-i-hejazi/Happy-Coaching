import React from 'react'
import styles from './TransformFree.module.css'
import img1 from './Featured icon (4).png'
import img2 from './Featured icon (5).png'
import img from './Video player.png'

function TransformFree() {
    return (
        <section className={styles.sec}>
            <div className='container'>
                <div className='d-flex flex-column'>


                    <div className={'row ' + styles.row}>
                        <div className={'col-lg-6 ' + styles.content}>
                            <p className={styles.p1}>How does it work?</p>
                            <h1 className={styles.h1}>Are you ready to <br /> transform your life?</h1>
                            <p className={styles.p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                        <div className={'col-lg-6 ' + styles.text}>
                            <div className={'d-flex ' + styles.card}>
                                <img className={styles.imgcard} src={img1} alt="" />
                                <div className={styles.cardtext}>
                                    <h3 className={styles.h3}>Online consultation</h3>
                                    <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                            <div className={'d-flex ' + styles.card}>
                                <img className={styles.imgcard} src={img2} alt="" />
                                <div className={styles.cardtext}>
                                    <h3 className={styles.h3}>Ready to start? Let’s talk!</h3>
                                    <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        <img className={styles.img} src={img} alt="" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default TransformFree