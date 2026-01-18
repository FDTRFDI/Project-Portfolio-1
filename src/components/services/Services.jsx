import React from 'react'
import "./services.css"

import { MdDangerous } from 'react-icons/md'
import { IoRocket } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa'

function Services() {
  return (
   <section id='services'> 
      <div className='top_section'>
        <h5> What I Offer </h5>
        <h2> Services </h2>
        </div>
  
  <div className='container  container_services'>

  <article className='card'>
    <MdDangerous className='icon'/>
     <h3> web Design </h3> 
     <p className='text-light'>
      We create visually appealing websites that adapt perfectly to any device and user needs.
     </p>
</article>
      <article className='card'>
    <IoRocket  className='icon'/>
     <h3> fast performance </h3> 
     <p className='text-light'>
      Our websites are optimized for speed, ensuring users get a smooth and efficient experience.
     </p>
     </article>

     <article className='card'>
    <FaCode className='icon'/>
     <h3> clean code  </h3> 
     <p className='text-light'>
      We write maintainable and structured code, making future updates effortless.
     </p>
     </article>
     
     </div>
    </section>

  )
}

export default Services 
