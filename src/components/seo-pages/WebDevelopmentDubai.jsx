import React from "react";
import { Helmet } from "react-helmet-async";

function WebDevelopmentDubai() {
  const canonicalUrl = "https://webexpert24.com/web-development-dubai";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Web Development Company in Dubai | WebVanta",
    description:
      "Professional web development services in Dubai by WebVanta. We build responsive, fast and custom websites for businesses and startups.",
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
        <title>Web Development Company in Dubai | WebVanta</title>

        <meta
          name="description"
          content="WebVanta provides professional web development services in Dubai. We build responsive, fast and custom websites for businesses and startups."
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta
          property="og:title"
          content="Web Development Company in Dubai | WebVanta"
        />

        <meta
          property="og:description"
          content="Professional web development services in Dubai. Fast, responsive and custom websites by WebVanta."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Web Development Company in Dubai | WebVanta"
        />

        <meta
          name="twitter:description"
          content="Professional web development services in Dubai by WebVanta."
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main>
        <section>
          <h1>Web Development Company in Dubai</h1>

          <p>
            WebVanta provides professional web development services in Dubai,
            building modern, responsive and high-performance websites for
            businesses, startups and professionals.
          </p>

          <p>
            We develop websites focused on performance, usability,
            responsiveness and a smooth experience across different devices.
          </p>
        </section>

        <section>
          <h2>Custom Web Development Services in Dubai</h2>

          <p>
            Every business has different requirements. WebVanta creates
            custom web development solutions based on your business goals,
            functionality and target audience.
          </p>

          <p>
            Our development process focuses on clean structure, reliable
            functionality, responsive layouts and performance.
          </p>
        </section>

        <section>
          <h2>Responsive Web Development</h2>

          <p>
            Modern websites need to work properly on desktops, tablets and
            smartphones. We build responsive websites that adapt to different
            screen sizes and provide a consistent user experience.
          </p>
        </section>

        <section>
          <h2>Modern Website Development</h2>

          <p>
            WebVanta develops modern websites with a focus on performance,
            usability and maintainable code. Our solutions can be customized
            for different types of businesses and online services.
          </p>
        </section>

        <section>
          <h2>Why Choose WebVanta?</h2>

          <ul>
            <li>Custom web development solutions</li>
            <li>Responsive and mobile-friendly websites</li>
            <li>Performance-focused development</li>
            <li>Modern and clean website structure</li>
            <li>User-friendly website experiences</li>
            <li>Web design and development support</li>
          </ul>
        </section>

        <section>
          <h2>Web Development for Businesses in Dubai</h2>

          <p>
            Whether you need a new business website or want to improve an
            existing online platform, WebVanta can help develop a website
            based on your business requirements.
          </p>
        </section>

        <section>
          <h2>Get a Web Development Consultation</h2>

          <p>
            Have a website project in mind? Contact WebVanta to discuss your
            requirements and find the right web development solution for your
            business.
          </p>

          <a href="/contact">Get a Free Consultation</a>
        </section>

        <section>
          <h2>Related Web Services in Dubai</h2>

          <ul>
            <li>
              <a href="/web-design-dubai">
                Web Design Company in Dubai
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
          </ul>
        </section>
      </main>
    </>
  );
}

export default WebDevelopmentDubai;