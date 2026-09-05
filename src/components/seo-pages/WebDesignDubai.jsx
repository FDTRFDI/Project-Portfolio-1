import React from "react";
import { Helmet } from "react-helmet-async";

function WebDesignDubai() {
  const canonicalUrl = "https://webexpert24.com/web-design-dubai";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Web Design Company in Dubai | WebVanta",
    description:
      "Professional web design services in Dubai by WebVanta. Modern, responsive and high-performance websites for businesses and startups.",
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
          content="WebVanta provides professional web design services in Dubai. We create modern, responsive and high-performance websites for businesses and startups."
        />

        <link rel="canonical" href={canonicalUrl} />

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

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Web Design Company in Dubai | WebVanta"
        />

        <meta
          name="twitter:description"
          content="Professional web design services in Dubai by WebVanta."
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main>
        <section>
          <h1>Web Design Company in Dubai</h1>

          <p>
            WebVanta provides professional web design services in Dubai,
            creating modern, responsive and high-performance websites for
            businesses, startups and professionals.
          </p>

          <p>
            We design websites that look professional, work smoothly on
            mobile devices and provide a clear experience for your visitors.
          </p>
        </section>

        <section>
          <h2>Professional Web Design Services in Dubai</h2>

          <p>
            A professional website is an important part of your online
            presence. WebVanta creates custom website designs based on your
            business goals, brand and target customers.
          </p>

          <p>
            Our web design approach focuses on responsive layouts, fast
            performance, clear navigation and user-friendly interfaces.
          </p>
        </section>

        <section>
          <h2>Responsive Website Design</h2>

          <p>
            Your website should work properly across desktops, tablets and
            smartphones. We build responsive designs that adapt to different
            screen sizes and provide a consistent user experience.
          </p>
        </section>

        <section>
          <h2>Why Choose WebVanta?</h2>

          <ul>
            <li>Modern and professional website designs</li>
            <li>Mobile-friendly responsive layouts</li>
            <li>Fast and high-performance websites</li>
            <li>Custom solutions for your business</li>
            <li>Clean and user-friendly interfaces</li>
            <li>Web development support</li>
          </ul>
        </section>

        <section>
          <h2>Web Design for Businesses in Dubai</h2>

          <p>
            Whether you are launching a new business or improving an existing
            website, WebVanta can help you create a professional online
            presence designed around your business needs.
          </p>
        </section>

        <section>
          <h2>Get a Web Design Consultation</h2>

          <p>
            Ready to build a professional website for your business?
            Contact WebVanta to discuss your website requirements.
          </p>

          <a href="/contact">Get a Free Consultation</a>
        </section>

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
          </ul>
        </section>
      </main>
    </>
  );
}

export default WebDesignDubai;