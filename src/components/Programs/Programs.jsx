import React from 'react'
import './Programs.css'
import community_support_icon from '../../images/icons/community-support.png'
import contribute_icon from '../../images/icons/contribute.png'
import courses_icon from '../../images/icons/courses.png'
import econai_icon from '../../images/icons/econ-ai.png'
import dashboard_icon from '../../images/icons/personalised-finance-help.png'
import learn_icon from '../../images/icons/play-and-learn.png'
import community_support_bg from '../../images/bg/community-support.jpeg'
import contribute_bg from '../../images/bg/contribute.jpeg'
import courses_bg from '../../images/bg/courses.jpeg'
import econai_bg from '../../images/bg/econai.jpeg'
import dashboard_bg from '../../images/bg/personalised-finance-help.jpeg'
import learn_bg from '../../images/bg/play-and-learn.jpeg'





const Programs = () => {
  return (
    <div className = 'programs'>
      <div className='firstRow'>
        <div className='program'>
            <img src={community_support_bg}/>
            <div className='caption'>
              <img src = {community_support_icon}/>
              <p>Learn</p>
            </div>
        </div>
        <div className='program'>
            <img src={contribute_bg}/>
            <div className='caption'>
              <img src = {contribute_icon}/>
              <p>Contribute</p>
            </div>
        </div>
        <div className='program'>
            <img src={courses_bg}/>
            <div className='caption'>
              <img src = {courses_icon}/>
              <p>Contribute</p>
            </div>
        </div>
      </div>
      <div className='firstRow'>
        <div className='program'>
            <img src={econai_bg}/>
            <div className='caption'>
              <img src = {econai_icon}/>
              <p>Contribute</p>
            </div>
        </div>
        <div className='program'>
            <img src={dashboard_bg}/>
            <div className='caption'>
              <img src = {dashboard_icon}/>
              <p>Contribute</p>
            </div>
        </div>
        <div className='program'>
            <img src={learn_bg}/>
            <div className='caption'>
              <img src = {learn_icon}/>
              <p>Contribute</p>
            </div>
        </div>
      </div>
    </div>

    
  )
}

export default Programs