import React, { useEffect, useRef } from 'react';
import styles from "../styles/Sass/Nav.module.css"

const Nav = () => {
    
    
  
    if (typeof window !== "undefined") {
        var nav = document.getElementById("nav")
        var about = document.getElementById("aboutMe")

        console.log(about.getBoundingClientRect().top)
      
        document.addEventListener("scroll",  ()=> {  
            
            if (document.body.scrollTop >= (about.getBoundingClientRect().top)){
                nav.classList.add(styles.navColored);
                nav.classList.remove(styles.transparent);
             } 
             else {
                nav.classList.add(styles.transparent);
                nav.classList.remove(styles.navColored);
             }

        });  

   
    };

      
   
    



   
    
    return (
        <section className={styles.section} id="nav">
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
