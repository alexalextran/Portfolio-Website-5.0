import React from 'react';
import styles from "../styles/Sass/LandingPage.module.css"
import profilepic from "../public/profilepictrans.png"
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax';
const LandingPage = () => {
    return (
        <section className={styles.section}>
          
            <div className={styles.leftLP}>
                    <Parallax translateY={[ 100, -100]}>
           <p>Hi There I&#39;m </p> 
           <h1>Alex Tran</h1>
            <h3>Self-Taught 
              <br></br>
            Full Stack Web Developer</h3>
            </Parallax>
            </div>
           
            <div className={styles.rightLP}>
            <Parallax opacity={[ 2.5, 0]}>
                <div className={styles.image}>
                   <Image src={profilepic} className={styles.image} /> 
                </div>
                </Parallax>
            </div>
        </section>
    );
}

export default LandingPage;
