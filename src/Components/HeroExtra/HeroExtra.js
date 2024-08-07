import React from 'react'
import styles from './HeroExtra.module.css'
import img from './pexels-andrea-piacquadio-3978564 1 (3).png'
import line from './Vector (3).png'

function HeroExtra() {
  return (
    <section className={styles.sec}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className={styles.text}>
                            <p className={styles.p}>Proven strategies backed by science for success.</p>
                            <h1 className={styles.h1}>
                            Self Esteem  <br /> Therapy
                            </h1>
                            <p className={styles.p2}>I help people to discover their true potential and live a fulfilling life...
                                Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
                            <a href="" className={'btn '+styles.button }>Claim your spot</a>
                            <img className={styles.line} src={line} alt="" />
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

export default HeroExtra