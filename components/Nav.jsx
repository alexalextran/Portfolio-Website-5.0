import React from 'react';
import styles from "../styles/Sass/Nav.module.css"

const Nav = () => {
    return (
        <section className={styles.section}>
            <ul>
                <li>
                    <a href='#aboutMe'>About Me</a>
                </li>
                <li>
                    <a href='#skills'>Skills</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#timeline'>Timeline</a>
                </li>
            </ul>
        </section>
    );
}

export default Nav;
