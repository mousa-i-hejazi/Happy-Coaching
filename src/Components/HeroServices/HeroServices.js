import React from 'react'
import styles from './HeroServices.module.css'
import img from './pexels-andrea-piacquadio-3978564 1 (1).png'

function HeroServices() {
    return (
        <section className={styles.sec}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className={styles.text}>
                            <p className={styles.p}>I can help you in these patricular areas.</p>
                            <h1 className={styles.h1}>
                                I help people to discover their true potential
                            </h1>
                            <p className={styles.p2}>I help people to discover their true potential and live a fulfilling life...
                                Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className={styles.image}>
                            <img className={styles.img} src={img} alt="" />
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default HeroServices