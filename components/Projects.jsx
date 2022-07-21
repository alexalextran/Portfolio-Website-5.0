import React from 'react';
import styles from "../styles/Sass/Projects.module.css"
import projects from  '../data/projects.js'

const Projects = () => {
    console.log(projects)
    return (
        <div>
            {
                projects.map((project, index) => {
                return(project.name)
                })
            }
        </div>
    );
}

export default Projects;
