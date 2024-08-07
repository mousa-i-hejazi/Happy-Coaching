import React from 'react'
import styles from './TransformAbout.module.css'
import img1 from './Featured icon (6).png'
import img2 from './Featured icon (7).png'
import img3 from './Featured icon (8).png'
import img4 from './Featured icon (9).png'
import img5 from './Featured icon (10).png'
import img6 from './Featured icon (11).png'

function TransformAbout() {
    return (
        <section className={styles.sec}>
            <div className='container'>
                <div className='d-flex flex-column text-center'>
                    <p className={styles.p}>How does it work?</p>
                    <h1 className={styles.h1}>Are you ready to transform your life?</h1>
                    <p className={styles.p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                    </p>
                    <div className={'row ' + styles.row}>
                        <div className={"col-lg-4 " + styles.card}>
                            <img className={styles.img} src={img1} alt="" />
                            <h3 className={styles.h3}>Ready to start? Let’s talk!</h3>
                            <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className={"col-lg-4 " + styles.card}>
                            <img className={styles.img} src={img2} alt="" />
                            <h3 className={styles.h3}>Ready to start? Let’s talk!</h3>
                            <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className={"col-lg-4 " + styles.card}>
                            <img className={styles.img} src={img3} alt="" />
                            <h3 className={styles.h3}>Ready to start? Let’s talk!</h3>
                            <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className={"col-lg-4 " + styles.card}>
                            <img className={styles.img} src={img4} alt="" />
                            <h3 className={styles.h3}>Ready to start? Let’s talk!</h3>
                            <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className={"col-lg-4 " + styles.card}>
                            <img className={styles.img} src={img5} alt="" />
                            <h3 className={styles.h3}>Ready to start? Let’s talk!</h3>
                            <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className={"col-lg-4 " + styles.card}>
                            <img className={styles.img} src={img6} alt="" />
                            <h3 className={styles.h3}>Ready to start? Let’s talk!</h3>
                            <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TransformAbout