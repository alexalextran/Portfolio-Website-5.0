import React from 'react';
import styles from "../styles/Sass/LandingPage.module.css"
import profilepic from "../assets/profilepictrans.png"
import Image from 'next/image'
const LandingPage = () => {
    return (
        <section className={styles.section}>
            <div className={styles.leftLP}>
           <p>Hi There I&#39;m </p> 
           <h1>Alex Tran</h1>
            <h3>Self-Taught 
              <br></br>
            Full Stack Web Developer</h3>
           
            </div>
            <div className={styles.rightLP}>
                
                <div className={styles.image}>
                   <Image src={profilepic} className={styles.image} /> 
                </div>
                
            </div>
        </section>
    );
}

export default LandingPage;
