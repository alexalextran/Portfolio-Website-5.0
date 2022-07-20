import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from "../styles/Sass/Skills.module.css"
import Skill from './UI/Skill';
import skills from '../data/index.js'


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

                 skills.map((skills, index) => {
                    
                    let { img } = skills;
                   return (<Skill name={skills.name} img={img[skills.name]} key={index}/> )
                 })
                }
            </div>

            <div>
                <h2>What I&apos;m Learning</h2>
            </div>
            
            </div>
        </section>
    );
}

export default Skills;
