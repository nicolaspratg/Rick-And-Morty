import React from "react";
import styles from "./About.module.css";

const getAge = () => {
  const birthDate = new Date(1999, 3, 24); // Months are 0-indexed: 3 = April
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const About = () => {
  return (
    <div className={styles.bodyAbout}>
      <div className={styles.container}>
        <h1>About Me</h1>
        <p>
          Hello, I'm Nicolás de Prat Gay, a {getAge()}-year-old web developer
          focused on building scalable and responsive web applications. Over the
          past few years, I’ve contributed to real-world products across Europe,
          collaborating with cross-functional teams to deliver clean,
          maintainable code using React.js, Next.js, Node.js, and PostgreSQL. I
          value teamwork, adaptability, and clear communication, and I bring
          that mindset to every project I work on. Currently based in Vienna and
          holding an EU passport, I’m open to opportunities across Europe.
        </p>
        <h2>Tech Stack:</h2>
        <ul className={styles.techList}>
          <li>React</li>
          <li>||</li>
          <li>Next.js</li>
          <li>||</li>
          <li>Javascript</li>
          <li>||</li>
          <li>TypeScript</li>
          <li>||</li>
          <li>Node.js</li>
          <li>||</li>
          <li>Express.js</li>
        </ul>
        <h2>My Focus:</h2>
        <p>
          I specialize in building dynamic, responsive websites that prioritize
          performance and user experience. I’m currently working on an exciting
          project that reflects my passion for clean design, modern web
          technologies, and scalable architecture.
        </p>
        <h2>Why I Love What I Do:</h2>
        <p>
          Programming is not just a profession for me; it's a creative outlet. I
          enjoy the challenge of turning ideas into reality and am driven by the
          desire to contribute to the ever-evolving digital landscape.
        </p>
        <h2>Let's Connect:</h2>
        <div>
          <ul className={styles.socList}>
            <li>
              <a href="https://www.instagram.com/nicopratgay/" target="_blank">
                <button className={styles.socIg}></button>
              </a>
            </li>
            <li>
              <a href="mailto:ndepratg@gmail.com" target="_blank">
                <button className={styles.socMail}></button>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ndepratg/"
                target="_blank"
              >
                <button className={styles.socLkdn}></button>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=4306606467794"
                target="_blank"
              >
                <button className={styles.socWpp}></button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
