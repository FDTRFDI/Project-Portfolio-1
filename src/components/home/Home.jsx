import React from "react";
import "./HomeStyles.css";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="hero_section">
      <div className="hero_overlay"></div>

      <a
        href="https://wa.me/+971545234489"
        className="whatsapp_float"
        target="_blank"
      >
        <FaWhatsapp />
      </a>
    </section>
  );
}

export default Home;
