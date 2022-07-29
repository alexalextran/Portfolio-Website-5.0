import React from 'react';
import styles from "../../styles/Sass/Timeline.module.css"

const TimelineCard = ({direction}) => {
    return (
        <div className={styles.container + " " + direction}>
        <div>
        <h2>1990 i am born once again lmao!!!!!!!</h2>
        <p>This is even more content awdjwajdwoai dawodj adadawd waidja odawjd </p>
        </div>
       </div>
    );
}

export default TimelineCard;
