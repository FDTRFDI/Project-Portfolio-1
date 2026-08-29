import React from 'react'
import "./about.css"
import DevImage from "../../assets/about-dev.png"
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section>
      <div className='about' id='about'>
        <h5>Get to Know Us</h5>
        <h2>About Our Company</h2>
      </div>

      <div className='container about_container'>

        {/* IMAGE SECTION */}
        <div className='about_me'>
          <div className='about_me_image'>
            <img src={DevImage} alt='web development showcase' />
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className='about_content'>

          <div className='about_cards'>

            <div className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ years in professional web development</small>
            </div>

            <div className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>200+ satisfied clients worldwide</small>
            </div>

            <div className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>80+ successful projects delivered</small>
            </div>

          </div>

          <p>
            We are a specialized team in building modern, fast, and fully responsive websites.
            Our mission is to transform your idea into a complete digital product with high
            performance, clean code, and professional design.  
            We provide end‑to‑end solutions including UI/UX design, front‑end development,
            SEO optimization, domain setup, hosting management, and continuous technical support.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About
