import React from 'react';
import styles from "../styles/Sass/Timeline.module.css"
import TimelineCard from './UI/TimelineCard';

const Timeline = () => {
    return (
        <section className={styles.section} id="timeline">

            <h1 className={styles.title}>My Journey So Far</h1>

           <TimelineCard direction={styles.left} title={'Start of Computing Science'} date={"Febuary 2021"} text={"This date marks the day i started my bachelors of computing science at UTS and subsequently the start of my tech journey"} parllaxValues={'-20%'}/>

           <TimelineCard direction={styles.right} title={"Personal Projects"} date={"May 2021"} text={"It wasn't until a couple months after i had started coding, that i would begin to make my own personal projects outside of uni, these projects involved simple programs including several mini games and small GUI applications all built using java"} parllaxValues={'20%'}/>

           <TimelineCard direction={styles.left} title={"Front end Development"} date={"July 2021"} text={"During my course i had the feeling that something was missing, doing mostly backend development was still enjoyable but it lacked the aspect of creativity, that was when I discovered front end development, i started small using html and css to create mini static websites and one thing after another led to me making front end development as my primary focus."} parllaxValues={'-20%'}/>
           
           <TimelineCard direction={styles.right} title={"Front end Advancement's"} date={"December 2021"} text={"After 5 months of learning css and web dev, i had begun to look into more advanced concpets such as database's and frameworks which led me to React and Firebase my first js framework and database, it also around this time where i took more advanced projects"} parllaxValues={'20%'}/>

           <TimelineCard direction={styles.left} title={"Internship"} date={"August 2022"} text={"After spending half a year learning how to create solid full stack applications, i had determined that i was finally ready to start looking into internships which also coincides with the beginnng of my DSA journey"} parllaxValues={'-20%'}/>
          
        </section>
    );
}

export default Timeline;
