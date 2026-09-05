import React from 'react';
import "./project.css";

import IMG1 from '../../assets/1.webp';
import IMG2 from '../../assets/2.webp';
import IMG3 from '../../assets/3.webp';
import IMG4 from '../../assets/4.webp';


const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "E-Commerce Website",
    description:
      "Modern responsive e-commerce website with a clean user experience.",
    demo: "https://women-ecommerce-ui.onrender.com/",
  },

  {
    id: 2,
    image: IMG2,
    title: "Web Design Dubai",
    description:
      "Modern web design and development portfolio website for a Dubai-based web development service.",
    demo: "https://project-portfolio-1-eight.vercel.app/",
  },

  {
    id: 3,
    image: IMG3,
    title: "Restaurant Ordering System",
    description:
      "Responsive restaurant ordering interface designed for a smooth online customer experience.",
    demo: "https://fdtrfdi.github.io/ReactProjects/",
  },

  {
    id: 4,
    image: IMG4,
    title: "Al Khayma Heritage Restaurant Dubai",
    description:
      "Restaurant website project for Al Khayma Heritage Restaurant in Dubai.",
    demo: "https://alkhayma.com/restaurant/al-khayma-heritage-restaurant-dubai",
  },
];


function Project() {
  return (
    <section id="project" className="project">

      {/* SECTION HEADER */}
      <div className="top_section">

        <h5>Our Work</h5>

        <h2>
          Recent Web Design & Development Projects
        </h2>

      </div>


      {/* PROJECTS */}
      <div className="container project_container">

        {portfolioData.map(
          ({ id, image, title, description, demo }) => (

            <article
              key={id}
              className="protfolio_item"
            >

              {/* PROJECT IMAGE */}
              <div className="protfolio_item_img">

                <img
                  src={image}
                  alt={`${title} - Web Design Project`}
                  loading="lazy"
                />

              </div>


              {/* PROJECT TITLE */}
              <h3>
                {title}
              </h3>


              {/* PROJECT DESCRIPTION */}
              <p className="text-light">
                {description}
              </p>


              {/* LIVE DEMO */}
              <div className="protfolio_item_btns">

                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  aria-label={`View ${title} live demo`}
                >
                  Live Demo
                </a>

              </div>

            </article>

          )
        )}

      </div>

    </section>
  );
}

export default Project;