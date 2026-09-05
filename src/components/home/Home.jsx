import React from "react";
import "./HomeStyles.css";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import heroImage from "../../assets/1about-BDAUW0NV.png";

function Home() {
  return (
    <section id="home" className="hero_section">

      {/* HERO BACKGROUND */}
      <div className="hero_background"></div>

      {/* HERO CONTENT */}
      <div className="hero_container">

        {/* LEFT CONTENT */}
        <div className="hero_content">

          <span className="hero_badge">
            WEB DESIGN & DEVELOPMENT
          </span>

          <h1>
            Web Design & Web Development in Dubai
          </h1>

          <p>
            We create modern, responsive and high-performance websites
            that help businesses stand out and grow online.
          </p>

          {/* CTA BUTTONS */}
          <div className="hero_buttons">

            <a
              href="/contact"
              className="hero_btn primary_btn"
            >
              Get a Free Consultation
              <FaArrowRight />
            </a>

            <a
              href="/projects"
              className="hero_btn secondary_btn"
            >
              View Our Projects
            </a>

          </div>

          {/* TRUST POINTS */}
          <div className="hero_points">

            <span>
              ✓ Responsive Websites
            </span>

            <span>
              ✓ Modern Design
            </span>

            <span>
              ✓ Performance Focused
            </span>

          </div>

        </div>


        {/* RIGHT VISUAL */}
        <div className="hero_visual">

          <div className="hero_image_wrapper">

            <img
              src={heroImage}
              alt="Web design and web development services in Dubai"
              className="hero_image"
              fetchPriority="high"
              decoding="async"
            />

          </div>

          <div className="hero_glow"></div>

        </div>

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