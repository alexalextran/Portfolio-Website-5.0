import React, { useState } from 'react';
import styles from "../styles/Sass/Projects.module.css"
import projects from  '../public/data/projects.js'
import ProjectsCard from './UI/ProjectsCard';
import CarouselComponent from './UI/CarouselComponent';

const Projects = () => {
    const [currentProject, setcurrentProject] = useState('Travel Trail');
  
    return (
        <div className={styles.section} id="projects">

            <h1 className={styles.projectTitle} id="carousel" >Projects</h1>

            <div>
            <CarouselComponent currentProject={currentProject}/>
            </div>

            <div className={styles.projectCard__wrapper}>
            {
                projects.map((project) => {
                    var bruh = Object.keys(project.img)[0]
                return(<ProjectsCard setcurrentProject={setcurrentProject} key={project.name} name={project.name} img={project.img[bruh]} desc={project.desc} linkGit={project.linkGit} linkSite={project.linkSite}/>)
                })
            }
             </div>
        </div>
    );
}

export default Projects;
