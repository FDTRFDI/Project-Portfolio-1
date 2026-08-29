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
        <h2>Our Services</h2>
      </div>

      <div className='container container_services'>

        <article className='card'>
          <MdDesignServices className='icon' />
          <h3>Web Design</h3>
          <p className='text-light'>
            We create visually appealing and modern website designs that adapt perfectly 
            to any device and deliver an exceptional user experience.
          </p>
        </article>

        <article className='card'>
          <IoRocket className='icon' />
          <h3>Fast Performance</h3>
          <p className='text-light'>
            Our websites are optimized for speed, ensuring smooth navigation, quick loading 
            times, and a seamless browsing experience for your users.
          </p>
        </article>

        <article className='card'>
          <FaCode className='icon' />
          <h3>Clean Code</h3>
          <p className='text-light'>
            We write structured, maintainable, and scalable code, making future updates 
            and improvements effortless and efficient.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Services
