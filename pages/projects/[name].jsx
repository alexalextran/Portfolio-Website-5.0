import React from 'react';
import projects from  '../../public/data/projects.js'
import ProjectData from '../../components/UI/ProjectData.jsx';
import styles from "../../styles/Sass/ProjectsDynamic.module.css"
import { BsGithub } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link.js';


export const getStaticPaths = () => {
//generates all possible routes and links for every project
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
    //filters out the projects from the object by using the context params
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
         
                <div className={styles.stackLink}>
                   
                       <div className={styles.stack__array}>
                       <h4>Stack</h4> 
                       {
                        (project.stack).map((stack, index) => 
                        <p key={index}>{stack}</p>
                        )
                       }
                       </div>

                
                    
                    <div className={styles.link}>
                       <h4>Links</h4> 
                       <Link href={`${project.linkGit}`}className={styles.rightIcon +" "+ styles.github}>
                        <BsGithub/>
                       </Link>
                       <Link href={`${project.linkSite}`} className={styles.rightIcon +" "+ styles.linkedin}>
                        <HiOutlineArrowNarrowRight/>
                       </Link>

                    </div>
                    
                </div>
            
            <div className={styles.dynamicdata__wrapper}>
            <ProjectData title='Purpose and Direction' text={project.projectdata.purpose} img={project.projectdata.purposeimg}/>
            <ProjectData title='Stack Explanation' text={project.projectdata.stack} img={project.projectdata.stackimg}/>
            <ProjectData title='Issues and Lessons Learnt' text={project.projectdata.issues} img={project.projectdata.issuesimg}/>
            </div>
          
            <a href={'/'}>Back Home</a>
           
        </div>
    );
}

export default Name;
