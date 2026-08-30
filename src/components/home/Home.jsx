import React from "react";
import "./HomeStyles.css";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="hero_section">
      <div className="hero_overlay"></div>

      {/* زر الواتساب ثابت */}
      <a
        href="https://wa.me/971542483423"
        className="whatsapp_float"
        target="_blank"
      >
        <FaWhatsapp />
      </a>
    </section>
  );
}

export default Home;
