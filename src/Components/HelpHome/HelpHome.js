import React from 'react'
import styles from './HelpHome.module.css'
import line from './Vector (1).png'
import img1 from './Frame (2).png'
import img2 from './Frame.png'
import img3 from './Frame (1).png'

function HelpHome() {
    return (
        <>
            <section className={styles.sec}>
                <div className="container">
                    <div className={'row '}>
                        <div className={'col-lg-6'}>
                            <h1 className={styles.h1}>I can help you in these particular areas.</h1>
                            <img className={styles.line} src={line} alt="" />
                        </div>
                        <div className={'col-lg-6'}>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                                <br /> <br />
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                        </div>
                    </div>
                    <div className={"row "+styles.row}>
                        <div className={'col-lg-4'}>
                            <img className={styles.img} src={img1} alt="" />
                            <h3 className={styles.h3}>1:1 Coaching</h3>
                            <p className={styles.p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                        <div className={'col-lg-4'}>
                            <img className={styles.img} src={img2} alt="" />
                            <h3 className={styles.h3}>Consultation</h3>
                            <p className={styles.p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                        <div className={'col-lg-4'}>
                            <img className={styles.img} src={img3} alt="" />
                            <h3 className={styles.h3}>Group Coaching Sessions</h3>
                            <p className={styles.p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default HelpHome