import React from 'react'
import "./services.css"

import { MdDesignServices } from 'react-icons/md'
import { IoRocket } from 'react-icons/io5'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'

function Services() {
  return (
    <section id='services'>

      <div className='top_section'>
        <h5>What We Offer</h5>
        <h2>Web Design & Development Services in Dubai</h2>
      </div>

      <div className='container container_services'>

        {/* WEB DESIGN */}
        <article className='card'>
          <MdDesignServices className='icon' />

          <h3>
            <a href='/web-design-dubai'>
              Web Design in Dubai
            </a>
          </h3>

          <p className='text-light'>
            We create modern, responsive and user-friendly websites
            designed for businesses in Dubai. Our websites provide a
            professional experience across desktop, tablet and mobile devices.
          </p>

          <a
            href='/web-design-dubai'
            className='service_link'
          >
            Learn More →
          </a>
        </article>


        {/* WEB DEVELOPMENT */}
        <article className='card'>
          <IoRocket className='icon' />

          <h3>
            <a href='/web-development-dubai'>
              Web Development in Dubai
            </a>
          </h3>

          <p className='text-light'>
            We build fast, scalable and high-performance websites
            using modern web technologies. Our development solutions
            are designed around your business goals and customer needs.
          </p>

          <a
            href='/web-development-dubai'
            className='service_link'
          >
            Learn More →
          </a>
        </article>


        {/* E-COMMERCE */}
        <article className='card'>
          <FaShoppingCart className='icon' />

          <h3>
            <a href='/ecommerce-websites-dubai'>
              E-Commerce Websites
            </a>
          </h3>

          <p className='text-light'>
            We develop responsive and user-friendly e-commerce websites
            for businesses that want to sell products online with a
            smooth and professional shopping experience.
          </p>

          <a
            href='/ecommerce-websites-dubai'
            className='service_link'
          >
            Learn More →
          </a>
        </article>


        {/* SEO */}
        <article className='card'>
          <FaSearch className='icon' />

          <h3>
            <a href='/seo-services-dubai'>
              SEO Services in Dubai
            </a>
          </h3>

          <p className='text-light'>
            We provide technical SEO and on-page optimization to help
            businesses improve website visibility, search performance
            and their overall online presence.
          </p>

          <a
            href='/seo-services-dubai'
            className='service_link'
          >
            Learn More →
          </a>
        </article>

      </div>
    </section>
  )
}

export default Services