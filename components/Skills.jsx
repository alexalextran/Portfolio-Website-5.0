import styles from "../styles/Sass/Skills.module.css"
import Skill from './UI/Skill';
import skillsUse from '../data/skillsUse.js'
import skillsLearning from "../data/skillsLearning";
import { Parallax } from 'react-scroll-parallax';
import { useRef } from "react";

const Skills = () => {
    const skillsuse = useRef();
    const skillslearn = useRef()
    const scaleFactor = 1 / 30;
    function moveBackground(event) {
        const x = event.clientX * scaleFactor;
        const y = event.clientY * scaleFactor;
        skillsuse.current.style.transform = `translate(${x}px, ${y}px)`
        skillslearn.current.style.transform = `translate(${-x}px, ${y}px)`
        }
      

    return (
        <section className={styles.section} onMouseMove={moveBackground}>
            <h1>
                Skills
            </h1>

            <div className={styles.section__wrapper}>

            
            <Parallax translateX={[ -20, 2]} opacity={[0.2, 2]}>
            <div className={styles.skills__wrapper}  ref={skillsuse}>
                <h2>What I Use</h2>
                {
                skillsUse.map((skills, index) => {
                    let { img } = skills;
                   return (<Skill name={skills.name} img={img[skills.name]} key={index}/> )
                 })
                }
                
            </div>
            </Parallax>


            <Parallax translateX={[ 20, -2]} opacity={[0.2, 2]}>
            <div  className={styles.skills__wrapper}  ref={skillslearn}>
                <h2>What I&apos;m Learning</h2>
                {

                skillsLearning.map((skills, index) => {
                    
                    let { img } = skills;
                return (<Skill name={skills.name} img={img[skills.name]} key={index}/> )
                })
                }
            </div>
            </Parallax>
            </div>
        </section>
    );
}

export default Skills;
