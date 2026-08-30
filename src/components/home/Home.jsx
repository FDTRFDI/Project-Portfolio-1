import React from "react";
import "./HomeStyles.css";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from "../../assets/1about-BDAUW0NV.png";

function Home() {
  return (
    <section id="home" className="hero_section">

      <img
        src={heroImage}
        alt="Web Design"
        className="hero_bg"
      />

      <div className="hero_overlay"></div>

      <a
        href="https://wa.me/971542483423"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

    </section>
  );
}

export default Home;