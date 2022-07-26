import React from 'react';
import projects from  '../../public/data/projects.js'
import Image from 'next/image'
import ProjectPurpose from '../../components/UI/ProjectPurpose.jsx';
import ProjectStack from '../../components/UI/ProjectStack.jsx';
import ProjectIssues from '../../components/UI/ProjectIssues.jsx';
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
            
            <ProjectPurpose/>
            <ProjectStack/>
            <ProjectIssues/>
         
            <Image src={project.img.MaxCozis.src} layout="fixed" height="20px" width="45px" alt='nice'></Image>
        </div>
    );
}

export default Name;
