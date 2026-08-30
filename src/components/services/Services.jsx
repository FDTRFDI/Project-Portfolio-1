import React from 'react'
import "./services.css"

import { MdDesignServices } from 'react-icons/md'
import { IoRocket } from 'react-icons/io5'
import { FaCode } from 'react-icons/fa'

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

          <h3>Web Design</h3>

          <p className='text-light'>
            We create modern, responsive and user-friendly websites
            designed for businesses in Dubai. Our web designs work
            smoothly across desktop, tablet and mobile devices.
          </p>
        </article>

        {/* WEB DEVELOPMENT */}
        <article className='card'>
          <IoRocket className='icon' />

          <h3>Web Development</h3>

          <p className='text-light'>
            We build fast, scalable and high-performance websites
            using modern web technologies. Our development solutions
            are designed to provide a smooth experience for your customers.
          </p>
        </article>

        {/* CUSTOM DEVELOPMENT */}
        <article className='card'>
          <FaCode className='icon' />

          <h3>Custom Web Development</h3>

          <p className='text-light'>
            We develop custom web solutions with clean and maintainable
            code, tailored to your business requirements and designed
            to grow with your business.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Services