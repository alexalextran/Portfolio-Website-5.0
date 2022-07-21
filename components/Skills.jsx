import styles from "../styles/Sass/Skills.module.css"
import Skill from './UI/Skill';
import skillsUse from '../data/skillsUse.js'
import skillsLearning from "../data/skillsLearning";


const Skills = () => {
  

    return (
        <section className={styles.section}>
            <h1>
                Skills
            </h1>

            <div className={styles.section__wrapper}>

            

            <div>
                <h2>What I Use</h2>
                {

                skillsUse.map((skills, index) => {
                    
                    let { img } = skills;
                   return (<Skill name={skills.name} img={img[skills.name]} key={index}/> )
                 })
                }
            </div>

            <div>
                <h2>What I&apos;m Learning</h2>
                {

skillsLearning.map((skills, index) => {
    
    let { img } = skills;
   return (<Skill name={skills.name} img={img[skills.name]} key={index}/> )
 })
}
            </div>
            
            </div>
        </section>
    );
}

export default Skills;
