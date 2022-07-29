import React from 'react';
import styles from "../styles/Sass/Timeline.module.css"
import TimelineCard from './UI/TimelineCard';

const Timeline = () => {
    return (
        <section className={styles.section}>

           <TimelineCard direction={styles.left}/>
           <TimelineCard direction={styles.right}/>
          
        </section>
    );
}

export default Timeline;
