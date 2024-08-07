import React from 'react'
import styles from './Question.module.css'

function Question() {
  return (
    <section className={styles.sec}>
        <div className='container'>
            <div className={'d-flex flex-column text-center '+styles.content}>
                <h3 className={styles.h3}>Still have questions?</h3>
                <p className={styles.p}>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <a className={'btn '+styles.button} href="">Get in touch</a>
            </div>
        </div>
    </section>
  )
}

export default Question