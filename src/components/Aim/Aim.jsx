import React from 'react'
import './Aim.css'
import about_img from '../../images/about.png'
const Aim = () => {
  return (
    <div className='aim'>
        <div className="aim-left">
            <img src = {about_img} className='aim-img'/>
        </div>
        <div className="aim-right">
            <h3>OUR AIM</h3>
            <h2>Cultivating financial literacy is the key to unlocking a world of possibilities. At AMEXLearn, we're dedicated to demystifying the complexities of personal finance, offering clear guidance and practical tips to help you navigate your financial journey with confidence. Whether you're aiming to build wealth, manage debt, or plan for the future, our comprehensive resources and expert insights are here to support you every step of the way. Join our community today and embark on a path towards financial empowerment and security.</h2>
        </div>
    </div>
  )
}

export default Aim