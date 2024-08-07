import React from 'react'
import styles from './Blog.module.css'
import img1 from './Squared(2).png'
import img2 from './Squared(1).png'
import img3 from './Squared.png'

function Blog() {
    return (
        <>
            <section className={styles.sec}>
                <div className='container'>
                    <div className={'d-flex flex-column text-center'}>
                        <h1 className={styles.h1}>Stay Motivated, read the <br /> weekly blog articles.</h1>
                        <div className={'row ' + styles.row}>
                            <div className={'col-lg-4 ' + styles.card}>
                                <img className={'card-img '+styles.img} src={img1} alt="" />
                                <h3 className={styles.h3}>Balancing your love and work life.</h3>
                                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                                </p>
                            </div>
                            <div className={'col-lg-4 ' + styles.card}>
                                <img className={'card-img '+styles.img} src={img2} alt="" />
                                <h3 className={styles.h3}>A short break from Social Media is important.</h3>
                                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                                </p>
                            </div>
                            <div className={'col-lg-4 ' + styles.card}>
                                <img className={'card-img '+styles.img} src={img3} alt="" />
                                <h3 className={styles.h3}>How to be 1% Better Every Day</h3>
                                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                                </p>
                            </div>
                        </div>
                        <a href="" className={'btn '+styles.button}>Read more blogs</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog