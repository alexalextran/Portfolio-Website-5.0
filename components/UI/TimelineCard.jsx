import React from "react";
import styles from "../../styles/Sass/Timeline.module.css";
import { Parallax } from "react-scroll-parallax";

const TimelineCard = ({ direction, title, date, text, parllaxValues }) => {
  //dictates parralax value based on the prop that was passed

  return (
    <div className={styles.container + " " + direction}>
      <Parallax
        translateX={[
          parllaxValues,
          `${(parseInt(parllaxValues) * -1).toString()}%`,
        ]}
        speed={10}
      >
        <div>
          <h2 className={styles.timelineTitle}>{title}</h2>
          <h4 className={styles.timelineDate}>{date}</h4>
          <p className={styles.timelineText}>{text}</p>
        </div>
      </Parallax>
    </div>
  );
};

export default TimelineCard;
