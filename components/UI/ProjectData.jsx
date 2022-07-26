import React from 'react';
import Image from 'next/image'
import styles from "../../styles/Sass/ProjectsDynamic.module.css"
const ProjectStack = ({title, text, img}) => {
  
    return (
        <div className={styles.dynamicdata__div}>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>

            <div className={styles.dynamicdata__image}>
                <Image src={img['MaxCozis'].src} layout='fill' />
            </div>

           


        </div>
    );
}

export default ProjectStack;
