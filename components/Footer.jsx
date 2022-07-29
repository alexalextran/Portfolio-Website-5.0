import React from 'react';
import styles from "../styles/Sass/Footer.module.css"
const Footer = () => {
    return (
        <section className={styles.section}>
            <p>Thank you for your time! <br></br>Feel free to send a message my way!</p>

            <p>Designed and Developed by Alex Tran</p>

            <div>
            <a target="_blank" rel="noreferrer" href='https://github.com/alexalextran'>Github</a>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/alex-tran-221ba8219'>LinkedIn</a>
            <a target="_blank" rel="noreferrer" href="mailto:alextran474@gmail.com">Email</a>
            </div>
        </section>
    );
}

export default Footer;
