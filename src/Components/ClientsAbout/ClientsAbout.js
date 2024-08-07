import React from 'react'
import styles from './ClientsAbout.module.css'
import img1 from './image 68 (3).png'
import img2 from './image 68 (4).png'
import img3 from './image 68 (5).png'

function ClientsAbout() {
    return (
        <section className={styles.sec}>
            <div className='container'>
                <h1 className={styles.h1}>Hear out what my <br /> clients say about me.</h1>
                <div className={'row ' + styles.row}>
                    <div className={'col-lg-4 shadow ' + styles.card}>
                        <h5 className={styles.h51}>5/5</h5>
                        <p className={styles.p}>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                        <h3 className={styles.h3}>Jane</h3>
                        <img className={styles.img} src={img1} alt="" />
                    </div>
                    <div className={'col-lg-4 shadow ' + styles.card}>
                    <h5 className={styles.h5}>5/5</h5>
                        <p className={styles.p}>“Denise helped me organise my diet. Highly recommend her services!”</p>
                        <h3 className={styles.h3}>Catherine</h3>
                        <img className={styles.img} src={img2} alt="" />
                    </div>
                    <div className={'col-lg-4 shadow ' + styles.card}>
                    <h5 className={styles.h5}>5/5</h5>
                        <p className={styles.p}>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                        <h3 className={styles.h3}>Jane</h3>
                        <img className={styles.img} src={img3} alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ClientsAbout