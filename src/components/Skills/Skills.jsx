import React from 'react';
import './skills.css';

import css from '../../assets/css3.svg';
import expressjs from '../../assets/expressjs.svg';
import figma from '../../assets/figma.svg';
import javascript from '../../assets/javascript.svg';
import nodejs from '../../assets/nodejs.svg';
import reactjs from '../../assets/react.svg';
import tailwind from '../../assets/tailwindcss.svg';
import mongodb from '../../assets/mongodb.svg';

const SkillsData = [
  { id: 1, image: css, title: 'CSS', disc: 'User Interface Styling' },
  { id: 2, image: javascript, title: 'JavaScript', disc: 'Interactive Web Logic' },
  { id: 3, image: reactjs, title: 'React', disc: 'Front-End Framework' },
  { id: 4, image: tailwind, title: 'TailwindCSS', disc: 'Modern UI Styling' },
  { id: 5, image: nodejs, title: 'NodeJS', disc: 'Backend Runtime' },
  { id: 6, image: figma, title: 'Figma', disc: 'Design & Prototyping' },
  { id: 7, image: expressjs, title: 'ExpressJS', disc: 'Node Framework' },
  { id: 8, image: mongodb, title: 'MongoDB', disc: 'Database System' },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      
      <div className='top_section'>
        <h5>Our Skills</h5>
        <h2>Technologies We Use</h2>
      </div>

      <div className='container container_skills'>
        {SkillsData.map(({ id, image, title, disc }) => (
          <article key={id} className='card_skill'>
            
            <div className='icon'>
              <img src={image} alt={title} />
            </div>

            <div className='content'>
              <h4>{title}</h4>
              <p className='text-light'>{disc}</p>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}

export default Skills;
