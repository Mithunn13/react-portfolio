import React from "react";

import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const skills = [
    { title: "HTML", imageSrc: "skills/html.png" },
    { title: "CSS", imageSrc: "skills/css.png" },
    { title: "JavaScript", imageSrc: "skills/javascript.png" },
    { title: "React.js", imageSrc: "skills/react.png" },
    { title: "Node.js", imageSrc: "skills/node.png" },
    { title: "MongoDB", imageSrc: "skills/mongodb.png" },
    { title: "Express.js", imageSrc: "skills/express.png" },
  ];

  const history = [
    {
      organisation: "Upto Skills",
      role: "Frontend Intern",
      startDate: "June 2024",
      endDate: "July 2024",
      imageSrc: "history/uptoskills.png",
      experiences: [
        "Worked on the frontend of the Experiment Tracker web project.",
        "Collaborated with team members to improve UI/UX design and performance.",
        "Gained experience in version control using Git and GitHub."
      ],
    },
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
