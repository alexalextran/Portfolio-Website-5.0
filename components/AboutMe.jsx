import React from 'react';
import styles from "../styles/Sass/AboutMe.module.css"
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const AboutMe = () => {
    return (
        <section className={styles.section} id="aboutMe">
            <h1>About Me</h1>
            <p>Hey, thanks for taking out the time to check out my portfolio, I&apos;m  <span>Alex</span>, a student at <span>UTS</span> who loves designing <span>web-applications</span> from the ground up.
            My first experience with programming was when I started my Bachelors of computing science at UTS in <span >2021</span>, which i have very much enjoyed, the aspect of problem solving and the creative freedom to make something that programming offers is what makes programming such an enjoyable experience for me. 
            <br/>
            <br/>
            While my course is mainly back-end development, I always felt like something was missing and that&apos;s when I discovered frontend development, starting off with simple tools like HTML and CSS, I gradually discovered my passion for building web applications and ever since that point I&apos;ve been on a journey to hopefully one day becoming a senior full stack web developer.</p>

            <div className={styles.aboutmeDI}>
                <div className={styles.aboutmeDI__left}>
                    <h4>Details</h4>
                    <ul className={styles.aboutmeDI__details}>
                        <li><span>Email:</span> alextran474@gmail.com</li>
                        <li><span>Location:</span> Sydney NSW</li>
                        <li><span>Graduation Date:</span> 2024</li>
                        </ul>

                </div>

                <div className={styles.aboutmeDI__right}>
                <h4>Socials</h4>
                <div className={styles.rightdiv}>

                
                <a href='https://github.com/alexalextran' target="_blank" className={styles.rightIcon +" "+ styles.github} rel="noreferrer">
                    <BsGithub/>
                </a>
                <a href='https://www.linkedin.com/in/alex-tran-221ba8219' target="_blank" className={styles.rightIcon +" "+ styles.linkedin} rel="noreferrer">
                    <BsLinkedin/>
                </a>

                <a href="mailto:alextran474@gmail.com" className={styles.rightIcon +" "+ styles.mail}>
                    <FiMail />
                </a>

                </div>
                </div>
            </div>
            <a className={styles.button} href="AlexTranResume.pdf" target="_blank" ><div className={styles.buttonanimation} download="Alex_Tran_Resume"></div>Download my Resume</a>
        </section>
    );
}

export default AboutMe;
