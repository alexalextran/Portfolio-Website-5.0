import React from 'react';
import styles from "../../styles/Sass/Skills.module.css"
import Image from 'next/image'

const Skill = ({name, img}) => {
   
    
    return (
        <div className={styles.skill__card}>
            
            <div className={styles.skill__img}>
           <Image src = {img.src}  height="100%" width="100%" /> 
           </div>
        </div>
    );
}

export default Skill;
