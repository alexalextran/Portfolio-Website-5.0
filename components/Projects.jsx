import React from 'react';
import styles from "../styles/Sass/Projects.module.css"
import projects from  '../public/data/projects.js'
import ProjectsCard from './UI/ProjectsCard';
import CarouselComponent from './UI/CarouselComponent';

const Projects = () => {
  
    return (
        <div className={styles.section}>

            <h1 className={styles.projectTitle}>Projects</h1>

            <CarouselComponent/>


            <div className={styles.projectCard__wrapper}>
            {
                projects.map((project) => {
                    let { img } = project;
                return(<ProjectsCard key={project.name} name={project.name} img={img["MaxCozis"]} desc={project.desc}/>)
                })
            }
             </div>
        </div>
    );
}

export default Projects;
