import React from "react";
import "./HomeStyles.css";

function Home() {
  return (
    <section id="home" className="hero_section">
      <div className="hero_overlay">

        <div className="hero_content">
          <h1>We Build Professional Websites</h1>
          <h2>Website Development Services</h2>
          <p>Modern, fast, secure, responsive websites for your business.</p>

          <div className="hero_buttons">
            <a href="#contact" className="btn btn-primary">Get Your Website</a>
            <a href="#services" className="btn btn-secondary">Explore Services</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
