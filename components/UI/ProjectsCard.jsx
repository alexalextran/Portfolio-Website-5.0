import React from 'react';
import Image from 'next/image'
import styles from "../../styles/Sass/Projects.module.css"
const ProjectsCard = ({name, img, desc}) => {

    return (
        <div className={styles.card__wrapper}>

            <div className={styles.img__wrapper}>
           <Image src = {img.src} layout='fill' alt='projectImage' /> 
           </div> 

            <div className={styles.card__overlay}>
                <h1 className={styles.card__title}>{name}</h1>
                <p>{desc}</p>
            </div>
           
        </div>
    );
}

export default ProjectsCard;
