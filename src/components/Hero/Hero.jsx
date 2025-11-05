import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mithun Sakthivel</h1>
        <p className={styles.description}>
          A passionate Computer Science student focused on full-stack development
          and cloud technologies. I enjoy building clean, efficient, and
          user-friendly web applications while constantly exploring new tools
          and frameworks to enhance my development skills.
        </p>
        <a href="mailto:mithunrevathii@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of Mithun"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
