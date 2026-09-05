import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import WebDesignDubai from "./components/seo-pages/WebDesignDubai";
import WebDevelopmentDubai from "./components/seo-pages/WebDevelopmentDubai";
import EcommerceWebsitesDubai from "./components/seo-pages/EcommerceWebsitesDubai";
import SeoServicesDubai from "./components/seo-pages/SeoServicesDubai";

function App() {
  return (
    <BrowserRouter>

      <Nav />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Project />
              <Services />
              <Contact />
            </>
          }
        />

        {/* MAIN PAGES */}
        <Route path="/about" element={<About />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/projects" element={<Project />} />

        <Route path="/contact" element={<Contact />} />

        {/* SEO PAGES */}
        <Route
          path="/web-design-dubai"
          element={<WebDesignDubai />}
        />

        <Route
          path="/web-development-dubai"
          element={<WebDevelopmentDubai />}
        />

        <Route
          path="/ecommerce-websites-dubai"
          element={<EcommerceWebsitesDubai />}
        />

        <Route
          path="/seo-services-dubai"
          element={<SeoServicesDubai />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;