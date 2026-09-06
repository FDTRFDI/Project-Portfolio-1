import React from "react";
import "./project.css";

import IMG1 from "../../assets/alboomdiving.png";
import IMG2 from "../../assets/ecofurniture.png";
import IMG3 from "../../assets/mightysteels.png";
import IMG4 from "../../assets/4.webp";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "E-commerce & Dive Shop",
    description:"Modern e-commerce website designed for a professional diving business",
    demo: "https://www.alboomdiving.com/en",
  },

  {
    id: 2,
    image: IMG2,
    title: "Furniture E-commerce",
    description:"Modern e-commerce website for a furniture business",
    demo: "https://www.ecofurniture4u.com/",
  },

  {
    id: 3,
    image: IMG3,
    title: "Industrial / Corporate",
    description:"Professional website designed for an industrial steel and metal company",
    demo: "https://www.mightysteelworks.com/",
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
                  decoding="async"
                  width="800"
                  height="600"
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