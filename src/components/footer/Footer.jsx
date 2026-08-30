import React from 'react'
import "./footer.css"

import { BsWhatsapp } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { MdLanguage } from 'react-icons/md'

function Footer() {
  return (
    <footer>

      <a href="#home" className="footer_logo">
        WebDev Agency
      </a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">

        {/* WhatsApp */}
        <a
          href="https://wa.me/971542483423"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <BsWhatsapp />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@createwebdesign"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>

        {/* Website */}
        <a
          href="https://project-portfolio-1-eight.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Website"
        >
          <MdLanguage />
        </a>

      </div>

      <div className="footer_copyright">
        <small>
          &copy; WebDev Agency — All rights reserved
        </small>
      </div>

    </footer>
  )
}

export default Footer