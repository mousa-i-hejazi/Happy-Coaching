import React from 'react'
import styles from './Guarantee.module.css'
import img from './Frame (4).png'

function Guarantee() {
    return (
        <section className={styles.sec}>
            <div className='container text-center'>
                <img className={styles.img} src={img} alt="" />
                <h1 className={styles.h1}>Guarantee</h1>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                </p>
            </div>
        </section>
    )
}

export default Guarantee