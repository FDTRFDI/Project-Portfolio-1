import "./home.css";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <header id="home">
      <div className="hero_container">

        {/* SOCIAL ICONS */}
        <div className="social_icons">
          <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank"><FaGithub /></a>
          <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
        </div>

        {/* MAIN TEXT */}
        <div className="hero_text">
          <h1>We Build Professional Websites</h1>
          <h2>Website Development Services</h2>
          <p>Design • Development • SEO • Hosting • Full Support</p>

          <div className="hero_btns">
            <a href="#contact" className="btn btn-primary">Get Your Website</a>
            <a href="#services" className="btn">Explore Services</a>
          </div>
        </div>

        {/* TEAM IMAGE */}
        <div className="hero_image">
          <img src="/team-home.jpg" alt="team" />
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
