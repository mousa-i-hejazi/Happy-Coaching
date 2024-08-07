import React from 'react'
import styles from './Know.module.css'
import plus from './Icon.png'
import minus from './Icon wrap.png'
import line from './Divider (1).png'

function Know() {
    return (
        <section className={styles.sec}>
            <div className='container'>
                <div className='d-flex flex-column  '>
                    <h1 className={'text-center ' + styles.h1}>Good to know.</h1>
                    <p className={'text-center ' + styles.p}>Everything you need to know about the my services.</p>
                    <div className={'d-flex justify-content-between ' + styles.card}>
                        <div className={styles.text}>
                            <h3 className={styles.h3}>How long does the coaching process take?</h3>
                            <p className={styles.pcard}>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                        </div>
                        <img className={styles.iconcard} src={minus} alt="" />
                    </div>
                    <img className={styles.line} src={line} alt="" />
                    <div className={'d-flex justify-content-between ' + styles.card}>
                        <h3 className={styles.h3}>What if I wanted to end my coaching engagement?</h3>
                        <img className={styles.icon} src={plus} alt="" />
                    </div>
                    <img className={styles.line} src={line} alt="" />
                    <div className={'d-flex justify-content-between ' + styles.card}>
                        <h3 className={styles.h3}>Can I change through coaching?</h3>
                        <img className={styles.icon} src={plus} alt="" />
                    </div>
                    <img className={styles.line} src={line} alt="" />
                    <div className={'d-flex justify-content-between ' + styles.card}>
                        <h3 className={styles.h3}>How often do we meet?</h3>
                        <img className={styles.icon} src={plus} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Know