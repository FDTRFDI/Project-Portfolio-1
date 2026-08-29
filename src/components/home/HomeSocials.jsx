import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

function HomeSocials() {
  return (
    <div className='home_socials'>
      <a 
        href='https://www.linkedin.com/in/maged-elsayed-2443b0267' 
        target='_blank' 
        rel='noopener noreferrer'
      >
        <FaLinkedin />
      </a>

      <a 
        href='https://github.com/FDTRFDI' 
        target='_blank' 
        rel='noopener noreferrer'
      >
        <FaGithub />
      </a>

      <a 
        href='https://instagram.com' 
        target='_blank' 
        rel='noopener noreferrer'
      >
        <CiInstagram />
      </a>
    </div>
  )
}

export default HomeSocials
