import React, { useEffect, useRef } from 'react';
import styles from "../styles/Sass/Nav.module.css"
import Image from 'next/image'
import logo from '../public/logoalextran.png'
import Link from 'next/link.js';
const Nav = () => {
    
    
  
    if (typeof window !== "undefined") {
        var nav = document.getElementById("nav")
        var img = document.getElementById("img")
        var about = document.getElementById("aboutMe")
      
        document.addEventListener("scroll",  ()=> {  
            
            if (document.body.scrollTop >= (about.getBoundingClientRect().top)){
                nav.classList.add(styles.navColored);
                nav.classList.remove(styles.transparent);
                img.classList.add(styles.inverted)
             } 
             else {
                nav.classList.add(styles.transparent);
                nav.classList.remove(styles.navColored);
                img.classList.remove(styles.inverted)
             }

        });  

   
    };

      
   
    



   
    
    return (
        <section className={styles.section} id="nav">
            <div id='img'>
            <Link href={'/'}>
                <Image src={logo} />
            </Link>
            </div>
            
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
