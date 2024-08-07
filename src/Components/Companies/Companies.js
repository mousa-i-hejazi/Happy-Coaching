import React from 'react'
import styles from './Companies.module.css'
import img1 from './Company logo.png'
import img2 from './Company logo (1).png'
import img3 from './Company logo (2).png'
import img4 from './Company logo (3).png'
import img5 from './Company logo (4).png'

function Companies() {
  return (
    <section className={styles.sec}>
        <div className='container text-center'>
            <p className={styles.p}>From startups to the world’s largest companies</p>
            <div className='d-flex'>
                <img className={styles.img} src={img1} alt="" />
                <img className={styles.img} src={img2} alt="" />
                <img className={styles.img} src={img3} alt="" />
                <img className={styles.img} src={img4} alt="" />
                <img className={styles.img} src={img5} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Companies