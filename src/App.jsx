import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Project from "./components/project/Project";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";

import WebDesignDubai from "./components/seo-pages/WebDesignDubai";
import WebDevelopmentDubai from "./components/seo-pages/WebDevelopmentDubai";
import EcommerceWebsitesDubai from "./components/seo-pages/EcommerceWebsitesDubai";
import SeoServicesDubai from "./components/seo-pages/SeoServicesDubai";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Project />
              <Services />
              <Contact />
            </>
          }
        />

        {/* Existing Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />

        {/* SEO Service Pages */}
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