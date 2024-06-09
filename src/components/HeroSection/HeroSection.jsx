import React,{ useState }  from 'react'
import './HeroSection.css'
import Video from '../../components/videos/amex_landing_page.mp4'
import white_arrow from './../../images/white_arrow.png'
import blue_arrow from './../../images/blue_arrow.png';

const HeroSection = () => {
    const [arrowSrc, setArrowSrc] = useState(white_arrow)
  return (
    <div className = 'hero-container'>
 <video src = {Video} autoPlay loop muted />
        <div className='hero-text'>
          <h1>AMEXLearn</h1>
          <h2>Empowering Financial Futures</h2>
          <button 
          className='btn' 
          onMouseEnter={() => setArrowSrc(blue_arrow)} 
          onMouseLeave={() => setArrowSrc(white_arrow)}
        >
          Explore More<img src={arrowSrc} alt='Arrow'/>
        </button>
        </div>
        
    </div>
  )
}

export default HeroSection