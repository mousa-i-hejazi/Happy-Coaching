import React from 'react'
import styles from './ForYou.module.css'
import truee from './Check icon.png'
import falsee from './Icon (1).png'

function ForYou() {
    return (
        <section className={styles.sec}>
            <div className='container'>
                <div className={'d-flex flex-column align-items-center'}>
                    <p className={'text-center '+styles.p}>This is not for everyone!</p>
                    <h1 className={'text-center '+styles.h1}>This program is <br /> perfect for you if...</h1>
                    <div className={'row ' + styles.row}>
                        <div className={'col-lg-5 ' + styles.false}>
                            <h3 className={'text-center ' + styles.h3}>This is <ins>NOT</ins> for you if...</h3>
                            <div className='d-flex'>
                                <img className={styles.img} src={falsee} alt="" />
                                <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className='d-flex'>
                                <img className={styles.img} src={falsee} alt="" />
                                <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className='d-flex'>
                                <img className={styles.img} src={falsee} alt="" />
                                <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className='d-flex'>
                                <img className={styles.img} src={falsee} alt="" />
                                <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                        <div className={'col-lg-5 ' + styles.true}>
                            <h3 className={'text-center ' + styles.h3}>This is for you if...</h3>
                            <div className='d-flex'>
                                <img className={styles.img} src={truee} alt="" />
                                <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className='d-flex'>
                                <img className={styles.img} src={truee} alt="" />
                                <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className='d-flex'>
                                <img className={styles.img} src={truee} alt="" />
                                <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className='d-flex'>
                                <img className={styles.img} src={truee} alt="" />
                                <p className={styles.pcard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForYou