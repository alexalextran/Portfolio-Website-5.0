import React from "react";
import styles from "../styles/Sass/Timeline.module.css";
import TimelineCard from "./UI/TimelineCard";

const Timeline = () => {
  return (
    <section className={styles.section} id="timeline">
      <h1 className={styles.title}>My Journey So Far</h1>

      <TimelineCard
        direction={styles.left}
        title={"Start of Computing Science"}
        date={"February 2021"}
        text={
          "This date signifies the beginning of my academic journey in Computing Science at the University of Technology Sydney (UTS), marking the official start of my career in technology. This milestone laid the foundation for my growth in the field, where I continue to build both my technical skills and my passion for innovation in the tech industry"
        }
        parllaxValues={"-20%"}
      />

      <TimelineCard
        direction={styles.right}
        title={"Personal Projects"}
        date={"May 2021"}
        text={
          "It wasn’t until a few months after I began coding that I started working on personal projects outside of university. These projects included simple programs such as mini-games and small GUI applications, all developed using Java."
        }
        parllaxValues={"20%"}
      />

      <TimelineCard
        direction={styles.left}
        title={"Front end Development"}
        date={"July 2021"}
        text={
          "Throughout my course, I began to feel that something was missing. While I enjoyed backend development, I found that it lacked the creative aspects I was seeking. It was then that I discovered frontend development. I started with the basics, using HTML and CSS to create small static websites. As I gained more experience, I became increasingly drawn to the design and user interaction elements of development. This eventually led me to make frontend development my primary focus, where I could combine technical skills with creativity to deliver engaging and dynamic user experiences."
        }
        parllaxValues={"-20%"}
      />

      <TimelineCard
        direction={styles.right}
        title={"Front end Advancement's"}
        date={"December 2021"}
        text={
          "After five months of learning CSS and web development, I began exploring more advanced concepts such as databases and frameworks. This exploration led me to React and Firebase—my first JavaScript framework and database solution. Around this time, I also began taking on more complex projects, which allowed me to apply my growing skill set and further deepen my understanding of full-stack development."
        }
        parllaxValues={"20%"}
      />

      <TimelineCard
        direction={styles.left}
        title={"SLDC and Agile Development"}
        date={"August 2022"}
        text={
          " It was during this time that I gained a deeper understanding of the software development lifecycle, including the practicalities and technicalities involved in developing and maintaining software. Alongside this, I dedicated more time to improving my academic performance in university courses, balancing both theoretical learning and hands-on project work."
        }
        parllaxValues={"-20%"}
      />

      <TimelineCard
        direction={styles.right}
        title={"Freelance Web Development"}
        date={"January 2023"}
        text={
          "During this time, I worked as a freelance web developer on the side, designing, developing, and deploying professional websites for clients. One notable project involved creating a website for a non-profit educational organization, where I integrated custom domain hosting and YouTube API functionality using front-end technologies. Collaborating closely with clients, I delivered high-quality website solutions tailored to their goals and brand identity, all while honing my technical and client-facing skills."
        }
        parllaxValues={"20%"}
      />

      <TimelineCard
        direction={styles.left}
        title={"Travel Trail"}
        date={"January 2024"}
        text={
          "In my final year, I felt confident enough in my skills to design and develop a commercial-grade full-stack application that addressed a genuine real-world problem. The project, an Advanced Trip Planner, was built using TypeScript, Redux, Firebase, and Next.js. I designed and implemented a comprehensive enterprise application with robust CRUD functionality, enabling users to efficiently manage, share, and organize travel activities and locations. To further enhance the user experience, I integrated advanced features such as a social media-style interaction system, allowing users to engage with each other and share their travel experiences. Additionally, I implemented dynamic location and place data management, providing users with seamless and interactive planning tools. This project not only sharpened my technical abilities but also gave me valuable insights into building scalable, user-focused applications."
        }
        parllaxValues={"-20%"}
      />
    </section>
  );
};

export default Timeline;
