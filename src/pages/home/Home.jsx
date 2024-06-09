import './home.css'
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import Programs from '../../components/Programs/Programs.jsx'
import Title from '../../components/Title/Title.jsx';
import Aim from '../../components/Aim/Aim.jsx';
import Testimonials from '../../components/Testimonials/Testimonials.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import React, { useRef } from 'react';

const Home = () => {
  const programsRef = useRef(null);
  return (
    <div>
        <HeroSection programsRef={programsRef} />
        <div className="white-background">
            <Title subTitle='OUR SERVICES' title='What We Offer' />
            <div className='container_2' ref={programsRef}>
                <Programs />
            </div>
            <Aim/>
            <Title subTitle = 'TESTIMONIALS' title = 'What People Say' />
            <Testimonials/>
            <Title subTitle='Contact Us' title = 'Get in Touch'/>
            <Contact/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home
