import React from 'react';
import projects from  '../../public/data/projects.js'
import Image from 'next/image'
import ProjectData from '../../components/UI/ProjectData.jsx';

import styles from "../../styles/Sass/ProjectsDynamic.module.css"
import { BsGithub } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link.js';


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
 console.log(project.stack)
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
                       <Link href={`${project.linkgit}`}className={styles.rightIcon +" "+ styles.github}>
                        <BsGithub/>
                       </Link>
                       <Link href={`${project.linksite}`} className={styles.rightIcon +" "+ styles.linkedin}>
                        <HiOutlineArrowNarrowRight/>
                       </Link>

                    </div>
                    
                </div>
            
            <div className={styles.dynamicdata__wrapper}>
            <ProjectData title='Purpose and Direction' text={project.projectdata.purpose} img={project.projectdata.purposeimg}/>
          
            <ProjectData title='Stack Explanation' text={project.projectdata.stack} img={project.projectdata.stackimg}/>
     
            <ProjectData title='Issues and Lessons Learnt' text={project.projectdata.issues} img={project.projectdata.issuesimg}/>
            </div>
          
         
           
        </div>
    );
}

export default Name;
