import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaFigma, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiRobotframework } from "react-icons/si";
import "./skills.css";
const skillsData = [
  { icon: <FaHtml5 />, title: "HTML5", desc: "Structure & Markup" },
  { icon: <FaCss3 />, title: "CSS3", desc: "UI Styling" },
  { icon: <SiTailwindcss />, title: "TailwindCSS", desc: "Modern Styling" },
  { icon: <FaJs />, title: "JavaScript", desc: "Interactive Logic" },
  { icon: <SiTypescript />, title: "TypeScript", desc: "Typed JS" },
  { icon: <FaReact />, title: "React", desc: "Front-End Framework" },
  { icon: <SiNextdotjs />, title: "Next.js", desc: "Fullstack React" },
  { icon: <FaNodeJs />, title: "NodeJS", desc: "Backend Runtime" },
  { icon: <SiExpress />, title: "ExpressJS", desc: "Node Framework" },
  { icon: <FaPython />, title: "Python", desc: "Backend & AI" },
  { icon: <SiDjango />, title: "Django", desc: "Python Framework" },
  { icon: <SiMongodb />, title: "MongoDB", desc: "NoSQL Database" },
  { icon: <SiPostgresql />, title: "PostgreSQL", desc: "SQL Database" },
  { icon: <FaDatabase />, title: "MySQL", desc: "Relational DB" },
  { icon: <SiFirebase />, title: "Firebase", desc: "Cloud Database" },
  { icon: <FaGitAlt />, title: "Git", desc: "Version Control" },
  { icon: <FaDocker />, title: "Docker", desc: "Containerization" },
  { icon: <SiKubernetes />, title: "Kubernetes", desc: "Orchestration" },
  { icon: <FaAws />, title: "AWS", desc: "Cloud Services" },
  { icon: <SiJira />, title: "Jira", desc: "Project Management" },
  { icon: <SiNotion />, title: "Notion", desc: "Documentation" },
  { icon: <FaFigma />, title: "Figma", desc: "Design & UI" },
  { icon: <SiTensorflow />, title: "TensorFlow", desc: "Machine Learning" },
  { icon: <SiPytorch />, title: "PyTorch", desc: "Deep Learning" },
  { icon: <SiRobotframework />, title: "AI Tools", desc: "Automation & AI" },
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
            <div className="icon">{skill.icon}</div>
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
