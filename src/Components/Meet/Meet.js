import React from 'react'
import styles from './Meet.module.css'
import img from './3_2 screen mockup.png'

function Meet() {
  return (
    <>
    <section className={styles.sec}>
        <div className='container'>
            <div className={'row '+styles.row}>
                <div className={'col-lg-6 '+styles.text }>
                        <h1 className={styles.h1}>Get 15-Minutes Complimentary online session.</h1>
                        <p className={styles.p}>Limited Period Offer. Claim Now.</p>
                        <a href="" className={'btn '+styles.button}>Book now</a>
                </div>
                <div className={'col-lg-6 '+styles.image }>
                    <img className={styles.img} src={img} alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Meet