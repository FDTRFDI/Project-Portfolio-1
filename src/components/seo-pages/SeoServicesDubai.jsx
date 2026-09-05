import React from "react";
import { Helmet } from "react-helmet-async";

function SeoServicesDubai() {
  const canonicalUrl = "https://webexpert24.com/seo-services-dubai";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SEO Services in Dubai | WebVanta",
    description:
      "Professional SEO services in Dubai by WebVanta. Improve website visibility with technical SEO, on-page optimization and search-focused strategies.",
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
        <title>SEO Services in Dubai | WebVanta</title>

        <meta
          name="description"
          content="WebVanta provides professional SEO services in Dubai, including technical SEO, on-page optimization and search-focused website improvements."
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta
          property="og:title"
          content="SEO Services in Dubai | WebVanta"
        />

        <meta
          property="og:description"
          content="Professional SEO services in Dubai by WebVanta. Technical SEO and on-page optimization for businesses."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="SEO Services in Dubai | WebVanta"
        />

        <meta
          name="twitter:description"
          content="Professional SEO services in Dubai by WebVanta."
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main>
        <section>
          <h1>SEO Services in Dubai</h1>

          <p>
            WebVanta provides professional SEO services in Dubai to help
            businesses improve their website visibility and create a stronger
            presence in search engines.
          </p>

          <p>
            Our SEO approach focuses on technical improvements, on-page
            optimization, website structure and creating a better experience
            for users and search engines.
          </p>
        </section>

        <section>
          <h2>Technical SEO Services</h2>

          <p>
            Technical SEO helps search engines discover, crawl and understand
            your website. WebVanta focuses on important technical elements
            such as website structure, crawlability, indexing and performance.
          </p>
        </section>

        <section>
          <h2>On-Page SEO</h2>

          <p>
            On-page SEO focuses on improving the content and structure of
            individual website pages. This includes titles, descriptions,
            headings, internal links and relevant website content.
          </p>
        </section>

        <section>
          <h2>SEO for Businesses in Dubai</h2>

          <p>
            Businesses in Dubai need a website that clearly communicates their
            services while making it easy for potential customers to find
            them through search engines.
          </p>

          <p>
            WebVanta can help improve your website structure and optimize
            important pages around relevant business services and search
            intent.
          </p>
        </section>

        <section>
          <h2>Our SEO Approach</h2>

          <ul>
            <li>Technical SEO improvements</li>
            <li>On-page SEO optimization</li>
            <li>Website structure improvements</li>
            <li>Internal linking</li>
            <li>Search-friendly page content</li>
            <li>Performance and usability improvements</li>
          </ul>
        </section>

        <section>
          <h2>Improve Your Website Visibility</h2>

          <p>
            Want to improve your website's search visibility? Contact WebVanta
            to discuss your SEO requirements and website goals.
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
              <a href="/web-development-dubai">
                Web Development Company in Dubai
              </a>
            </li>

            <li>
              <a href="/ecommerce-websites-dubai">
                E-Commerce Website Development in Dubai
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default SeoServicesDubai;