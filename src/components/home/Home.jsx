import React from 'react'
import "./Home.css"
import me from "../../assets/me.png"
import HomeSocials from './HomeSocials'

function Home() {
  return (
    <div className='home' id='home'>
      <div className='container home_container'>

        <h4>We Build Professional Websites</h4>
        <h1>Website Development Services</h1>
        <h4 className='text-light'>
          Design – Development – SEO – Hosting – Full Support
        </h4>

        <div className='btns'>
          <a href='#contact' className='btn btn-primary'>Get Your Website</a>
          <a href='#services' className='btn'>Explore Services</a>
        </div>

        <div className='me'>
          <img src={me} alt='web development' />
        </div>

        <a href='#about' className='scroll_down'>Scroll Down</a>

        <HomeSocials />
      </div>
    </div>
  )
}

export default Home
