import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from './../../images/next-icon.png'
import back_icon from './../../images/back-icon.png'
import user_1 from './../../images/user-1.png'
const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward= () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='Testimonials'>
        <img src = {next_icon} className ='next-btn' onClick={slideForward}/>
        <img src = {back_icon} className ='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref = {slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src = {user_1}/>
                            <div>
                                <h3>Advika Thakur</h3>
                                <span>IGDTUW</span>
                            </div>
                        </div>
                        <p>
                        I never realized how much I could save just by understanding 
                        my spending habits better. Thanks to AmexLearn, I'm now more
                         confident in my financial decisions!
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src = {user_1}/>
                            <div>
                                <h3>Advika Thakur</h3>
                                <span>IGDTUW</span>
                            </div>
                        </div>
                        <p>
                        I never realized how much I could save just by understanding 
                        my spending habits better. Thanks to AmexLearn, I'm now more
                         confident in my financial decisions!
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src = {user_1}/>
                            <div>
                                <h3>Advika Thakur</h3>
                                <span>IGDTUW</span>
                            </div>
                        </div>
                        <p>
                        I never realized how much I could save just by understanding 
                        my spending habits better. Thanks to AmexLearn, I'm now more
                         confident in my financial decisions!
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src = {user_1}/>
                            <div>
                                <h3>Advika Thakur</h3>
                                <span>IGDTUW</span>
                            </div>
                        </div>
                        <p>
                        I never realized how much I could save just by understanding 
                        my spending habits better. Thanks to AmexLearn, I'm now more
                         confident in my financial decisions!
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials