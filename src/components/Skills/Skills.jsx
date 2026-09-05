import React from "react";
import "./skills.css";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const skillsData = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    desc: "Modern Web Structure",
  },
  {
    icon: <FaCss3 />,
    title: "CSS3",
    desc: "Responsive UI Design",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    desc: "Interactive Experiences",
  },
  {
    icon: <FaReact />,
    title: "React",
    desc: "Modern Front-End",
  },
  {
    icon: <SiNextdotjs />,
    title: "Next.js",
    desc: "Modern React Framework",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    desc: "Backend Development",
  },
  {
    icon: <FaPython />,
    title: "Python",
    desc: "Backend & Applications",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    desc: "NoSQL Database",
  },
  {
    icon: <SiPostgresql />,
    title: "PostgreSQL",
    desc: "SQL Database",
  },
  {
    icon: <FaFigma />,
    title: "Figma",
    desc: "UI & Website Design",
  },
];

function Skills() {
  return (
    <section id="skills">

      <div className="top_section">
        <h5>Our Skills</h5>
        <h2>Technologies We Use</h2>
      </div>

      <div className="container_skills">
        {skillsData.map((skill, index) => (
          <div className="card_skill" key={index}>

            <div className="icon">
              {skill.icon}
            </div>

            <div>
              <h4>{skill.title}</h4>
              <p>{skill.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;