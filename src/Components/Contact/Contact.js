import React from 'react'
import styles from './Contact.module.css'

function Contact() {
  return (
    <>
        <section className={styles.sec}>
            <div className='container'>
                <div className={'row '+styles.row}>
                    <div className={'col-lg-6 '+styles.text}>
                        <h1 className={styles.h1}>Get notified when I publish new articles</h1>
                        <p className={styles.p}>Stay up to date with the latest news, announcements, and articles.</p>
                    </div>
                    <div className={'col-lg-6 '+styles.input}>
                        <input className={styles.inp} type="text" placeholder='Enter your email' />
                        <a href="" className={'btn '+styles.button}>Subscribe</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact