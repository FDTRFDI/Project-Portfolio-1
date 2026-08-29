import React from "react";
import "./home.css"
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import HeroImage from "../../assets/home-team.png"; // غيّر اسم الصورة حسب الموجود عندك

function Home() {
  return (
    <header id="home">
      <div className="home_container">

        {/* SOCIAL ICONS */}
        <div className="home_socials">
          <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank"><FaGithub /></a>
          <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
        </div>

        {/* MAIN CONTENT */}
        <div className="home_content">

          <h1 className="home_title">We Build Professional Websites</h1>
          <h2 className="home_subtitle">Website Development Services</h2>

          <p className="home_description">
            We create modern, fast, secure, and fully responsive websites tailored
            to your business needs. Our services include UI/UX design, front‑end
            development, SEO optimization, hosting setup, domain configuration,
            and continuous technical support.
          </p>

          <div className="home_buttons">
            <a href="#contact" className="btn btn-primary">Get Your Website</a>
            <a href="#services" className="btn">Explore Services</a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="home_image">
          <img src={HeroImage} alt="web development team" />
        </div>

        {/* WHATSAPP FLOATING BUTTON */}
        <a
          href="https://wa.me/201234567890"
          className="whatsapp_float"
          target="_blank"
        >
          <FaWhatsapp />
        </a>

      </div>
    </header>
  );
}

export default Home;
