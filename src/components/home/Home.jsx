import React from 'react'
import "./Home.css"
import me from "../../assets/me.jpg"
import CV from '../../assets/CV.MAGED.pdf'
// صححنا اسم الملف HomeSocials
import HomeSocials from './HomeSocials'

function Home() {
  return (
    <div className='home' id='home'>
      <div className='container home_container'>
        <h4>Hello I'm</h4>
        <h1>Maged Elsayed </h1>
        <h4 className='text-light'>Front-End Developer</h4>
        <div className='btns'>
          <a href={CV} className='btn' download>Download Cv</a>
          <a href='#' className='btn btn-primary'>Let's talk</a>
        </div>
        <div className='me'>
          <img src={me} alt='' />
        </div>
        <a href='#about' className='scroll_down'>Scroll Down</a>
        <HomeSocials />
      </div>
    </div>
  )
}

export default Home
