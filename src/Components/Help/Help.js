import React from 'react'
import styles from './Help.module.css'
import img1 from './Frame (1).png'
import img2 from './Frame (2).png'
import img3 from './Frame.png'

function Help() {
    return (
        <section className={styles.sec}>
            <div className='container'>
                <div className={'d-flex flex-column '}>
                    <h1 className={'text-center '+styles.h1}>I can help you in these <br /> particular areas.</h1>
                    <div className={'row ' + styles.row}>
                        <div className={'col-lg-5 '+styles.card}>
                            <img className={styles.img} src={img1} alt="" />
                            <h3 className={styles.h32}>Group Coaching Sessions</h3>
                            <p className={styles.p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                        <div className={'col-lg-5 '+styles.card2}>
                            <img className={styles.img} src={img2} alt="" />
                            <h3 className={styles.h3}>Online course</h3>
                            <p className={styles.p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                        <div className={'col-lg-5 '+styles.card}>
                            <img className={styles.img} src={img3} alt="" />
                            <h3 className={styles.h3}>Consultation</h3>
                            <p className={styles.p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                        <div className={'col-lg-5 '+styles.card4}>
                            <img className={styles.img} src={img2} alt="" />
                            <h3 className={styles.h3}>1:1 Coaching</h3>
                            <p className={styles.p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Help