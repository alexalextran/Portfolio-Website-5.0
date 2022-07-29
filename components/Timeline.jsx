import React from 'react';
import styles from "../styles/Sass/Timeline.module.css"
import TimelineCard from './UI/TimelineCard';

const Timeline = () => {
    return (
        <section className={styles.section}>

           <TimelineCard direction={styles.left} title={'Start of Computing Science'} date={"Febuary 2022"} text={"This date marks the day i started my bachelors of computing science at UTS and subsequently the start of my tech journey"} parllaxValues={'-20%'}/>
           <TimelineCard direction={styles.right} title={"Personal Projects"} date={"May 2022"} text={"It wasn't until a couple months after i had started coding, that i would begin to make my own personal projects outside of uni, these projects involved simple programs including several mini games and small GUI applications all built using java"} parllaxValues={'20%'}/>
           <TimelineCard direction={styles.left} title={"Personal Projects"} date={"May 2022"} text={"It wasn't until a couple months after i had started coding, that i would begin to make my own personal projects outside of uni, these projects involved simple programs including several mini games and small GUI applications all built using java"} parllaxValues={'-20%'}/>
           <TimelineCard direction={styles.right} title={"Personal Projects"} date={"May 2022"} text={"It wasn't until a couple months after i had started coding, that i would begin to make my own personal projects outside of uni, these projects involved simple programs including several mini games and small GUI applications all built using java"} parllaxValues={'20%'}/>
          
        </section>
    );
}

export default Timeline;
