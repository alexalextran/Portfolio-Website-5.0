import React from 'react';
import styles from "../styles/Sass/LandingPage.module.css"
const LandingPage = () => {
    return (
        <section className={styles.section}>
            <div>
           <p>Hi There I&#39;m </p> 
           <h1>Alex Tran</h1>
            <h3>Self-Taught 
              <br></br>
            Full Stack Web Developer</h3>
            <p>Im a Computer Science Student with who is looking to specialize in web dev</p>
            </div>
        </section>
    );
}

export default LandingPage;
