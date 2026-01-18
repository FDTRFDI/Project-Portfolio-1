import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
function HomeSocials() {
  return (
    <div className='home_socials'>
        <a href='https://www.linkedin.com/in/maged-elsayed-2443b0267?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmSE2B8LeTE6YTrj8Cy1dFg%3D%3D' target='_blank'><FaLinkedin /> </a>
        <a href='https://github.com/FDTRFDI' target='_blank'> <FaGithub /></a>
        <a href='#' target='_blank'> <CiInstagram /></a>
      
    </div>
  )
}

export default HomeSocials





