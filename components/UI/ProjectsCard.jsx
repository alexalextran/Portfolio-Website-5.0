import React from 'react';
import Image from 'next/image'
import styles from "../../styles/Sass/Projects.module.css"
import Link from 'next/link'
import { Parallax } from 'react-scroll-parallax';
const ProjectsCard = ({name, img, desc}) => {

    return ( 
    <Parallax  opacity={[0.2, 2]}>
        <div className={styles.card__wrapper}>

          
            <div className={styles.img__wrapper}>
           <Image src = {img.src} layout='fill' alt='projectImage' /> 
           </div> 
            

            <div className={styles.card__overlay}>
                <h1 className={styles.card__title}>{name}</h1>
                <p>{desc}</p>
                <Link href={`/projects/${name}`}>Full Description --&gt;</Link>
            </div>
           
        </div>
        </Parallax>
    );
}

export default ProjectsCard;
