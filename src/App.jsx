import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

// Load sections/pages only when needed
const About = lazy(() => import("./components/about/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Project = lazy(() => import("./components/project/Project"));
const Services = lazy(() => import("./components/services/Services"));
const Contact = lazy(() => import("./components/contact/Contact"));

const WebDesignDubai = lazy(
  () => import("./components/seo-pages/WebDesignDubai")
);

const WebDevelopmentDubai = lazy(
  () => import("./components/seo-pages/WebDevelopmentDubai")
);

const EcommerceWebsitesDubai = lazy(
  () => import("./components/seo-pages/EcommerceWebsitesDubai")
);

const SeoServicesDubai = lazy(
  () => import("./components/seo-pages/SeoServicesDubai")
);

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Suspense fallback={null}>
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
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;