import React from "react";
import styles from "../styles/Sass/AboutMe.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const AboutMe = () => {
  return (
    <section className={styles.section} id="aboutMe">
      <h1>About Me</h1>

      <p>
        Hey, thanks for taking the time to check out my portfolio! I&apos;m{" "}
        <span>Alex</span>, a{" "}
        <span>Computing Science (Honors) student at UTS</span> with a passion
        for designing and developing web applications that deliver exceptional
        user experiences. My journey with programming began in <span>2021</span>{" "}
        when I started my degree, and I quickly became captivated by the{" "}
        <span>problem-solving</span> and <span>creative</span> aspects of
        software development.
        <br></br>
        <br></br>
        While my studies primarily focus on <span>back-end development</span>, I
        found my true passion in <span>front-end</span> and{" "}
        <span>full-stack development</span>—building intuitive, user-friendly
        interfaces and scalable applications. I’ve worked on various projects,
        from developing a{" "}
        <span>full-stack AI-powered interview simulation tool</span> to creating
        an <span>advanced trip-planning application</span> with dynamic social
        features. As a <span>freelance web developer</span>, I’ve also built and
        deployed <span>professional websites for non-profit organizations</span>
        , integrating tools like <span>Firebase</span>, <span>Next.js</span>,
        and the <span>YouTube API</span>.<br></br>
        <br></br>
        With a strong foundation in technologies like <span>React</span>,{" "}
        <span>TypeScript</span>, and <span>Node.js</span>, and experience in{" "}
        <span>agile development</span> and <span>CI/CD pipelines</span>, I’m
        constantly refining my skills. My goal is to become a{" "}
        <span>senior full-stack developer</span>, crafting impactful digital
        experiences that solve real-world problems.
      </p>

      <div className={styles.aboutmeDI}>
        <div className={styles.aboutmeDI__left}>
          <h4>Details</h4>
          <ul className={styles.aboutmeDI__details}>
            <li>
              <span>Email:</span> alextran474@gmail.com
            </li>
            <li>
              <span>Location:</span> Sydney NSW
            </li>
            <li>
              <span>Graduation Date:</span> 2024
            </li>
          </ul>
        </div>

        <div className={styles.aboutmeDI__right}>
          <h4>Socials</h4>
          <div className={styles.rightdiv}>
            <a
              href="https://github.com/alexalextran"
              target="_blank"
              className={styles.rightIcon + " " + styles.github}
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alex-tran-221ba8219"
              target="_blank"
              className={styles.rightIcon + " " + styles.linkedin}
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>

            <a
              href="mailto:alextran474@gmail.com"
              className={styles.rightIcon + " " + styles.mail}
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>
      <a className={styles.button} href="AlexTranResume.pdf" target="_blank">
        <div
          className={styles.buttonanimation}
          download="Alex_Tran_Resume"
        ></div>
        Download my Resume
      </a>
    </section>
  );
};

export default AboutMe;
