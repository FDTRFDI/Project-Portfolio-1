import React from 'react';
import './skills.css';
import css from '../../assets/css3.svg';
import Xepressjs from '../../assets/expressjs.svg';
import Figma from '../../assets/figma.svg';
import javascript from '../../assets/javascript.svg';
import  Nodejs   from '../../assets/nodejs.svg';
import ReactJS from '../../assets/react.svg';
import Tailwind from '../../assets/tailwindcss.svg';
import Mongodb from '../../assets/mongodb.svg';
const SkillsData = [
{
   id:1,
  image:css , 
  title:'CSS',
 diSc:'User inerface',
}, 

{
   id:2,
  image:javascript , 
  title:'javascript',
 diSc:'interaction',
}, 

{
   id:3,
  image:ReactJS, 
  title:'react',
 diSc:'framework',
}, 

{
   id:4,
  image:Tailwind, 
  title:'TailwindCSS',
 diSc:'User inerface',
}, 

{
   id:5,
  image:Nodejs,
  title:'NodeJS',
 diSc:'Web Server', 
}, 

{
   id:6, 
  image:Figma,
  title:'Figma',
 diSc:'Design Tool ', 
}, 

{
   id:7, 
  image:Xepressjs,
  title:'ExpressJS',
 diSc:'Node Framework ', 
}, 


{
   id:8, 
  image:Mongodb,
  title:'mongodb',
 diSc:'Datebase', 
}, 

  
]



function Skills() {
  return (
    <section className="skills" id="skills"> 
      <div className='top_section'>
        <h5>What skill i have  </h5>
        <h2> My Expreience </h2>
        </div>

        <div className='container container_skills'>
        {SkillsData.map(({id, image, title, disc }) =>(
        <article className='card_skill'>
          <div className='icon'>
          <img src={image}alt=''/>
          </div>
          <div className='content'>
          <h4> {title} </h4>
          <p className='text-light'> { disc} </p>
          </div>

          </article>  


        )  )}
 

        </div>
        </section> 
  );
}

export default Skills;
