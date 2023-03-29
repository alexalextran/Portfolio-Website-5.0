import React from 'react';
import styles from "../styles/Sass/Timeline.module.css"
import TimelineCard from './UI/TimelineCard';

const Timeline = () => {
    return (
        <section className={styles.section} id="timeline">

            <h1 className={styles.title}>My Journey So Far</h1>

           <TimelineCard direction={styles.left} title={'Start of Computing Science'} date={"February 2021"} text={"This date marks the day I started my bachelors of computing science at UTS and subsequently the start of my tech journey"} parllaxValues={'-20%'}/>

           <TimelineCard direction={styles.right} title={"Personal Projects"} date={"May 2021"} text={"It wasn't until a couple months after I had started coding, that I would begin to make my own personal projects outside of uni, these projects involved simple programs including several mini games and small GUI applications all built using java"} parllaxValues={'20%'}/>

           <TimelineCard direction={styles.left} title={"Front end Development"} date={"July 2021"} text={"During my course I had the feeling that something was missing, doing mostly backend development was still enjoyable but it lacked the aspect of creativity, that was when I discovered front end development, I started small using html and css to create mini static websites and one thing after another led to me making front end development as my primary focus."} parllaxValues={'-20%'}/>
           
           <TimelineCard direction={styles.right} title={"Front end Advancement's"} date={"December 2021"} text={"After 5 months of learning css and web dev, I had begun to look into more advanced concepts such as database's and frameworks which led me to React and Firebase my first js framework and database, it also around this time where I took more advanced projects"} parllaxValues={'20%'}/>

           <TimelineCard direction={styles.left} title={"Project Developments"} date={"August 2022"} text={"After spending half a year learning how to create solid full stack applications, I determined I was ready to take on proper full stack web applications and also spent more time working towards my grades for my univeristy classes"} parllaxValues={'-20%'}/>

           <TimelineCard direction={styles.right} title={"Data Structures And Algorithms"} date={"January 2023"} text={"Spending so much time working on my projects realized I also needed to work on my data structures and algorithms department, so I decided to take a small break from my own projects and start working on leet code questions, this is also the same time i enrolled into my DSA class"} parllaxValues={'20%'}/>
          
        </section>
    );
}

export default Timeline;
