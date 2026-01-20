import React from 'react'
import "./about.css"
import IMageME from "../../assets/about.jpg"
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section>
    <div className='about' id='about'>
    <h5> Get to know</h5>   
    <h2>About Me  </h2>
    </div>
    <div className='container about_container'>
    <div className='about_me'>
    <div className='about_me_image'>
    <img src={IMageME}alt=''/>
    </div>
    </div>

    <div className='about_content'>
      <div className='about_cards'> 
        <div className='about_card'> 
    <FaAward  className='about_icon'/>
    <h5>Exprience </h5>
    <small> 3+ years working </small>
    </div>
    <div className='about_card'> 
    <FiUsers className='about_icon'/>
    <h5>Clients </h5>
    <small> 200+ worldwide </small>
    </div>

    <div className='about_card'> 
    <VscFolderLibrary   className='about_icon'/>
    <h5>Projects </h5>
    <small> 80+ Completed </small>
    </div>

    </div>
    <p>I am a passionate Front-End Developer focused on building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean, functional, and visually appealing digital experiences.
     </p>
    </div>
    </div>
    </section>
  )
}

export default About
