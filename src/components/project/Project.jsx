import React from 'react';
import "./project.css";
import IMG1 from '../../assets/1.png';
import IMG2 from '../../assets/2.png';
import IMG3 from '../../assets/3.png';
import IMG4 from '../../assets/4.png';


const portfolioDate = [
  {
    id: 1,
    image: IMG1,
    title: "E-Commerce Website",
    demo: 'https://project-portfolio-1-eight.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: "web designer Dubai",
    demo: 'https://project-portfolio-1-eight.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: "Restaurant Ordering System",
    demo: 'https://fdtrfdi.github.io/ReactProjects/',
  },
  {
    id: 4,
    image: IMG4,
    title: "Finance Task Manager",
    demo: 'https://alkhayma.com/restaurant/al-khayma-heritage-restaurant-dubai',
  },

];

function Project() {
  return (
    <section id="project" className='project'>
      
      <div className='top_section'>
        <h5>Our Work</h5>
        <h2>Recent Projects</h2>
      </div>

      <div className='container project_container'>
        {portfolioDate.map(({ id, image, title, github, demo }) => (
          <article key={id} className='protfolio_item'>
            
            <div className='protfolio_item_img'>
              <img src={image} alt={title} />
            </div>

            <h3>{title}</h3>

            <div className='protfolio_item_btns'>
              <a href={github} target="_blank" className='btn'>Github</a>
              <a href={demo} target="_blank" className='btn btn-primary'>Live Demo</a>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}

export default Project;
