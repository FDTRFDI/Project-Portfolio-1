import React from 'react'
import "./about.css"

import DevImage from "../../assets/about.jpg"

import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

function About() {
  return (
    <section id="about">

      {/* ABOUT HEADER */}
      <div className="about">
        <h5>Get to Know Us</h5>

        <h2>
          About WebVanta
        </h2>
      </div>

      <div className="container about_container">

        {/* IMAGE SECTION */}
        <div className="about_me">
          <div className="about_me_image">

            <img
              src={DevImage}
              alt="WebVanta web design and web development"
            />

          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="about_content">

          {/* ABOUT CARDS */}
          <div className="about_cards">

            {/* EXPERIENCE */}
            <div className="about_card">

              <FaAward className="about_icon" />

              <h5>
                Experience
              </h5>

              <small>
                3+ years in professional web development
              </small>

            </div>

            {/* CLIENTS */}
            <div className="about_card">

              <FiUsers className="about_icon" />

              <h5>
                Clients
              </h5>

              <small>
                200+ satisfied clients worldwide
              </small>

            </div>

            {/* PROJECTS */}
            <div className="about_card">

              <VscFolderLibrary className="about_icon" />

              <h5>
                Projects
              </h5>

              <small>
                80+ successful projects delivered
              </small>

            </div>

          </div>

          {/* ABOUT TEXT */}
          <p>
            WebVanta is a web design and web development company
            providing modern digital solutions for businesses in Dubai
            and worldwide.
          </p>

          <p>
            We create fast, responsive and user-friendly websites
            designed to work smoothly across desktop, tablet and mobile
            devices. Our goal is to turn your business ideas into
            professional digital experiences that help you grow online.
          </p>

          <p>
            Our services include web design, front-end development,
            responsive website development, e-commerce development,
            SEO optimization, domain setup, hosting management and
            ongoing technical support.
          </p>

        </div>

      </div>

    </section>
  )
}

export default About