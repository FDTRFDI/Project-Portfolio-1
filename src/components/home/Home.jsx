import React from "react";
import "./HomeStyles.css";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from "../../assets/1about-BDAUW0NV.png";

function Home() {
  return (
    <section id="home" className="hero_section">

      {/* HERO IMAGE */}
      <img
        src={heroImage}
        alt="Web Design and Web Development services in Dubai"
        className="hero_bg"
      />

      {/* DARK OVERLAY */}
      <div className="hero_overlay"></div>

      {/* SEO CONTENT */}
      <div className="hero_content">
        <h1>Web Design & Web Development in Dubai</h1>

        <p>
          We create modern, responsive and high-performance websites
          for businesses.
        </p>
      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/971542483423"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact WebVanta on WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </section>
  );
}

export default Home;