import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
      <p>
        Hello! I'm a dedicated undergraduate student deeply
         enthusiastic about the world of technology, with a focus on full-stack 
         development. I'm driven by a passion for creating innovative solutions and exploring 
         the ever-evolving landscape of software engineering. Feel free to reach out if you're
          interested in learning more about my journey and projects!</p>
      </div>
    </section>
  );
};