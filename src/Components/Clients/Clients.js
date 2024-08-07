import React from 'react'
import styles from './Clients.module.css'
import img1 from './image 68.png'
import img2 from './image 68 (1).png'
import img3 from './image 68 (2).png'
import stars1 from './Stars.png'
import stars2 from './Stars (1).png'
import hand from './pointinghand.png'


function Clients() {
    return (
        <>
            <section className={styles.sec}>
                <div className='container'>
                    <h1 className={styles.h1}>Hear out what my <br /> clients say about me.</h1>
                    <div className={'row ' + styles.row}>
                        <div className={'col-lg-4 shadow ' + styles.card}>
                            <p className={styles.p}>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                            <h3 className={styles.h3}>Jane</h3>
                            <img className={styles.img} src={img1} alt="" />
                            <br />
                            <img className={styles.stars} src={stars1} alt="" />
                            <br />
                            <img className={styles.hand} src={hand} alt="" />
                        </div>
                        <div className={'col-lg-4 shadow ' + styles.card}>
                            <p className={styles.p}>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                            <h3 className={styles.h3}>Catherine</h3>
                            <img className={styles.img} src={img2} alt="" />
                            <br />
                            <img className={styles.stars} src={stars2} alt="" />
                        </div>
                        <div className={'col-lg-4 shadow ' + styles.card}>
                            <p className={styles.p}>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                            <h3 className={styles.h3}>Jane</h3>
                            <img className={styles.img} src={img3} alt="" />
                            <br />
                            <img className={styles.stars} src={stars2} alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Clients