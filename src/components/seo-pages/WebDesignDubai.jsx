import React from "react";
import { Helmet } from "react-helmet-async";

function WebDesignDubai() {
  const canonicalUrl = "https://webexpert24.com/web-design-dubai";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Web Design Company in Dubai | WebVanta",
    description:
      "Professional web design services in Dubai by WebVanta. Modern, responsive and high-performance websites for businesses, startups and professionals.",
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: "WebVanta",
      url: "https://webexpert24.com/",
    },
  };

  return (
    <>
      <Helmet>
        <title>Web Design Company in Dubai | WebVanta</title>

        <meta
          name="description"
          content="WebVanta provides professional web design services in Dubai. We create modern, responsive and high-performance websites for businesses, startups and professionals."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Web Design Company in Dubai | WebVanta"
        />

        <meta
          property="og:description"
          content="Professional web design services in Dubai. Modern, responsive and high-performance websites by WebVanta."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Web Design Company in Dubai | WebVanta"
        />

        <meta
          name="twitter:description"
          content="Professional web design services in Dubai by WebVanta."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main>

        {/* HERO */}
        <section>
          <h1>Web Design Company in Dubai</h1>

          <p>
            WebVanta provides professional web design services in Dubai,
            helping businesses build modern, responsive and high-performance
            websites that create a strong online presence.
          </p>

          <p>
            We design websites around your business goals, brand identity and
            target audience. From simple business websites to more advanced
            e-commerce experiences, our focus is on creating websites that
            look professional and are easy to use.
          </p>

          <a href="/contact">
            Get a Free Web Design Consultation
          </a>
        </section>

        {/* CUSTOM WEB DESIGN */}
        <section>
          <h2>Custom Web Design Services in Dubai</h2>

          <p>
            Every business has different goals and customers. Instead of using
            a one-size-fits-all approach, WebVanta creates custom website
            designs based on your business requirements.
          </p>

          <p>
            Our web design process focuses on clear layouts, professional
            visual presentation, intuitive navigation and a consistent brand
            experience across the website.
          </p>

          <h3>Business Website Design</h3>

          <p>
            We create professional business websites for companies,
            startups, professionals and local businesses that need a clear and
            trustworthy online presence.
          </p>

          <h3>Professional Website Design</h3>

          <p>
            Your website is often one of the first places potential customers
            interact with your business. We focus on clean design, clear
            messaging and easy navigation so visitors can quickly understand
            your services and take action.
          </p>
        </section>

        {/* RESPONSIVE DESIGN */}
        <section>
          <h2>Responsive Web Design</h2>

          <p>
            Modern websites need to work well across different devices.
            WebVanta builds responsive website layouts that adapt to
            desktops, laptops, tablets and smartphones.
          </p>

          <p>
            We pay attention to mobile layouts, readable typography,
            navigation, buttons and content spacing so visitors can use the
            website comfortably on different screen sizes.
          </p>
        </section>

        {/* UI UX */}
        <section>
          <h2>UI and UX Focused Website Design</h2>

          <p>
            Good web design is more than visual appearance. A website should
            also make it easy for visitors to find information and understand
            what to do next.
          </p>

          <p>
            Our design approach considers user experience, page structure,
            navigation, calls to action and content hierarchy to create a
            smoother experience for your visitors.
          </p>
        </section>

        {/* PERFORMANCE */}
        <section>
          <h2>Fast and High-Performance Websites</h2>

          <p>
            Website performance is an important part of the overall user
            experience. WebVanta focuses on building websites with efficient
            layouts, optimized assets and clean front-end implementation.
          </p>

          <p>
            The goal is to provide visitors with a website that feels fast,
            responsive and reliable while maintaining a professional visual
            experience.
          </p>
        </section>

        {/* ECOMMERCE */}
        <section>
          <h2>E-Commerce Website Design in Dubai</h2>

          <p>
            If you sell products or services online, your website needs to
            make browsing and purchasing simple for customers.
          </p>

          <p>
            WebVanta designs e-commerce websites with clear product
            presentation, responsive layouts, intuitive navigation and
            conversion-focused user experiences.
          </p>

          <p>
            Learn more about our{" "}
            <a href="/ecommerce-websites-dubai">
              e-commerce website development services in Dubai
            </a>
            .
          </p>
        </section>

        {/* TYPES OF WEBSITES */}
        <section>
          <h2>Types of Websites We Design</h2>

          <p>
            Our web design services can be adapted to different business
            requirements and industries.
          </p>

          <ul>
            <li>Business websites</li>
            <li>Corporate websites</li>
            <li>Startup websites</li>
            <li>Portfolio websites</li>
            <li>Professional service websites</li>
            <li>Restaurant websites</li>
            <li>E-commerce websites</li>
            <li>Custom web platforms</li>
          </ul>
        </section>

        {/* PROCESS */}
        <section>
          <h2>Our Web Design Process</h2>

          <p>
            We follow a clear process to turn your business requirements into
            a professional website.
          </p>

          <h3>1. Understanding Your Business</h3>

          <p>
            We start by understanding your business, services, target
            customers and website goals.
          </p>

          <h3>2. Website Structure</h3>

          <p>
            We organize the website structure and content so visitors can
            easily navigate the important sections.
          </p>

          <h3>3. Visual Design</h3>

          <p>
            We create a modern visual direction that matches your brand and
            presents your business professionally.
          </p>

          <h3>4. Responsive Development</h3>

          <p>
            The design is implemented with responsive layouts for different
            screen sizes and devices.
          </p>

          <h3>5. Testing and Improvements</h3>

          <p>
            Before launch, the website is reviewed for usability, responsive
            behavior, navigation and overall performance.
          </p>
        </section>

        {/* WHY WEBVANTA */}
        <section>
          <h2>Why Choose WebVanta?</h2>

          <p>
            We focus on creating websites that combine professional design,
            usability and reliable technical implementation.
          </p>

          <ul>
            <li>Modern and professional website designs</li>
            <li>Responsive layouts for mobile and desktop</li>
            <li>Performance-focused development</li>
            <li>Custom solutions based on business requirements</li>
            <li>Clean and user-friendly interfaces</li>
            <li>Website development support</li>
            <li>E-commerce website solutions</li>
            <li>SEO-focused website structure</li>
          </ul>
        </section>

        {/* DUBAI */}
        <section>
          <h2>Web Design Services for Businesses in Dubai</h2>

          <p>
            Dubai is a competitive business market, and having a professional
            online presence can help businesses communicate their services
            clearly to potential customers.
          </p>

          <p>
            WebVanta works with businesses and professionals looking for
            modern website design and development solutions in Dubai and
            across the UAE.
          </p>

          <p>
            Whether you are launching a new business, improving an existing
            website or creating an online store, we can help you build a
            website tailored to your requirements.
          </p>
        </section>

        {/* WEB DEVELOPMENT INTERNAL LINK */}
        <section>
          <h2>Web Design and Web Development</h2>

          <p>
            Design and development work together to create a successful
            website. After the design stage, the website needs reliable
            front-end and technical implementation.
          </p>

          <p>
            Explore our{" "}
            <a href="/web-development-dubai">
              web development services in Dubai
            </a>{" "}
            to learn more about our development solutions.
          </p>
        </section>

        {/* SEO INTERNAL LINK */}
        <section>
          <h2>SEO-Friendly Website Structure</h2>

          <p>
            A professional website should also provide a solid foundation for
            search engine optimization. Clear page structure, useful content,
            responsive design and good technical implementation can support
            your long-term online visibility.
          </p>

          <p>
            You can learn more about our{" "}
            <a href="/seo-services-dubai">
              SEO services in Dubai
            </a>
            .
          </p>
        </section>

        {/* CTA */}
        <section>
          <h2>Ready to Build Your Website?</h2>

          <p>
            If you are looking for a web design company in Dubai, WebVanta can
            help you plan and build a professional website around your
            business goals.
          </p>

          <p>
            Tell us about your business, your requirements and the type of
            website you need.
          </p>

          <a href="/contact">
            Get a Free Consultation
          </a>
        </section>

        {/* RELATED SERVICES */}
        <section>
          <h2>Related Web Services in Dubai</h2>

          <ul>
            <li>
              <a href="/web-development-dubai">
                Web Development Company in Dubai
              </a>
            </li>

            <li>
              <a href="/ecommerce-websites-dubai">
                E-Commerce Website Development in Dubai
              </a>
            </li>

            <li>
              <a href="/seo-services-dubai">
                SEO Services in Dubai
              </a>
            </li>

            <li>
              <a href="/contact">
                Contact WebVanta
              </a>
            </li>
          </ul>
        </section>

      </main>
    </>
  );
}

export default WebDesignDubai;