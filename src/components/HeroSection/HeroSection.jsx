import React from 'react'
import './HeroSection.css'
import Video from '../../components/videos/amex_landing_page.mp4'
import dark_arrow from './../../images/dark-arrow.png'
const HeroSection = () => {
  return (
    <div className = 'hero-container'>
 <video src = {Video} autoPlay loop muted />
        <div className='hero-text'>
          <h1>Welcome to</h1>
          <h2>AMEXLearn</h2>
          <h3>Discover, Learn, Thrive</h3>
          <button className='btn'>Explore More<img src={dark_arrow}/></button>
        </div>
        
    </div>
  )
}

export default HeroSection