import React from 'react';
import styles from "../styles/Sass/AboutMe.module.css"

const AboutMe = () => {
    return (
        <section className={styles.section}>
            <h1>About Me</h1>
            <p>Hey, thanks for taking out the time to check out my portfolio, I&apos;m  <span>Alex</span>, a student at <span>UTS</span> who loves desigining <span>web-applications</span> from the ground up.
            My first experience with programming was when I started my Bachelors of computing science at UTS in <span >2021</span>, which i have very much enjoyed, the apsect of problem solving and the creative freedom to make anything that programming offers is what makes programming such an enjoyable experience for me. 
            <br/>
            <br/>
            While my course is mainly backend development, I always felt like something was missing and that&apos;s when I discovered frontend development, starting off with simple tools like html and css, I gradually discovered my passion for building web applications and ever since that point I&apos;ve been on a journey to hopefully one day becoming a seinor full stack webdeveloper.</p>

            <div className={styles.aboutmeDI}>
                <div className={styles.aboutmeDI__left}>
                    <h4>Details</h4>
                    <ul className={styles.aboutmeDI__details}>
                        <li>Email: alextran474@gmail.com</li>
                        <li>Location: Sydney NSW</li>
                        <li>Graduation Date: 2024</li>
                        </ul>

                </div>
                <div>
                <h4>Socials</h4>
                
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
