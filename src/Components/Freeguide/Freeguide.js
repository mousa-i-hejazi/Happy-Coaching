import React from 'react'
import styles from './Freeguide.module.css'
import img from './Frame (3).png'
import ellipse from './photo_2023-10-01_20-35-47.png'


function Freeguide() {
    return (
        <section className={styles.sec}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className={styles.text}>

                            <h1 className={styles.h1}>
                                Don’t miss out on my ‘Live life at the full potential’ free guide
                            </h1>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                                <br /><br />
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            <a href="" className={'btn ' + styles.button}>Get your free guide now</a>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className={styles.image}>
                            <img className={styles.img} src={img} alt="" />
                            <img className={styles.ellipse} src={ellipse} alt="" />
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Freeguide