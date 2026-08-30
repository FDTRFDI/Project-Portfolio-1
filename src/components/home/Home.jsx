import React from "react";
import "./HomeStyles.css";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import HeroImage from "../../assets/home-team.png";

function Home() {
  return (
    <header id="home">
      <div className="home_container">

        <div className="home_socials">
          <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank"><FaGithub /></a>
          <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
        </div>

        <div className="home_content">
          <h1>We Build Professional Websites</h1>
          <h2>Website Development Services</h2>
          <p>Modern, fast, secure, responsive websites for your business.</p>

          <div className="home_buttons">
            <a href="#contact" className="btn btn-primary">Get Your Website</a>
            <a href="#services" className="btn">Explore Services</a>
          </div>
        </div>

        <div className="home_image">
          <img src={HeroImage} alt="web development team" />
        </div>

        <a href="https://wa.me/201234567890" className="whatsapp_float" target="_blank">
          <FaWhatsapp />
        </a>

      </div>
    </header>
  );
}

export default Home;
