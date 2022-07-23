import React from 'react';
import projects from  '../../public/data/projects.js'
import Image from 'next/image'
import ProjectPurpose from '../../components/UI/ProjectPurpose.jsx';
import ProjectStack from '../../components/UI/ProjectStack.jsx';
import ProjectIssues from '../../components/UI/ProjectIssues.jsx';
import styles from "../../styles/Sass/ProjectsDynamic.module.css"

export const getStaticPaths = () => {

    const paths = projects.map(project => {
        return{
            params: {name: project.name.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
const name = context.params.name

let filteredProjects = projects.filter(function (project) {
    return project.name === name;
});

return{
    props: { project: filteredProjects[0]}
};

}

const Name = ({project}) => {
 
    return (
        <div className={styles.section}>
            <h1>{project.name}</h1>
            <p className={styles.desc}>{project.desc}</p>
            <div>
                <div>
                    <h4>Stack</h4> 
                    <h4>Links</h4>
                </div>
            </div>
            
            <ProjectPurpose/>
            <ProjectStack/>
            <ProjectIssues/>
         
            <Image src={project.img.MaxCozis.src} layout="fixed" height="20px" width="45px"></Image>
        </div>
    );
}

export default Name;
