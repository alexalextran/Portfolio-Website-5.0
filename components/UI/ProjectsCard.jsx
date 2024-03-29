import React from 'react';
import Image from 'next/image'
import styles from "../../styles/Sass/Projects.module.css"
import Link from 'next/link'
import { Parallax } from 'react-scroll-parallax';
const ProjectsCard = ({name, img, desc, setcurrentProject, linkGit, linkSite}) => {

    return ( 
    <Parallax style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} /*opacity={[0.2, 2]}*/>
        <div className={styles.card__wrapper}>

          
            <div className={styles.img__wrapper}>
           <Image src = {img} layout='fill' alt='projectImage' /> 
           </div> 
            

            <div className={styles.card__overlay}>
                <h1 className={styles.card__title}>{name}</h1>
                <p>{desc}</p>
                <Link href={`/projects/${name}`} className={styles.card__link}>Full Description --&gt;</Link>
                <div>
                <a  target="_blank" href={linkGit} rel="noreferrer">Github Repository</a>
                <a  target="_blank" href={linkSite} rel="noreferrer">Live Site</a>
                </div>
                
            </div>
           
        </div>
        <a  href='#carousel' className={styles.button} onClick={() =>  setcurrentProject(name)} /*Changes current projectstate to whatever is clicked */>Click me to change the carousel</a>
        </Parallax>
    );
}

export default ProjectsCard;
