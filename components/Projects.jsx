import React from 'react';
import styles from "../styles/Sass/Projects.module.css"
import projects from  '../data/projects.js'
import ProjectsCard from './UI/ProjectsCard';

const Projects = () => {
  
    return (
        <div className={styles.section}>

            <h1>Projects</h1>
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
