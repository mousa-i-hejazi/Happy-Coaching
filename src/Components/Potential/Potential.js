import React from 'react'
import styles from './Potential.module.css'
import stars from './Stars (3).png'

function Potential() {
    return (
        <section className={styles.sec}>
            <div className='container text-center'>
                <h1 className={styles.h1}>Don’t miss out on my <span className={styles.span}>‘Live life at <br /> the full potential’</span> free guide</h1>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                <a href="" className={'btn '+styles.button}>Download my free guide</a>
                <p className={styles.p2}>More than 100+ 5 star reviews</p>
                <img className={styles.stars} src={stars} alt="" />
            </div>
        </section>
    )
}

export default Potential