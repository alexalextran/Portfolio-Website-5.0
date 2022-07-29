import React from 'react';
import styles from "../../styles/Sass/Timeline.module.css"
import { Parallax } from 'react-scroll-parallax';

const TimelineCard = ({direction, title, date, text, parllaxValues}) => {

    return (
     
        
        <div className={styles.container + " " + direction}>
        <Parallax  translateX={[parllaxValues, `${(parseInt(parllaxValues)*-1).toString()}%`]} speed={10}>
        <div>
        <h2>{title}</h2>
        <h4>{date}</h4>
        <p>{text}</p>
        </div>
        </Parallax>
       </div>
    );
}

export default TimelineCard;
